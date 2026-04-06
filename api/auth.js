import { AUTH_MODE, AUTH_PROVIDER, DEV_AUTH_USER_ID, DEV_AUTH_EMAIL, DEV_AUTH_NAME, DEV_AUTH_PLAN } from './config.js'

const VALID_PLANS = new Set(['free', 'pro', 'team'])

function normalizePlan(plan) {
  const value = String(plan || 'free').toLowerCase()
  return VALID_PLANS.has(value) ? value : 'free'
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

function normalizeUser(user) {
  if (!user || !user.id) return null

  return {
    id: String(user.id),
    email: user.email ? String(user.email) : null,
    name: user.name ? String(user.name) : null,
    plan: normalizePlan(user.plan),
    entitlements: {
      apiAccess: normalizePlan(user.plan) !== 'free',
      alerts: normalizePlan(user.plan) !== 'free',
      teamSeats: normalizePlan(user.plan) === 'team'
    },
    authProvider: AUTH_PROVIDER
  }
}

function getDevUser() {
  return normalizeUser({
    id: DEV_AUTH_USER_ID || 'dev-user',
    email: DEV_AUTH_EMAIL || 'dev@example.com',
    name: DEV_AUTH_NAME || 'Dev User',
    plan: DEV_AUTH_PLAN || 'pro'
  })
}

export function getAuthSummary() {
  return {
    enabled: AUTH_MODE !== 'off',
    mode: AUTH_MODE,
    provider: AUTH_PROVIDER,
    supportsHostedAuth: AUTH_MODE === 'provider',
    developmentBypass: AUTH_MODE === 'mock'
  }
}

export function attachUser(req, _res, next) {
  req.user = null

  if (AUTH_MODE === 'off') return next()

  if (AUTH_MODE === 'mock') {
    const headerUser = parseMockUserHeader(req.headers['x-dev-auth-user'])
    req.user = headerUser || getDevUser()
    return next()
  }

  const providerUserId = req.headers['x-auth-user-id']
  if (!providerUserId) return next()

  req.user = normalizeUser({
    id: providerUserId,
    email: req.headers['x-auth-user-email'],
    name: req.headers['x-auth-user-name'],
    plan: req.headers['x-auth-user-plan'] || 'free'
  })

  next()
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
