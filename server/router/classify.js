const Router = require('koa-router')
const classify = require('../models').classify

let classifyRouter = new Router()

// classify
classifyRouter
  .get('/', async (ctx) => {
    ctx.body = await classify.classList()
  })
  .post('/add', async (ctx) => {
    let results =  await classify.createClass(ctx.request.body)
    console.log(results)
    ctx.body = 'ok'
  })
module.exports = classifyRouter