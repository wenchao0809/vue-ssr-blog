<template>
  <div class="content-container-wrapper ">
    <div class="content">
      <article class="article">
        <header class="content-header">
          <h1>{{ article.title }}</h1>
          <time>April 11, 2017</time>
        </header>
        <div class="article-content">

          Imagine you install analytics on a traditional content site. A few months later you update that site to be a single page application (SPA) without changing your analytics code. Then, a few months after that, you update your site to be a progressive web app (PWA) that reloads content in the background and works offline (again, without updating your analytics code). If the number of visitors you get to your site and the way they use it remains roughly the same, wouldn’t you expect your analytics data to remain the same as well?

          Unfortunately, in the above scenario your pageview counts would almost certainly go down as you make these changes, even though you’re improving the experience for your users.

          This is a pretty bad situation to be in: where you (the developer) want to improve the UX of the site, but you can’t convince anyone it’s worth doing since your analytics are telling a different story.

          The solution

          I think there is a solution, and the solution I propose takes a cue from the metric name itself: Pageviews.

          Instead of tracking how many times a page was loaded, track how many times it was viewed. We can do this with the Page Visibility API, which has actually been around for quite some time and is well supported in all browsers, both on desktop and mobile.

          As it turns out, tracking how often the page was viewed rather than how often it was loaded elegantly handles a surprising number of cases that fail using the current model:

          When users leave an app in a background tab and switch to it hours or days later without reloading.
          When users leave a tab open as a reference and switch to it often for quick access to the content (again, without reloading the page).
          When users open a page in a background tab and then forget about it (never actually viewing the content).
          The Page Visibility API consists of both the document.visibilityState property as well as the visibilitychange event. With these two pieces you can ensure that pageviews are never sent unless the page’s visibilityState is visible, and you can also send pageviews in cases where a user returns to your site after it’s been in a background tab for a while, by listening for visibilitychange events. The Page Visibility API solves the problem of how to track pageviews on apps that never need to be reloaded.

          The second part to the solution is the History API, which (now that it’s supported in all browsers) is the de facto way developers build SPAs. As a result, analytics tools can listen for changes to the URL and send pageviews whenever that happens. This allows SPAs to be tracked exactly the same way traditional sites are tracked.

          Technical details
        </div>
        <footer>

        </footer>
      </article>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        article: {}
      }
    },
    layout: 'blog',
    validate ({ params }) {
      this.article = params.title
      return params
    },
    computed: {
    },
    beforeRouteUpdate  () {
      this.article = this.$route.params
    }
  }
</script>

<style scoped lang="scss">
  @import "../../assets/css/base";

  .content-container-wrapper {
    .content {
      .article {
        .content-header {
          margin-bottom: 1.75em;
          padding: 0  0 1.75em;
          h1 {
            font-size: 2em;
          }
          @include border-1px
        }
      }
    }
  }
</style>