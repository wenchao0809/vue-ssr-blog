import {cookieParse} from '../util/cookieUtil'

export default function ({ isClient, isServer, route, req, res, redirect }) {
  if (isServer) {
    let cookie = cookieParse(req.headers.cookie)
    if (cookie) {
      let path = req.originalUrl
      if (path.indexOf('admin') > 0 && !cookie.token) {
        redirect('/login')
      }
    }
  }
  // 在客户端判读是否需要登陆
  if (isClient) {
    let cookie = cookieParse(document.cookie)
    if (route.path.indexOf('admin') > 0 && !cookie.token) {
      redirect('login')
    }
  }
}