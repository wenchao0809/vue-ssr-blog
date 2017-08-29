const Router = require('koa-router')
const article = require('../models/index').article

module.exports = app => {
  let router = new Router()
  // home
  router.get('/api/articles', async (ctx) => {
    ctx.body = await article.articleList(parseInt(ctx.query.limit))
  })

  // article detail
  router.get('/api/articles/title', async(ctx) => {
    let results = await article.findArticleByTitle(ctx.query.title)
    ctx.body = results
  })
  app.use(router.routes())
  app.use(router.allowedMethods())
}