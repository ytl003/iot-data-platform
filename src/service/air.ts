import { api } from './api'

export function getAirData() {
  return api.resource('airData').list({
    filter: { $and: [{ createdAt: { $dateBetween: ['2023-10-01', '2023-10-31'] } }] },
  }).then(r => r.data.data)
}
