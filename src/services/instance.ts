import axios from 'axios'

export const instanceCreate = (URL: string, headers = {}) => {
  return axios.create({
    baseURL: URL,
    // withCredentials: false,
    headers: { accept: 'application/json', ...headers },
  })
}
