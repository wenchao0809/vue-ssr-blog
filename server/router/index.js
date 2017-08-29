const Router = require('koa-router')
const artilceRouter = require('./article')

module.exports = app => {
  let router = new Router({
    prefix: '/api'
  })
  // articleRouter
  router.use('/articles', artilceRouter.routes(), artilceRouter.allowedMethods())
  app.use(router.routes())
  app.use(router.allowedMethods())
}