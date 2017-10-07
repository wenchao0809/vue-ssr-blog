<template>
    <div>articles</div>
</template>

<script>
  import {mapState} from 'vuex'
  import axios from 'axios'

  export default {
    layout: 'blog',
    async fetch ({store}) {
      let res = await axios.get('/api/classify')
//      console.log(res.data[0])
      await store.dispatch('articles/getArticlesByClassNames', {className: res.data})
    },
    computed: {
      ...mapState('classify', [
        'classifies'
      ]),
      ...mapState('articles', [
        'articlesByClassName'
      ])
    }
  }
</script>

<style>

</style>