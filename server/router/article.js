const Router = require('koa-router')
const article = require('../models/index').article

let articleRouter = new Router()
// home
articleRouter
  .get('/', async (ctx) => {
    ctx.body = await article.articleList(parseInt(ctx.query.limit))
  })
  .get('/title', async(ctx) => {
    ctx.body = await article.findArticleByTitle(ctx.query.title)
  })
  .get('/className', async (ctx) => {
    ctx.body = await article.getArticlesByClassify(ctx.query.className)
  })
  .post('/add', async (ctx) => {
    console.log(ctx.request.body)
    ctx.body = await article.addArtile(ctx.request.body)
  })
  .post('/update', async(ctx) => {
    ctx.body = await article.updateArticle(ctx.request.body)
  })
module.exports = articleRouter