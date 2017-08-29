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

<style lang="scss" scoped>
    @import "../../assets/css/base";

    .post-list-wrapper {
        .post-list {
            list-style: none;
            padding: 0;
            li {
                padding: 1.5em 0;
                @include border-1px($LightGray, 0, 1)
                &:first-child {
                    padding-top: 0;
                }
            }
        }
    }
</style>
