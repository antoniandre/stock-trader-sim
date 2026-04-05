import { AlpacaMarketDataProvider } from '../adapters/market-data/alpaca/alpaca-market-data-provider.js'

let providerInstance = null

export async function getMarketDataProvider() {
  if (!providerInstance) providerInstance = new AlpacaMarketDataProvider()
  return providerInstance
}

export async function getMarketDataIdentity() {
  const provider = await getMarketDataProvider()
  return provider.getIdentity()
}

export async function getMarketDataCapabilities() {
  const provider = await getMarketDataProvider()
  return provider.getCapabilities()
}
