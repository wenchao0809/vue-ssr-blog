const Router = require('koa-router')
const artilceRouter = require('./article')
const userRouter = require('./user')

module.exports = app => {
  let router = new Router({
    prefix: '/api'
  })
  // articleRouter
  router.use('/articles', artilceRouter.routes(), artilceRouter.allowedMethods())
  router.use('/login', userRouter.routes(), userRouter.allowedMethods)
  app.use(router.routes())
  app.use(router.allowedMethods())
}