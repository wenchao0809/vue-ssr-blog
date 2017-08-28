const Router = require('koa-router')
const article = require('../models/index').article

module.exports = app => {
  let router = new Router()
  router.get('/api/articles', async (ctx, next) => {
    ctx.body = await article.articleList(ctx.query.limit)
  })
  app.use(router.routes())
  app.use(router.allowedMethods())
}