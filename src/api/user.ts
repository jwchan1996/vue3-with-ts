import Request from './index'

interface LoginData {
  email: string,
  password: string
}

// 用户登录
export function login (data: LoginData) {
  return Request.post('/user/login', data)
}
