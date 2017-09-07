<template>
    <div class="right">
        <div class="article-header">
            <div class="title-wrap">
                <label for="">标题</label>
                <input v-model="editArticle.title" class="title" type="text" placeholder="标题">
            </div>
            <div class="desc-wrap">
                <label for="">描述</label>
                <input v-model="editArticle.desc" class="desc" type="text" placeholder="描述">
            </div>
            </div>
        <div class="article-main">
            <textarea v-model="editArticle.markdown" name="" id="" class="markdown-edit"></textarea>
        </div>
        <div v-show="isNewArticle !== 'nothing'" class="operate-wrap">
            <button @click="publishOrUpdate">{{ publishText }}</button>
            <button @click="saveDraft" v-if="isNewArticle">存为草稿</button>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'

    export default {
      name: 'EditPanel',
      data () {
        return {
          editArticle: {
            title: '',
            desc: '',
            markdown: ''
          }
        }
      },
      props: {
        article: {},
        isNewArticle: false

      },
      computed: {
        publishText: function () {
          return this.isNewArticle ? '发布' : '更新'
        }
      },
      watch: {
        article () {
          this.editArticle = Object.assign({}, this.article)
        }
      },
      methods: {
        async publishOrUpdate () {
          if (this.isNewArticle) {
            // 新建文章
            let article = {...this.editArticle, ...{updateAt: Date.now(), status: 'publish', publishTime: Date.now()}}
            try {
              await axios.post('/api/articles/add', article)
              await this.$store.dispatch('classify/getArticlesByClassName', article.className)
            } catch (e) {
              console.log(e)
            }
          } else {
            // 更新原有文章
            await axios.post('/api/articles/update', this.editArticle)
          }
        },
        async saveDraft () {
          let article = {...this.editArticle, ...{updateAt: Date.now(), status: 'draft', publishTime: Date.now()}}
          try {
            await axios.post('/api/articles/add', article)
            await this.$store.dispatch('classify/getArticlesByClassName', article.className)
          } catch (e) {
            console.log(e)
          }
        }
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
            flex: 15%;
            input {
                display: inline-block;
                border: none;
                outline: none;
                margin: 0;
                width: 80%;
                font-size: 16px;
                height: 30px;
                &:focus {
                    border-bottom: 2px solid $Base  

                }
            }
            label {
                display: inline-block;
                margin-right: 20px;
                font-size: 17px;
                color: gray;
            }
            .title-wrap {
                margin: 20px 0;
                .title {
                }
            }
            .desc-wrap {
                margin-bottom: 20px;
                .desc {
                }
            }
        }
        .article-main {
            flex: 70%;
            .markdown-edit {
                width: 100%;
                height: 90%;
            }
        }
        .operate-wrap {
            flex: 15%;
            margin-top: 40px;
            button {
                width: 100px;
                height: 30px;
                background: $Base;
                color: white;
                border: none;
                &:first-child {
                    margin-right: 50px;
                }
                outline: none;
                font-size: 16px;
            }
        }
    }
</style>
