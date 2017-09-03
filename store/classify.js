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
  [types.UPDATECLASSIFIES] (state, classifies) {
    state.classifies = classifies
  },
  [types.UPDATECURRENTSELECTCLASS] (state, className) {
    state.currentSelectClass = className
  },
  [types.UPDATECURRENTSELECTCLASSARTICLES] (state, articles) {
    state.currentSelectClassArticles = articles
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
    } catch (e) {
      console.log(e)
    }
  }
}
