<template>
  <div class="content-container-wrapper ">
    <div class="content">
      <article class="article">
        <header class="content-header">
          <h1>{{ currentSelectedArticle.title }}</h1>
          <time>{{ currentSelectedArticle.publishTime }}</time>
        </header>
        <div class="article-content">
          {{ currentSelectedArticle.markdown }}
        </div>
        <footer>

        </footer>
      </article>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'


  export default {
    data () {
      return {
      }
    },
    layout: 'blog',
    validate ({ params }) {
      this.article = params.title
      return params
    },
    computed: {
      ...mapState('articles', ['currentSelectedArticle'])
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
            font-size: 2em;
          }
          @include border-1px
        }
      }
    }
  }
</style>