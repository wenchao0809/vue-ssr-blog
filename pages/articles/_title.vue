<template>
  <div class="content-container-wrapper ">
    <div class="content">
      <article class="article">
        <header class="content-header">
          <h1>{{ currentSelectedArticle.title }}</h1>
          <time>{{ date }}</time>
        </header>
        <div v-html="articlesHtml" class="article-content">
        </div>
      </article>
      <div class="copyright">
        <p>©  anything - 2017 estding</p>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapState, mapGetters} from 'vuex'
  import '../../assets/css/tomorrow.css'
  import '../../assets/css/estding-md-theme.scss'
  import {formateDate} from '../../util/common'

  export default {
    data () {
      return {
      }
    },
    async fetch ({isServer, store, params}) {
      if (!isServer) {
        return
      }
      await store.dispatch('articles/getArticleByTitle', params.title)
    },
    layout: 'blog',
    computed: {
      ...mapState('articles', ['currentSelectedArticle']),
      ...mapGetters('articles', ['articlesHtml']),
      date: function () {
        return formateDate(this.currentSelectedArticle.publishTime)
      }
    },
    methods: {
      formateDate
    }
  }
</script>

<style scoped lang="scss">
  @import "../../assets/css/base";


  .content-container-wrapper {
    .content {
      .article {
        .content-header {
          margin-bottom: 1.75em;
          padding: 0  0 1.75em;
          h1 {
            margin: 0;
            font-size: 1.75em;
          }
          time {
            display: block;
            margin: 1em 0 0;
            color: gray;
          }
          @include border-1px($LightGray, 0, 1)
        }
        .article-content {
          position: relative;
        }
      }
      .copyright {
        margin: 3em 0;
        border-top: 1px solid #ddd;
        text-align: center;
        p {
          color: $Gray;
        }
      }
      @media (min-width: 48em) {
        .article {
          .content-header {
            h1 {
              font-size: 2em;
            }
          }
        }
      }
    }
  }
</style>