<template>
    <div class="post-item-wrapper">
        <time class="publish-time">{{ article.publishTime }}</time>
        <nuxt-link  :to="{path: `/articles/${article.title}`}">
            <h2 @click="slectArticle" class="publish-title">{{ article.title }}</h2>
        </nuxt-link>
        <p class="publish-desc">{{ article.desc }}</p>
    </div>
</template>

<script>
  export default {
    name: 'PostItem',
    props: {
      article: {}
    },
    components: {},
    methods: {
      slectArticle () {
        console.log(this.$store)
        this.$store.commit('articles/UPDATECURRENTSELECTEDARTICLE', this.article)
      }
    }
  }
</script>

<style lang="scss" scoped>
    .post-item-wrapper {
        .publish-time {
            color: gray;
        }
        a {
            color: inherit;
            text-decoration: none;
            .publish-title:hover {
                color: #41B883;
            }
        }
        .publish-desc {
            color: gray;
        }
    }
</style>
