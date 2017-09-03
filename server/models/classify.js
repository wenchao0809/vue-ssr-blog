const {defineModel, Sequelize} = require('../util/DBUtil').db

const Classify = defineModel('classify', {
  className: {
    type: Sequelize.STRING,
    unique: true
  }
})

Classify.sync()

async function classList () {
  try {
    let results = await Classify.findAndCount()
    return results.rows
  } catch (e) {
    console.log(e)
  }
}

async function createClass (type) {
  type.version = 1
  try {
    let results = await Classify.create(type)
    return results
  } catch (e) {
    console.log(e)
  }
}

async function updateClass (type) {
  try {
    await Classify.update(type, {
      where: {
        id: type.id
      }
    })
  } catch (e) {
    console.log(e)
  }
}

module.exports = {
  createClass,
  updateClass,
  classList
}

