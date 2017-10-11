<template>
  <div class="content-container-wrapper">
    <div class="content">
      <div class="bundle-articles-header">
        <p>Articles</p>
      </div>
      <div class="bundle-article-content">
        <classItem class="article-class-item" :title="key" :articleItems="items" v-if="items.length > 0" v-for="(items, key) in articlesByClassName" :key="key" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import axios from 'axios'
import classItem from './classItem'

export default {
  layout: 'blog',
  async fetch({ store }) {
    let res = await axios.get('/api/classify')
    await store.dispatch('articles/getArticlesByClassNames', { className: res.data })
  },
  computed: {
    ...mapState('classify', [
      'classifies'
    ]),
    ...mapState('articles', [
      'articlesByClassName'
    ])
  },
  components: {
    classItem
  }
}
</script>

<style lang="scss" scoped>
@media (min-width: 48em) {
  .bundle-articles-header {
  margin-bottom: 1.75em;
  padding: 0 0 1.75em;
}
}

.bundle-articles-header {
  border-bottom: 1px solid #f2f0ed;
  margin-bottom: 1.5em;
  padding: 0 0 1.5em;
  text-align: center;
}
.bundle-article-content {
  .article-class-item {
    margin-bottom: 20px;
  }
}
</style>
