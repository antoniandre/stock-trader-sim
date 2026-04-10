import { AUTH_MODE, AUTH_PROVIDER } from './config.js'
import { getAuthSummary } from './auth.js'

console.log('===== CONFIG TEST =====')
console.log('Exported AUTH_MODE:', AUTH_MODE)
console.log('Exported AUTH_PROVIDER:', AUTH_PROVIDER)
console.log('getAuthSummary():', getAuthSummary())
