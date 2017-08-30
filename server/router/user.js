const Router = require('koa-router')
const user = require('../models/user')
const jwt = require('jsonwebtoken')
const jwtSerect = require('../util/config').jwtSecret
let crypto = require('crypto')

let userRouter = new Router()
userRouter
  .post('/', async (ctx) => {
    // 数据库验证
    let pwd = crypto.createHash('sha1').update(ctx.request.body.pwd).digest('hex')
    let authUser = await user.auth({
      userName: ctx.request.body.userName,
      pwd
    })
    console.log(authUser)
    if (authUser) {
      let token = jwt.sign({
        uid: authUser.id
      }, jwtSerect, { expiresIn: `${24 * 7}h` })
      ctx.cookies.set('token', token, {
        maxAge: 60 * 60 * 24 * 7
      })
      console.log(token)
      ctx.body = '认证成功'
    } else {
      throw (new Error('用户名密码不正确'))
    }
  })

module.exports = userRouter