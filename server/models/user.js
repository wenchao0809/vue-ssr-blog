const {defineModel, Sequelize} = require('../util/DBUtil').db

const user = defineModel('user', {
  name: Sequelize.STRING,
  userName: Sequelize.STRING,
  password: Sequelize.STRING,
  avatar: Sequelize.STRING
})

user.sync()

module.exports = {}