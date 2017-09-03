const Router = require('koa-router')
const artilceRouter = require('./article')
const userRouter = require('./user')
const classifyRouter = require('./classify')

module.exports = app => {
  let router = new Router({
    prefix: '/api'
  })
  // Router
  router.use('/articles', artilceRouter.routes(), artilceRouter.allowedMethods())
  router.use('/user', userRouter.routes(), userRouter.allowedMethods)
  router.use('/classify', classifyRouter.routes(), classifyRouter.allowedMethods)
  app.use(router.routes())
  app.use(router.allowedMethods())
}