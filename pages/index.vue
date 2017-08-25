<template>
  <section class="content-container-wrapper">
    <div class="content">
      <post-list></post-list>
    </div>
  </section>
</template>

<script>
  import PostList from '../components/postlist'
  export default {
    components: {
      PostList
    }
  }
</script>
<style scoped lang="scss">
  @media (min-width: 48em) {
    .content-container-wrapper {
      padding-top: 5.25em;
      .content {
        max-width: 40em;
      }
    }
  }
  .content-container-wrapper {
    padding-left: 1.5em;
    padding-right: 1.5em;
    .content {
      margin: 0 auto;
    }
  }
</style>
