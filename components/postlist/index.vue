<template>
    <div class="post-list-wrapper">
        <ul class="post-list">
            <li class="post-item">
                <post-item></post-item>
            </li>
            <li class="post-item">
                <post-item></post-item>
            </li>
            <li class="post-item">
                <post-item></post-item>
            </li>
            <li class="post-item">
                <post-item></post-item>
            </li>
            <li class="post-item">
                <post-item></post-item>
            </li>
            <li class="post-item">
                <post-item></post-item>
            </li>
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
    @import "../../assets/css/base";

    .post-list-wrapper {
        .post-list {
            list-style: none;
            .post-item {
                padding: 1.5em 0;
                @include border-1px(gray, 0, 0.5)
            }
        }
    }
</style>
