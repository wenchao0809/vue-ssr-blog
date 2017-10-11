/**
 * Created by estding on 17/8/27.
 */

'use strict'
const {defineModel, Sequelize} = require('../util/DBUtil').db

const article = defineModel('article', {
  publishTime: {
    type: Sequelize.BIGINT,
    allowNull: true
  },
  title: {
    type: Sequelize.STRING,
    unique: true
  },
  desc: {
    type: Sequelize.TEXT
  },
  markdown: {
    type: Sequelize.TEXT
  },
  status: {
    type: Sequelize.STRING
  },
  className: {
    type: Sequelize.STRING
  }
}, {
  comment: 'article model save all article'
})

/**
 * 查询最近发表的文章
 * @param limit 最多获取多少条
 * @returns {Promise.<*>}
 */
async function articleList (limit) {
  try {
    let result = await article.findAll({
      where: {status: 'publish'},
      limit: limit,
      order: [['publishTime', 'DESC']]
    })
    return result
  } catch (e) {
    console.log(e)
  }
}

async function addArtile (newArticle) {
  try {
    let result = await article.create(newArticle)
    return result
  } catch (e) {
    console.log(e)
  }
}

async function findArticleByTitle (title) {
  console.log(title)
  try {
    let result = await article.find({where: {title: title}})
    return result.dataValues
  } catch (e) {
    console.log(e)
  }
}

// async function publishArticle (id) {
//   try {
//
//   }
// }
// async function create () {
//   try {
//     let log = await article.create()
//     console.log(log)
//   } catch (e) {
//     console.log(e)
//   }
// }
/**
 * 获取分类下所有文章
 * @param className
 * @returns {Promise.<Model[]>}
 */
async function getArticlesByClassify (className) {
  try {
    let results = await article.findAndCount({
      where: {
        className: className
      },
      order: [['updateAt', 'DESC']]
    })
    return results.rows
  } catch (e) {
    console.log(e)
  }
}

async function getArticlesByClassifies (classNames) {
  let results = {}
  console.log(classNames)
  try {
    for (let obj of classNames) {
      console.log(obj.className)
      let result = await getArticlesByClassify(obj.className)
      if (result) {
        results[obj.className] = result
      }
    }
    return results
  } catch (e) {

  }
}
async function updateArticle (upArticle) {
  try {
    upArticle.version++
    let results = await article.update(upArticle, {
      where: {
        id: upArticle.id
      }
    })
    return results
  } catch (e) {
    console.log(e)
  }
}
article.sync()
  .catch((error) => console.log(error))

module.exports = {
  articleList,
  addArtile,
  findArticleByTitle,
  getArticlesByClassify,
  updateArticle,
  getArticlesByClassifies
}
