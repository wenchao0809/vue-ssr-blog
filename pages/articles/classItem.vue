<template>
    <div class="article-class-item">
        <div class="class-title">
            <h3>{{ title }}</h3>
        </div>
        <div class="article-items-wrap">
            <ul class="artilce-list">
                <li class="artilce-list-item" v-for="(item, index) in articleItems" :key="`article_${index}`">
                    <nuxt-link @click="pushArticle"  :to="{path: `/articles/${item.title}`}">
                        {{ item.title }}
                    </nuxt-link>
                   <span>{{ `(${formateDate(item.publishTime)})` }}</span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import {formateDate} from '../../util/common'
import {mapActions} from 'vuex'

export default {
  props: {
    title: String,
    articleItems: Array
  },
  methods: {
      formateDate,
      pushArticle (title) {
          this.getArticleByTitle(this.title)
      },
      ...mapActions('articles', ['getArticleByTitle'])
  }
}
</script>

<style lang="scss" scoped>
    @import "../../assets/css/base";

  .article-class-item {
      .article-items-wrap {
          a {
              margin-right: 20px;
              text-decoration: underline; 
          }
          span {
              color: $Gray
          }
      }   
  }
</style>
