import axios from 'axios'
import * as types from '../util/types'

let marked = require('marked')

marked.setOptions({
  renderer: new marked.Renderer(),
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: false,
  smartLists: true,
  smartypants: false,
  highlight: function (code) {
    return require('highlight.js').highlightAuto(code).value
  }
})

export const state = () => {
  return {
    articles: [],
    currentSelectedArticle: {},
    articlesByClassName: []
  }
}

export const mutations = {
  [types.UPDATEARTICLES] (state, articles) {
    // console.log(articles)
    state.articles = articles
  },
  [types.UPDATECURRENTSELECTEDARTICLE] (state, article) {
    state.currentSelectedArticle = article
  },
  [types.UPDATEARTICELSBYCLASSNAME] (state, articles) {
    state.articlesByClassName = articles
  }
}

export const actions = {
  async getArticles ({commit}) {
    try {
      let articles = await axios.get('/api/articles?limit=50')
      // console.log(articles.data.rows)
      commit('UPDATEARTICLES', articles.data)
    } catch (e) {
      console.log(e)
    }
  },
  async getArticleByTitle ({commit}, title) {
    console.log(title)
    try {
      let article = await axios.get(`/api/articles/title?title=${encodeURIComponent(title)}`)
      commit('UPDATECURRENTSELECTEDARTICLE', article.data)
    } catch (e) {
      console.log(e)
    }
  },
  async getArticlesByClassNames ({commit}, classNames) {
    try {
      let articles = await axios.post('/api/articles/classNames', classNames)
      console.log(articles)
      commit('UPDATEARTICELSBYCLASSNAME', articles.data)
    } catch (e) {
      console.log(e)
    }
  }
}

export const getters = {
  /**
   * 返回经mared解析后的html
   * @param state
   * @returns {*}
   */
  articlesHtml: (state) => {
    if (state.currentSelectedArticle.markdown) {
      return marked(state.currentSelectedArticle.markdown)
    }
  }
}
