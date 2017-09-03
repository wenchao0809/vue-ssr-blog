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
  try {
    await Classify.create(type)
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

