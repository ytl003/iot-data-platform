import { APIClient } from '@nocobase/sdk'

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsInJvbGVOYW1lIjoicm9vdCIsImlhdCI6MTY5ODY2OTI3NiwiZXhwIjozMzI1NjI2OTI3Nn0.6JQ87op8_JK7dUZDKSXe1Utlh7oheM95mzYx9WFNEAI'
export const api = new APIClient({
  baseURL: 'http://61.139.105.162:13010/api',
})
api.axios.interceptors.request.use((config) => {
  config.headers = {
    ...config.headers,
    Authorization: `Bearer ${token}`,
  }
  return config
})
