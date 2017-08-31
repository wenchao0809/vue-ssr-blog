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
    if (authUser) {
      let token = jwt.sign({
        uid: authUser.id
      }, jwtSerect, { expiresIn: `${24 * 7}h` })
      ctx.cookies.set('token', token, {
        // 有效期7天
        maxAge: Date.now() / 1000 + 60 * 60 * 24 * 7,
        // 不设置此属性客户端无法通过document.cookie获取到
        httpOnly: false
      })
      ctx.body = '认证成功'
    } else {
      throw (new Error('用户名密码不正确'))
    }
  })

module.exports = userRouter