import axios from 'axios'

const request = axios.create({
  baseURL: process.env.VUE_APP_BASE_API
})

// 请求拦截

// 响应拦截

export default request
