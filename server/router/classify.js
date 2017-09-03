const Router = require('koa-router')
const classify = require('../models').classify

let classifyRouter = new Router()

// classify
classifyRouter
  .get('/', async (ctx) => {
    ctx.body = await classify.classList()
  })
module.exports = classifyRouter