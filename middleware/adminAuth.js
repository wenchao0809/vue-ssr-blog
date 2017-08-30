
export default function ({ isClient, isServer, route, req, res, redirect }) {

  if (isServer) {
    console.log(req.headers)
    let cookies = req.cookies
    let path = req.originalUrl
    console.log(cookies)
    if (path.indexOf('admin')) {
      redirect('/login')
    }
  }
  //在客户端判读是否需要登陆
  // if (isClient) {
  //   if (route.path.indexOf('admin') > 0 && !isLogin()) {
  //     redirect('login')
  //   }
  // }
}