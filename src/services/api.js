import axios from 'axios'

const api = axios.create({
  baseURL: 'https://localhost:44385',
})

export default api
