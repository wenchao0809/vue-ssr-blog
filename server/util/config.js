module.exports = {
  jwtSecret: 'estding',
  db: {
    host: 'localhost',
    user: 'root',
    // password: '123456',
    password: 'ding912823',
    database: 'estding'
  },
  // db: {
  //   host: 'localhost',
  //   user: 'root',
  //   password: 'ding912823',
  //   database: 'estding'
  // },
  needAuth: [
    '/api/classify/add',
    // '/api/classify',
    '/api/articles/className/',
    '/api/classify/update',
    '/api/articles/add',
    '/api/articles/update',
    '/admin'
  ]
}