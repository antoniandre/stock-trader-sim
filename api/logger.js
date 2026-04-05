import pino from 'pino'
import pinoHttp from 'pino-http'

const redactPaths = [
  'req.headers.authorization',
  'req.headers.cookie',
  'headers.authorization',
  'headers.cookie',
  'body.ALPACA_KEY',
  'body.ALPACA_SECRET',
  'body.API_BEARER_TOKEN',
  '*.ALPACA_KEY',
  '*.ALPACA_SECRET',
  '*.API_BEARER_TOKEN'
]

export const logger = pino({
  level: process.env.LOG_LEVEL || 'info',
  redact: {
    paths: redactPaths,
    censor: '[REDACTED]'
  },
  transport: process.env.NODE_ENV === 'production'
    ? undefined
    : {
        target: 'pino-pretty',
        options: {
          colorize: true,
          ignore: 'pid,hostname'
        }
      }
})

let nextRequestId = 1

export function generateRequestId() {
  return `req_${Date.now().toString(36)}_${nextRequestId++}`
}

export function createHttpLogger() {
  return pinoHttp({
    logger,
    genReqId: (req) => req.headers['x-request-id'] || generateRequestId(),
    customSuccessMessage: (req, res) => `${req.method} ${req.url} -> ${res.statusCode}`,
    customErrorMessage: (req, res, error) => `${req.method} ${req.url} errored with ${res.statusCode}: ${error.message}`,
    customAttributeKeys: {
      req: 'request',
      res: 'response',
      err: 'error'
    }
  })
}
