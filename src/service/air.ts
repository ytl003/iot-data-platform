import { api } from './api'

export function getAirData(e: CommonParams) {
  return api.resource('airData').list({
    ...e,
  }).then(r => r.data.data)
}
