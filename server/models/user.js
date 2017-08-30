const {defineModel, Sequelize} = require('../util/DBUtil').db


const user = defineModel('user', {
  name: Sequelize.STRING,
  userName: {
    type: Sequelize.STRING,
    unique: true
  },
  password: Sequelize.STRING,
  avatar: Sequelize.STRING
})

user.sync()

async function auth (authUser) {
  try {
    let result = await user.findOne({
      where: {
        userName: authUser.userName,
        password: authUser.pwd
      }
    })
    if (result) {
      console.log('用户验证通过')
      return result.dataValues
    } else {
      return false
    }
  } catch (e) {
    console.log(e)
  }
}

console.log(auth({
  userName: 'estding',
  pwd: '6c46005182c07af19c5dfaee34501da7fd451aea'
}))

module.exports = {
  auth
}