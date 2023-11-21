import { api } from './api'

export function getSoilData(e: CommonParams) {
  return api.resource('soil').list({
    ...e,
  }).then(r => r.data.data)
}
