<template>
    <div class="post-list-wrapper">
        <ul class="post-list">
            <li class="post-item">
                <post-item></post-item>
            </li>
        </ul>
    </div>
</template>

<script>
  import PostItem from './subcomponents/item.vue'

  export default {
    name: 'PostList',
    props: {},
    components: {
      PostItem
    }
  }
</script>

<style lang="scss">
</style>
