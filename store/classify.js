import * as types from '../util/types'
import axios from 'http'

export const state = () => {
  return {
    classifies: [],
    currentSelectClass: '',
    currentSelectClassArticles: [],
    currentSelectArtilce: {},
    isNewArticle: false,
    isDraft: false
  }
}

export const mutations = {
  // 更新所有分类名
  [types.UPDATECLASSIFIES] (state, classifies) {
    state.classifies = classifies
  },
  // 更新当前选择分类
  [types.UPDATECURRENTSELECTCLASS] (state, className) {
    state.currentSelectClass = className
  },
  // 更新当前选择分类下面的所有文章
  [types.UPDATECURRENTSELECTCLASSARTICLES] (state, articles) {
    state.currentSelectClassArticles = articles
  },
  // 更新当前选择的文章
  [types.UPDATECURRENTSELECTEDARTICLE] (state, article) {
    state.currentSelectArtilce = article
    if (article) {
      if (article.status === 'publish' || article.status === 'draft') {
        state.isNewArticle = false
        if (article.status === 'draft') {
          state.isDraft = true
        }
      } else {
        state.isNewArticle = true
      }
    } else {
      // 当前分类下没有任何文章
      state.isNewArticle = 'nothing'
    }
  },
  [types.NEWARTICLE] (state, article) {
    state.currentSelectClassArticles.unshift(article)
  }
}

export const actions = {
  async getClassifies ({commit}) {
    try {
      let res = await axios.get('/api/classify')
      commit(types.UPDATECLASSIFIES, res.data)
      commit(types.UPDATECURRENTSELECTCLASS, res.data[0].className)
    } catch (e) {
      console.log(e)
    }
  },

  async getArticlesByClassName ({commit}, className) {
    try {
      console.log(className)
      let res = await axios.get(`/api/articles/className/?className=${encodeURIComponent(className)}`)
      commit(types.UPDATECURRENTSELECTCLASSARTICLES, res.data)
    } catch (e) {
      console.log(e)
    }
  }
}