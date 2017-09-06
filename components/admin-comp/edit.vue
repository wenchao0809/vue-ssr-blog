<template>
    <div class="right">
        <div class="article-header">
            <input v-model="title" class="title" type="text" placeholder="标题">
            <input class="desc" type="text" placeholder="描述">
        </div>
        <div class="article-main">
            <textarea name="" id="" class="markdown-edit"></textarea>
        </div>
    </div>
</template>

<script>
    export default {
      name: 'EditPanel',
      data () {
        return {
          title: this.article.title,
          desc: this.article.desc,
          markdown: this.article.markdown
        }
      },
      props: {
        article: {}
      },
      computed: {
    }
    }
</script>

<style lang="scss" scoped>
    @import "../../assets/css/base";

    .right {
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 100%;
        width: 80%;
        margin: 0 auto;
        .article-header {
            flex: 20%;
            input {
                display: block;
                border: none;
                outline: none;
                margin: 0;
                width: 100%;
                font-size: 16px;
                height: 30px;
                &:focus {
                    border-bottom: 2px solid $Base  

                }
            }
            .title {
                margin: 40px  0;
            }
            .desc {
            }
        }
        .article-main {
            flex: 80%;
            .markdown-edit {
                width: 100%;
                height: 100%;
            }
        }
    }
</style>
