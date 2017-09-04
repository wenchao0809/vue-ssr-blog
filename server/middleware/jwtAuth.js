const jwtSecrect = require('../util/config').jwtSecret
const needAuth = require('../util/config').needAuth
const jwt = require('jsonwebtoken')

module.exports = async function (ctx, next) {
  let url = ctx.request.url
  if (needAuth.indexOf(url) < 0) {
    return next()
  } else {
    let token = ctx.cookies.get('token')
    console.log(token)
    if (!token) {
      ctx.res.status = '401'
    }
    try {
      let decodeToken = jwt.verify(token, jwtSecrect)
      console.log(decodeToken)
      if (decodeToken) {
        return next()
      }
    } catch (e) {
      ctx.res.status = '401'
    }
  }
}