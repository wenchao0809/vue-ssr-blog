import * as types from '../util/types'
import axios from 'axios'

export const state = () => {
  return {
    classifies: [],
    currentSelectClass: '',
    currentSelectClassArticles: [],
    currentSelectArtilce: {}
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
  }
}

export const actions = {
  async getClassifies ({commit}) {
    try {
      let res = await axios.get('/api/classify')
      commit(types.UPDATECLASSIFIES, res.data)
      console.log(res.data[0].className)
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
      console.log(res.data[0])
      commit(types.UPDATECURRENTSELECTEDARTICLE, res.data[0])      
    } catch (e) {
      console.log(e)
    }
  }
}