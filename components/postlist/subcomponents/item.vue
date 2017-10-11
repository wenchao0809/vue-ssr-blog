<template>
    <div class="post-item-wrapper">
        <time class="publish-time">{{ date }}</time>
        <nuxt-link  :to="{path: `/articles/${article.title}`}">
            <h2 @click="slectArticle" class="publish-title">{{ article.title }}</h2>
        </nuxt-link>
        <p class="publish-desc">{{ article.desc }}</p>
    </div>
</template>

<script>
  import {formateDate} from '../../../util/common'

  export default {
    name: 'PostItem',
    props: {
      article: {}
    },
    components: {},
    methods: {
      slectArticle () {
        this.$store.commit('articles/UPDATECURRENTSELECTEDARTICLE', this.article)
      },
      formateDate
    },
    computed: {
      date: function () {
        return this.formateDate(this.article.publishTime)
      }
    }
  }
</script>

<style lang="scss" scoped>
    @import "../../../assets/css/base";

    .post-item-wrapper {
        .publish-time {
            color: $Gray;
        }
        a {
            color: inherit;
            text-decoration: none;
            .publish-title:hover {
                color: $Base;
            }
        }
        .publish-desc {
            color: $Gray;
        }
    }
</style>
