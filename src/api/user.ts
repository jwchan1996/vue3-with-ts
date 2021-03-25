import Request from './index'

interface LoginData {
  user: {
    email: string,
    password: string
  }
}

interface ResponseData {
  user: {
    email: string,
    token: string,
    username: string,
    bio: string,
    image: string
  }
}

// 用户登录
export function login (data: LoginData) {
  return Request.post<ResponseData>('/api/users/login', data)
}
