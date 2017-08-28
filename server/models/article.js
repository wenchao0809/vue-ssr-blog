/**
 * Created by estding on 17/8/27.
 */

'use strict'
const Sequelize = require('sequelize')
const defineModel = require('../util/DBUtil').defineModel

const article = defineModel('article', {
  publishTime: {
    type: Sequelize.DATE,
  },
  title: {
    type: Sequelize.STRING
  },
  desc: {
    type: Sequelize.TEXT,
  },
  markdown: {
    type: Sequelize.TEXT,
  },
  status: {
    type: Sequelize.STRING,
  }
}, {
  comment: 'article model save all article'
})

async function articleList (limit) {
  try {
    let result = await article.findAndCountAll({})
    return result
  } catch (e) {
    console.log(e)
  }
}

async function addArtile (article) {
  try {
    let result = await article.create(article)
    return result
  } catch (e) {
    console.log(e)
  }
}

// async function publishArticle (id) {
//   try {
//
//   }
// }
async function create () {
  try {
    let log = await article.create({publishTime: '1112', title: 'this is fddf', desc: 'fdjfdj', markdown:'fjjfd##jfjffj', status: 'publish'})
    console.log(log)
  } catch (e) {
    console.log(e)
  }
}

article.sync({force: false})
  .catch((error) => console.log(error))

module.exports = {
  articleList,
  addArtile
}
