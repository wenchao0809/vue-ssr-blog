module.exports = {
  jwtSecret: 'estding',
  db: {
    host: 'localhost',
<<<<<<< HEAD
    user: 'estdingblog',
    // password: '123456',
    password: 'Blogding912*',
=======
    user: 'root',
    password: '123456',
    // password: 'ding912823',
>>>>>>> eb5e4c4f76dc289beae1e39cf952e64a9aeee33f
    database: 'estding'
  },
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