import { APIClient } from '@nocobase/sdk'

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsInJvbGVOYW1lIjoicm9vdCIsImlhdCI6MTY5ODY2OTI3NiwiZXhwIjozMzI1NjI2OTI3Nn0.6JQ87op8_JK7dUZDKSXe1Utlh7oheM95mzYx9WFNEAI'
export const api = new APIClient({
  baseURL: 'http://172.17.55.182:13010/api',
})
api.axios.interceptors.request.use((config) => {
  config.headers = {
    ...config.headers,
    Authorization: `Bearer ${token}`,
  }
  return config
})

export function getAirData(e: CommonParams) {
  return api.resource('airData').list({
    ...e,
  }).then(r => r.data)
}

export function getSoilData(e: CommonParams) {
  return api.resource('soil').list({
    ...e,
  }).then(r => r.data)
}
export function getWarningData(e: CommonParams) {
  return api.resource('warning').list({
    ...e,
  }).then(r => r.data)
}
export interface StaticData {
  key: string
  content: string
}
export function getDataContent(e: CommonParams) {
  return api.resource('dataContent').list({
    pageSize: 1000,
    ...e,
  }).then(r => r.data.data as StaticData[])
}

export function getChatData(data: object) {
  return api.request({
    url: 'charts:query',
    method: 'post',
    data,
  })
}
