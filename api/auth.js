import { jwtVerify } from 'jose'
import {
  AUTH_MODE,
  AUTH_PROVIDER,
  AUTH_JWT_SECRET,
  AUTH_JWT_ISSUER,
  AUTH_JWT_AUDIENCE,
  SUPABASE_JWT_SECRET,
  DEV_AUTH_USER_ID,
  DEV_AUTH_EMAIL,
  DEV_AUTH_NAME,
  DEV_AUTH_PLAN
} from './config.js'

const VALID_PLANS = new Set(['free', 'pro', 'team'])

function normalizePlan(plan) {
  const value = String(plan || 'free').toLowerCase()
  return VALID_PLANS.has(value) ? value : 'free'
}

function buildEntitlements(plan) {
  const normalizedPlan = normalizePlan(plan)
  return {
    apiAccess: normalizedPlan !== 'free',
    alerts: normalizedPlan !== 'free',
    teamSeats: normalizedPlan === 'team'
  }
}

function parseMockUserHeader(value) {
  if (!value) return null

  try {
    const parsed = JSON.parse(value)
    return normalizeUser(parsed)
  }
  catch {
    return null
  }
}

function nameFromUserMetadata(meta) {
  if (!meta || typeof meta !== 'object') return null
  const display = meta.display_name ?? meta.full_name
  if (display == null) return null
  const s = String(display).trim()
  return s || null
}

function normalizeUser(user) {
  if (!user || !user.id) return null

  const plan = normalizePlan(user.plan)
  const metaName = nameFromUserMetadata(user.user_metadata)
  const resolvedName = user.name ? String(user.name).trim() || null : null

  return {
    id: String(user.id),
    email: user.email ? String(user.email) : null,
    name: resolvedName || metaName,
    plan,
    entitlements: buildEntitlements(plan),
    authProvider: user.authProvider || AUTH_PROVIDER
  }
}

function getDevUser() {
  return normalizeUser({
    id: DEV_AUTH_USER_ID || 'dev-user',
    email: DEV_AUTH_EMAIL || 'dev@example.com',
    name: DEV_AUTH_NAME || 'Dev User',
    plan: DEV_AUTH_PLAN || 'pro',
    authProvider: AUTH_PROVIDER
  })
}

function getBearerToken(req) {
  const authHeader = req.headers.authorization || ''
  if (!authHeader.startsWith('Bearer ')) return null
  return authHeader.slice('Bearer '.length).trim() || null
}

async function verifyProviderJwt(token) {
  const secretValue = AUTH_PROVIDER === 'supabase' ? (SUPABASE_JWT_SECRET || AUTH_JWT_SECRET) : AUTH_JWT_SECRET
  if (!secretValue) throw new Error('AUTH_JWT_SECRET or SUPABASE_JWT_SECRET is required for AUTH_MODE=provider')

  const secret = new TextEncoder().encode(secretValue)
  const verifyOptions = {}
  if (AUTH_JWT_ISSUER) verifyOptions.issuer = AUTH_JWT_ISSUER
  if (AUTH_JWT_AUDIENCE) verifyOptions.audience = AUTH_JWT_AUDIENCE

  const { payload } = await jwtVerify(token, secret, verifyOptions)

  const metaName = nameFromUserMetadata(payload.user_metadata)
  const topName = payload.name != null ? String(payload.name).trim() || null : null

  return normalizeUser({
    id: payload.sub,
    email: payload.email,
    name: topName || metaName,
    plan: payload.plan || payload['https://stocktrader.app/plan'] || 'free',
    authProvider: AUTH_PROVIDER
  })
}

export function getAuthSummary() {
  return {
    enabled: AUTH_MODE !== 'off',
    mode: AUTH_MODE,
    provider: AUTH_PROVIDER,
    supportsHostedAuth: AUTH_MODE === 'provider',
    developmentBypass: AUTH_MODE === 'mock',
    tokenVerification: AUTH_MODE === 'provider'
      ? (AUTH_PROVIDER === 'supabase' ? 'supabase-jwt' : 'jwt-hs256')
      : 'none'
  }
}

export async function attachUser(req, _res, next) {
  req.user = null

  try {
    if (AUTH_MODE === 'off') return next()

    if (AUTH_MODE === 'mock') {
      const headerUser = parseMockUserHeader(req.headers['x-dev-auth-user'])
      req.user = headerUser || getDevUser()
      return next()
    }

    if (AUTH_MODE === 'provider') {
      const token = getBearerToken(req)
      if (!token) return next()
      req.user = await verifyProviderJwt(token)
      return next()
    }

    next()
  }
  catch (error) {
    next(error)
  }
}

export function requireUser(req, res, next) {
  if (!req.user) {
    return res.status(401).json({
      error: 'Unauthorized',
      message: 'Sign in required.'
    })
  }

  next()
}

export function requireEntitlement(entitlement, options = {}) {
  const { message = 'This feature requires a higher plan.' } = options

  return function entitlementMiddleware(req, res, next) {
    if (!req.user) {
      return res.status(401).json({
        error: 'Unauthorized',
        message: 'Sign in required.'
      })
    }

    if (!req.user.entitlements?.[entitlement]) {
      return res.status(403).json({
        error: 'Forbidden',
        message,
        requiredEntitlement: entitlement,
        currentPlan: req.user.plan
      })
    }

    next()
  }
}
