import axios from 'axios'
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localstorage'

// const baseUrl = __IS_DEV__ ? 'http://localhost:8000' : 'https://HostingName.com'

export const $api = axios.create({
  baseURL: __API__,
})

$api.interceptors.request.use((config) => {
  if (config.headers) {
    config.headers.Authorization = localStorage.getItem(USER_LOCALSTORAGE_KEY) || ''
  }
  return config
})
