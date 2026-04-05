import { IS_SIMULATION } from '../config.js'
import { AlpacaBrokerAdapter } from '../adapters/brokers/alpaca/alpaca-broker-adapter.js'
import { SimulationBrokerAdapter } from '../adapters/brokers/simulation/simulation-broker-adapter.js'

let brokerInstance = null

export async function getBrokerAdapter() {
  if (!brokerInstance) {
    brokerInstance = IS_SIMULATION
      ? new SimulationBrokerAdapter()
      : new AlpacaBrokerAdapter()
  }
  return brokerInstance
}

export async function getBrokerIdentity() {
  const broker = await getBrokerAdapter()
  return broker.getIdentity()
}

export async function getBrokerCapabilities() {
  const broker = await getBrokerAdapter()
  return broker.getCapabilities()
}
