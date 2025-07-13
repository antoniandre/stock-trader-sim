// Utilities
// --------------------------------------------------------
export function getEasternTime() {
  const now = new Date()
  return new Date(now.toLocaleString("en-US", { timeZone: "America/New_York" }))
}

export function formatErrorResponse(error, message) {
  console.error(`❌ ${message}:`, error.message)
  return { error: message }
}

export function createStandardResponse(data, timestamp = true) {
  const response = { ...data }
  if (timestamp) response.timestamp = new Date().toISOString()
  return response
}

export function handleTryCatch(fn, fallback = null) {
  return async (...args) => {
    try {
      return await fn(...args)
    }
    catch (error) {
      console.error('❌ Error in function:', error.message)
      return fallback
    }
  }
}
