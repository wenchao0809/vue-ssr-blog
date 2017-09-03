module.exports = {
  jwtSecret: 'estding',
  db: {
    host: 'localhost',
    user: 'root',
    // password: '123456',
    password: 'ding912823',
    database: 'estding'
  },
  needAuth: [
    '/api/classify/add',
    '/api/classify/update',
    '/api/article/add',
    '/api/article/update'
  ]
}