export function normalizeBrokerError(error, fallback = 'Broker request failed') {
  if (!error) return fallback
  if (typeof error === 'string') return error
  if (typeof error.message === 'string' && error.message.trim()) return error.message

  const payload = error.response?.data || error.data || null
  if (!payload) return fallback
  if (typeof payload.error === 'string' && payload.error.trim()) return payload.error
  if (typeof payload.message === 'string' && payload.message.trim()) return payload.message
  if (Array.isArray(payload.errors) && payload.errors.length) {
    return payload.errors.map((item) => typeof item === 'string' ? item : item?.message || JSON.stringify(item)).join('; ')
  }

  return fallback
}
