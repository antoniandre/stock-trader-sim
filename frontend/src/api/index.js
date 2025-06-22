export async function fetchPortfolio () {
  const res = await fetch('http://localhost:3000/sim/portfolio')
  return await res.json()
}