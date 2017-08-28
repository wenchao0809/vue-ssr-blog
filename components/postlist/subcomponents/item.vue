<template>
    <div class="post-item-wrapper">
        <time class="publish-time">{{ article.publishTime }}</time>
        <nuxt-link @click="slectArticle" :to="{path: `/articles/${article.title}`}">
            <h2 class="publish-title">{{ article.title }}</h2>
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
      selecArticle () {
        this.$store.commit('')
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
