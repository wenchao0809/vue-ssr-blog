import axios from 'axios'
import * as types from '../util/types'

export const state = () => {
  return {
    articles: [],
    currentSelectedArticle: {}
  }
}

export const mutations = {
  [types.UPDATEARTICLES] (state, articles) {
    // console.log(articles)
    state.articles = articles
  },
  [types.UPDATECURRENTSELECTEDARTICLE] (state, article) {
    state.currentSelectedArticle = article
  }
}

export const actions = {
  async getArticles ({commit}) {
    try {
      let articles = await axios.get('/api/articles?limit=50')
      // console.log(articles.data.rows)
      commit('UPDATEARTICLES', articles.data.rows)
    } catch (e) {
      console.log(e)
    }
  }
}