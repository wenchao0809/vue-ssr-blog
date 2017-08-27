const Sequelize = require('sequelize');
const config = require('./config').db

let dbOrm = new Sequelize(config.database, config.user, config.password, {
  host: 'localhost',
  dialect: 'mysql',

  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
})

dbOrm
    .authenticate()
    .then(() => {
      console.log('Connection has been established successfully.')
    })
    .catch(err => {
      console.error('Unable to connect to the database:', err)
    })
module.exports.dbOrm = dbOrm