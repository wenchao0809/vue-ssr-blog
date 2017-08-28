<template>
    <div class="post-list-wrapper">
        <ul class="post-list">
            <li v-for="article in articles">
                <post-item :article="article"></post-item>
            </li>
        </ul>
    </div>
</template>

<script>
  import PostItem from './subcomponents/item.vue'

  export default {
    name: 'PostList',
    props: {
      articles: {
        type: Array,
        default: () => []
      }
    },
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
            padding: 0;
            .post-item {
                padding: 1.5em 0;
                @include border-1px(gray, 0, 0.5)
                &:first-child {
                    padding-top: 0;
                }
            }
        }
    }
</style>
