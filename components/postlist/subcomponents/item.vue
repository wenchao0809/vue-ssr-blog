<template>
    <div class="post-item-wrapper">
        <time class="publish-time">Oct 15, 2016</time>
        <nuxt-link to="/post/tilte">
            <h2 class="publish-title">JavaScript理解对象</h2>
        </nuxt-link>
        <p class="publish-desc">All analytics tools I know of track pageviews in a way that—to put it bluntly—simply doesn’t work for a growing number of websites today and is completely incompatible with the…</p>
    </div>
</template>

<script>
  export default {
    name: 'PostItem',
    props: {},
    components: {}
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
