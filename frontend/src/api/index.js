const API_BASE = 'http://localhost:3000/api'

// Account & Portfolio.
// --------------------------------------------------------
export async function fetchAccount() {
  try {
    const response = await fetch(`${API_BASE}/account`)
    if (!response.ok) throw new Error(`HTTP ${response.status}: ${response.statusText}`)

    return await response.json()
  }
  catch (error) {
    console.error('API Error:', error)
    throw error
  }
}

export async function fetchPortfolio() {
  try {
    const response = await fetch(`${API_BASE}/portfolio`)
    if (!response.ok) throw new Error(`HTTP ${response.status}: ${response.statusText}`)

    return await response.json()
  }
  catch (error) {
    console.error('API Error:', error)
    throw error
  }
}

export async function checkHealth() {
  try {
    const response = await fetch(`${API_BASE}/health`)
    if (!response.ok) throw new Error(`HTTP ${response.status}: ${response.statusText}`)

    return await response.json()
  }
  catch (error) {
    console.error('Health check failed:', error)
    throw error
  }
}

export async function fetchTradingHistory(limit = 100) {
  try {
    const response = await fetch(`${API_BASE}/trading-history?limit=${limit}`)
    if (!response.ok) throw new Error(`HTTP ${response.status}: ${response.statusText}`)

    return await response.json()
  }
  catch (error) {
    console.error('API Error:', error)
    throw error
  }
}

// Market Data.
// --------------------------------------------------------
export async function fetchAllStocks() {
  try {
    const response = await fetch(`${API_BASE}/stocks`)
    if (!response.ok) throw new Error(`HTTP ${response.status}: ${response.statusText}`)

    return await response.json()
  }
  catch (error) {
    console.error('API Error:', error)
    throw error
  }
}
