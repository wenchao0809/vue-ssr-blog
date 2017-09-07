const jwtSecrect = require('../util/config').jwtSecret
const jwt = require('jsonwebtoken')
const needAuth = require('../util/config').needAuth

module.exports = async function (ctx, next) {
  let url = ctx.request.url
  if (needAuth.indexOf(url) < 0) {
    return next()
  } else {
    let token = ctx.cookies.get('token')
    if (!token) {
      ctx.throw(401, 'auth required')
    } else {
      try {
        let decodeToken = jwt.verify(token, jwtSecrect)
        console.log(decodeToken)
        if (decodeToken.exp > Date.now() / 1000) {
          return next()
        } else {
          ctx.throw(401, 'please new auth')
        }
      } catch (e) {
        ctx.response.redirect('/login')
        ctx.throw(401, 'auth required')
      }
    }
  }
}