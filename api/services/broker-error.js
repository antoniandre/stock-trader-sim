/** Axios often sets `message` to "Request failed with status code 403" while the real reason is in `response.data`. */
function isGenericAxiosStatusMessage(msg) {
  return typeof msg === 'string' && /^Request failed with status code \d+$/i.test(msg.trim())
}

function extractFromPayload(payload) {
  if (payload == null) return ''
  if (typeof payload === 'string') {
    const t = payload.trim()
    return t || ''
  }
  if (typeof payload !== 'object') return ''

  if (typeof payload.message === 'string' && payload.message.trim()) return payload.message.trim()
  if (typeof payload.msg === 'string' && payload.msg.trim()) return payload.msg.trim()
  if (typeof payload.error === 'string' && payload.error.trim()) return payload.error.trim()
  if (payload.error && typeof payload.error === 'object' && typeof payload.error.message === 'string' && payload.error.message.trim()) {
    return payload.error.message.trim()
  }

  if (Array.isArray(payload.errors) && payload.errors.length) {
    return payload.errors
      .map((item) => (typeof item === 'string' ? item : item?.message || JSON.stringify(item)))
      .join('; ')
  }

  return ''
}

/**
 * HTTP metadata from a failed broker request (e.g. Alpaca `{ code, message }` on `response.data`).
 */
export function getBrokerHttpErrorMeta(error) {
  const status = error?.response?.status
  const payload = error?.response?.data ?? error?.data ?? null
  let code
  if (payload && typeof payload === 'object' && 'code' in payload) {
    const c = payload.code
    if (typeof c === 'number' || typeof c === 'string') code = c
  }
  return { brokerStatus: typeof status === 'number' ? status : undefined, brokerCode: code }
}

export function normalizeBrokerError(error, fallback = 'Broker request failed') {
  if (!error) return fallback
  if (typeof error === 'string') return error

  const payload = error.response?.data ?? error.data ?? null
  const fromPayload = extractFromPayload(payload)
  if (fromPayload) return fromPayload

  if (typeof error.message === 'string' && error.message.trim()) {
    if (!isGenericAxiosStatusMessage(error.message)) return error.message.trim()
  }

  const st = error.response?.status
  if (typeof st === 'number') return `${fallback} (HTTP ${st})`

  return fallback
}
