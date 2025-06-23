const API_BASE = 'http://localhost:3000/api'

export async function fetchPortfolio() {
  try {
    const res = await fetch(`${API_BASE}/portfolio`)
    if (!res.ok) {
      throw new Error(`HTTP ${res.status}: ${res.statusText}`)
    }
    return await res.json()
  }
  catch (error) {
    console.error('API Error:', error)
    throw error
  }
}

export async function checkHealth() {
  try {
    const res = await fetch(`${API_BASE}/health`)
    if (!res.ok) {
      throw new Error(`HTTP ${res.status}: ${res.statusText}`)
    }
    return await res.json()
  }
  catch (error) {
    console.error('Health check failed:', error)
    throw error
  }
}
