const Router = require('koa-router')
const classify = require('../models').classify

let classifyRouter = new Router()

// classify
classifyRouter
  .get('/', async (ctx) => {
    try {
      ctx.body = await classify.classList()
    } catch (e) {
      console.log(e)
    }
  })
  .post('/add', async (ctx) => {
    try {
      let results = await classify.createClass(ctx.request.body)
      if (results) {
        ctx.body = 'ok'
      }
    } catch (e) {
      console.log(e)
    }
  })
module.exports = classifyRouter