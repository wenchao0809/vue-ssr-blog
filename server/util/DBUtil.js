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

function defineModel (name, attributes) {
  var attrs = {}
  for (let key in attributes) {
    let value = attributes[key]
    if (typeof value === 'object' && value['type']) {
      value.allowNull = value.allowNull || false
      attrs[key] = value
    } else {
      attrs[key] = {
        type: value,
        allowNull: false
      }
    }
  }
  attrs.id = {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  }
  attrs.createAt = {
    type: Sequelize.BIGINT
  }
  attrs.updateAt = {
    type: Sequelize.BIGINT
  }
  attrs.version = {
    type: Sequelize.INTEGER,
    allowNull: false
  }
  return dbOrm.define(name, attrs, {
    timestamps: false
  })
}
dbOrm
    .authenticate()
    .then(() => {
      console.log('Connection has been established successfully.')
    })
    .catch(err => {
      console.error('Unable to connect to the database:', err)
    })

module.exports.defineModel = defineModel