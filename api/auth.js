import { createRemoteJWKSet, decodeProtectedHeader, jwtVerify } from 'jose'
import {
  AUTH_MODE,
  AUTH_PROVIDER,
  AUTH_JWT_SECRET,
  AUTH_JWT_ISSUER,
  AUTH_JWT_AUDIENCE,
  SUPABASE_URL,
  SUPABASE_JWT_SECRET,
  DEV_AUTH_USER_ID,
  DEV_AUTH_EMAIL,
  DEV_AUTH_NAME,
  DEV_AUTH_PLAN
} from './config.js'
import { logger } from './logger.js'

let loggedMissingJwtSecret = false
let loggedUuidSecretHint = false

/** Cached JWKS clients keyed by full JWKS URL string. */
const supabaseJwksClients = new Map()

function looksLikeSigningKeyIdOrUuid(value) {
  return /^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(String(value || '').trim())
}

function remoteJwksForSupabase() {
  const base = String(SUPABASE_URL || '').trim().replace(/\/+$/, '')
  if (!base) return null
  const jwksUrl = `${base}/auth/v1/.well-known/jwks.json`
  if (!supabaseJwksClients.has(jwksUrl)) {
    supabaseJwksClients.set(jwksUrl, createRemoteJWKSet(new URL(jwksUrl)))
  }
  return supabaseJwksClients.get(jwksUrl)
}

function userFromJwtPayload(payload) {
  if (!payload?.sub) return null
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

/**
 * Issuer/audience must match the access token. `config.js` mutates process.env for
 * Supabase after binding exports, so we derive defaults here from SUPABASE_URL.
 */
function providerJwtVerifyOptions() {
  const options = {}
  let issuer = AUTH_JWT_ISSUER ? String(AUTH_JWT_ISSUER).trim() : ''
  let audience = AUTH_JWT_AUDIENCE ? String(AUTH_JWT_AUDIENCE).trim() : ''
  if (AUTH_PROVIDER === 'supabase') {
    const base = String(SUPABASE_URL || '').trim().replace(/\/+$/, '')
    if (!issuer && base) issuer = `${base}/auth/v1`
    if (!audience) audience = 'authenticated'
  }
  if (issuer) options.issuer = issuer
  if (audience) options.audience = audience
  return options
}

async function verifyProviderJwt(token) {
  const verifyOptions = providerJwtVerifyOptions()

  if (AUTH_PROVIDER === 'supabase') {
    let header
    try {
      header = decodeProtectedHeader(token)
    }
    catch (err) {
      logger.debug({ err: err?.message || err }, 'JWT header decode failed')
      return null
    }

    const alg = String(header.alg || '').toUpperCase()
    const secretValue = (SUPABASE_JWT_SECRET || AUTH_JWT_SECRET || '').trim()
    const jwks = remoteJwksForSupabase()

    if (secretValue && looksLikeSigningKeyIdOrUuid(secretValue) && !loggedUuidSecretHint) {
      loggedUuidSecretHint = true
      logger.warn(
        'SUPABASE_JWT_SECRET looks like a JWT signing key id (UUID), not the legacy HS256 JWT secret. ' +
          'New Supabase projects verify access tokens with asymmetric keys (JWKS); this API will try JWKS automatically when SUPABASE_URL is set. ' +
          'Remove the UUID from SUPABASE_JWT_SECRET unless you still use the legacy shared secret.'
      )
    }

    // Current Supabase "JWT signing keys" use ES256/RS256 — verify with JWKS (no shared secret on your server).
    if (alg && alg !== 'HS256' && jwks) {
      try {
        const { payload } = await jwtVerify(token, jwks, verifyOptions)
        return userFromJwtPayload(payload)
      }
      catch (err) {
        logger.debug({ err: err?.message || err, alg }, 'Supabase JWKS JWT verification failed')
        return null
      }
    }

    // Legacy HS256 (shared JWT secret) — only if secret is a real symmetric key, not a signing-key UUID.
    if (secretValue && !looksLikeSigningKeyIdOrUuid(secretValue)) {
      try {
        const secret = new TextEncoder().encode(secretValue)
        const { payload } = await jwtVerify(token, secret, verifyOptions)
        return userFromJwtPayload(payload)
      }
      catch (err) {
        logger.debug({ err: err?.message || err }, 'Supabase HS256 JWT verification failed')
      }
    }

    // HS256 failed or no usable secret: try JWKS (covers migration / mixed setups).
    if (jwks) {
      try {
        const { payload } = await jwtVerify(token, jwks, verifyOptions)
        return userFromJwtPayload(payload)
      }
      catch (err) {
        logger.debug({ err: err?.message || err }, 'Supabase JWKS fallback verification failed')
        return null
      }
    }

    if (!secretValue && !loggedMissingJwtSecret) {
      loggedMissingJwtSecret = true
      logger.error(
        'AUTH_MODE=provider with Supabase but SUPABASE_URL is unset and no HS256 SUPABASE_JWT_SECRET — cannot verify JWTs. Set SUPABASE_URL for JWKS, or set the legacy JWT secret.'
      )
    }
    return null
  }

  const secretValue = AUTH_JWT_SECRET
  if (!secretValue) {
    if (!loggedMissingJwtSecret) {
      loggedMissingJwtSecret = true
      logger.error(
        'AUTH_MODE=provider but AUTH_JWT_SECRET is empty — JWT verification is disabled.'
      )
    }
    return null
  }

  const secret = new TextEncoder().encode(secretValue)

  try {
    const { payload } = await jwtVerify(token, secret, verifyOptions)
    return userFromJwtPayload(payload)
  }
  catch (err) {
    logger.debug({ err: err?.message || err }, 'provider JWT verification failed')
    return null
  }
}

export function getAuthSummary() {
  return {
    enabled: AUTH_MODE !== 'off',
    mode: AUTH_MODE,
    provider: AUTH_PROVIDER,
    supportsHostedAuth: AUTH_MODE === 'provider',
    developmentBypass: AUTH_MODE === 'mock',
    tokenVerification: AUTH_MODE === 'provider'
      ? (AUTH_PROVIDER === 'supabase' ? 'supabase-jwks-or-hs256' : 'jwt-hs256')
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

    return next()
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
