<template>
    <div class="admin-wrapper">
        <div class="admin">
            <div class="left">
                <div class="home-wrap">
                    <nuxt-link to="/">回到首页</nuxt-link>
                </div>
                <div @click="showAddClass = !showAddClass" class="new-class">
                    <svg t="1504408590171" class="icon" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2328" xmlns:xlink="http://www.w3.org/1999/xlink" width="14" height="14"><defs><style type="text/css"></style></defs><path d="M885.649481 575.666579l-311.375595 0 0 311.375595L449.72608 887.042174l0-311.375595L138.350484 575.666579 138.350484 451.117557l311.375595 0 0-311.375595 124.547806 0 0 311.375595 311.375595 0L885.649481 575.666579 885.649481 575.666579zM885.649481 575.666579" p-id="2329"></path></svg>
                    <span>新建分类</span>
                </div>
                <div v-show="showAddClass" class="add-class-wrap">
                    <input v-model="className" type="text" placeholder="请输入分类名">
                    <div class="operat-wrap">
                        <button @click="submitEditClass" class="submit button">提交</button>
                        <button class="cancel button" @click="showAddClass = !showAddClass">取消</button>
                    </div>
                </div>
                <div class="class-wrap">
                    <ul class="class-list">
                        <li :class="{itemActive: item.className === currentSelectClass}" @click="selectClass(item)" class="item" v-for="item in classifies">{{ item.className }}</li>
                    </ul>
                </div>
                <div class="logout-wrap">
                    <button @click="logout">退出登录</button>
                </div>
            </div>
            <div class="mid">
                <div class="new-article">
                    <svg t="1504408590171" class="icon" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2328" xmlns:xlink="http://www.w3.org/1999/xlink" width="14" height="14"><defs><style type="text/css"></style></defs><path d="M885.649481 575.666579l-311.375595 0 0 311.375595L449.72608 887.042174l0-311.375595L138.350484 575.666579 138.350484 451.117557l311.375595 0 0-311.375595 124.547806 0 0 311.375595 311.375595 0L885.649481 575.666579 885.649481 575.666579zM885.649481 575.666579" p-id="2329"></path></svg>
                    <span>新建文章</span>
                </div>
                <div class="article-list">
                    <ul class="list">
                        <li @click="selectArticle(item)" :class="{itemActive: item.title === currentSelectArtilce.title}" class="item" v-for="item in currentSelectClassArticles">{{ item.title }}</li>
                    </ul>
                </div>
            </div>
            <div class="right-wrap">
                <edit-panel :article="currentSelectArtilce"></edit-panel>
            </div>
        </div>
    </div>
</template>

<script>
  import axios from 'axios'
  import {mapState} from 'vuex'
  import EditPanel from '../../components/admin-comp/edit.vue'

  export default {
    data () {
      return {
        showAddClass: false,
        className: ''
      }
    },
    layout: 'admin',
    components: {
      EditPanel
    },
    methods: {
      logout () {
        axios.post('/api/user/logout')
          .then((response) => {
          this.$router.replace('/login')
        })
      },
      async selectClass (item) {
        this.$store.commit('classify/UPDATECURRENTSELECTCLASS', item.className)
        await this.$store.dispatch('classify/getArticlesByClassName', this.currentSelectClass)
      },
      selectArticle (item) {
          this.$store.commit('classify/UPDATECURRENTSELECTEDARTICLE', item)
      },
      async submitEditClass () {
        try {
          try {
            console.log(await axios.post('/api/classify/add', {className: this.className}))
            await this.$store.dispatch('classify/getClassifies')
            this.showAddClass = !this.showAddClass
          } catch (e) {
            console.log(e)
          }
        } catch (e) {
          console.log(e)
        }
      }
    },
    computed: {
      ...mapState('classify', ['classifies', 'currentSelectClassArticles', 'currentSelectClass', 'currentSelectArtilce']),
    },
    async mounted () {
      await this.$store.dispatch('classify/getClassifies')
      await this.$store.dispatch('classify/getArticlesByClassName', this.currentSelectClass)
    }
  }
</script>

<style lang="scss" scoped>
    @import "../../assets/css/base";

    .admin-wrapper {
        width: 100%;
        height: 100vh;
        .admin {
            display: flex;
            height: 100%;
            .left {
                position: relative;
                flex: 15%;
                background: #3f3f3f;
                text-align: center;
                color: white;
                .home-wrap {
                    margin: 20px 0;
                    a {
                        padding: 5px 20px;
                        width: 60%;
                        background: #3f3f3f;
                        text-decoration: none;
                        color: $Base
                    }
                }
                .new-class {
                    padding: 0 10px;
                    svg {
                        fill: white;
                        vertical-align: middle;
                        margin-right: 5px;
                    }
                    span {
                        font-size: 14px;
                        vertical-align: middle;
                    }
                }
                .add-class-wrap {
                    input {
                        margin: 20px auto;
                        display: block;
                        width: 80%;
                        background: rgba(180,180,180,0.2);;
                        height: 25px;
                        border: 1px solid #2f2f2f;
                        border-radius: 4px;
                        color: #c8c8c8;
                        outline: none;
                    }
                    .operat-wrap {
                        width: 80%;
                        text-align: left;
                        padding: 0 10%;
                        .button {
                            width: auto;
                            border: none;
                            font-size: 15px;
                            background: #3f3f3f;
                            outline: none;
                        }
                        .submit {
                            color: $Base;
                            margin-right: 20px;
                            &:hover {
                            }
                        }
                        .cancel {
                            color: gray;
                            &:hover {
                                color: white;
                            }
                        }
                    }
                }
                .class-wrap {
                    height: 70%;
                    overflow: auto;
                    .class-list {
                        padding: 0;
                        margin: 20px 0;
                        list-style: none;
                        .item {
                            padding: 10px;
                        }
                        .itemActive {
                            border-left: 3px solid $Base;
                            background: gray;
                        }
                        .item:hover {
                            background: gray;
                        }
                    }
                }
                .logout-wrap {
                    margin: 20px 0;
                    position: absolute;
                    bottom: 4em;
                    width: 100%;
                    button {
                        padding: 5px 20px;
                        width: 60%;
                        border: 1px solid $Base;
                        border-radius: 10px;
                        background: #3f3f3f;
                        text-decoration: none;
                        color: $Base
                    }
                }
            }
            .mid {
                flex: 25%;
                border-right: 1px solid gray;
                text-align: center;
                .new-article {
                    padding: 20px;
                    svg {
                        margin-right: 10px;
                    }
                    span {

                    }
                    @include border-1px
                }
                .article-list {
                    .list {
                        margin: 0;
                        padding: 0;
                        list-style: none;
                        .item {
                            padding: 20px 0;
                            @include border-1px
                            &:hover {
                                background: $LightGray;
                            }
                        }
                        .itemActive {
                            border-left: 4px solid $Base;
                            background: $LightGray;
                        }
                    }
                }
            }
            .right-wrap {
                flex: 1 60%;
            }
        }
    }
</style>