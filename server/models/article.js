/**
 * Created by estding on 17/8/27.
 */

'use strict'
const Sequelize = require('sequelize');
const dbOrm = require('../util/DBUtil').dbOrm

const article = dbOrm.define('article', {
  publishTime: {
    type: Sequelize.TIME
  },
  title: {
    type: Sequelize.STRING,
    primaryKey: true
  },
  desc: {
    type: Sequelize.TEXT
  },
  markdown: {
    type: Sequelize.TEXT
  },
  lastUpdateTime: {
    type: Sequelize.TIME
  },
  status: {
    type: Sequelize.STRING
  }
})

async function create () {
  let log = await article.create({publishTime: '1111', title: 'this is tiltle'})
  console.log(log)
}

create()

