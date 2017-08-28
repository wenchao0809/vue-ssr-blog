<template>
  <section class="content-container-wrapper">
    <div class="content">
      <post-list :articles="articles.articles"></post-list>
    </div>
  </section>
</template>

<script>
  import PostList from '../components/postlist'
  import {mapState} from 'vuex'

  export default {
    async fetch ({store}) {
      await store.dispatch('articles/getArticles')
    },
    layout: 'blog',
    components: {
      PostList
    },
    computed: {
      ...mapState(['articles'])
    },
    methods: {
    }
  }
</script>
<style scoped lang="scss">

</style>
