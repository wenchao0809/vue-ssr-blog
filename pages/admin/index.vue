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
                <div @click="newArticle" class="new-article">
                    <svg t="1504408590171" class="icon" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2328" xmlns:xlink="http://www.w3.org/1999/xlink" width="14" height="14"><defs><style type="text/css"></style></defs><path d="M885.649481 575.666579l-311.375595 0 0 311.375595L449.72608 887.042174l0-311.375595L138.350484 575.666579 138.350484 451.117557l311.375595 0 0-311.375595 124.547806 0 0 311.375595 311.375595 0L885.649481 575.666579 885.649481 575.666579zM885.649481 575.666579" p-id="2329"></path></svg>
                    <span>新建文章</span>
                </div>
                <div class="article-list">
                    <ul class="list">
                        <li @click="selectArticle(item)"
                            :class="{itemActive: item.title === currentSelectArtilce.title && item.createAt === currentSelectArtilce.createAt}"
                            class="item" v-for="item in currentSelectClassArticles">
                            <span>{{ item.title }}</span>
                            <svg v-if="item.status === 'draft'" t="1504769992987" class="icon" viewBox="0 0 1024 1024" width="24" height="24">
                                <path d="M953.173333 394.24C898.56 190.293333 714.24 55.466667 512 55.466667c-39.253333 0-78.506667 5.12-118.613333
                                        15.36C150.186667 136.533333 5.973333 386.56 70.826667 630.613333c54.613333 203.946667 238.933333 338.773333 440.32 338.773334 39.253333 0 78.506667-5.12 118.613333-15.36 244.053333-66.56 388.266667-316.586667 323.413333-559.786667z m-52.906666 342.186667c-29.013333 50.346667-67.413333 93.866667-112.64 129.706666-46.933333 36.693333-101.546667 64-159.573334 79.36-37.546667 10.24-76.8 15.36-116.053333 15.36-48.64 0-97.28-7.68-143.36-23.893333-45.226667-15.36-88.746667-38.4-127.146667-67.413333-38.4-29.013333-72.533333-64.853333-99.84-104.96-28.16-41.813333-49.493333-87.893333-62.293333-136.533334C63.146667 570.026667 59.733333 510.293333 68.266667 450.56c7.68-57.173333 27.306667-112.64 55.466666-162.133333 29.013333-50.346667 67.413333-93.866667 112.64-129.706667 46.933333-36.693333 101.546667-64 159.573334-79.36 37.546667-10.24 76.8-15.36 116.053333-15.36 48.64 0 97.28 7.68 143.36 23.893333 45.226667 15.36 88.746667 38.4 127.146667 67.413334 38.4 29.013333 72.533333 64.853333 99.84 104.96 28.16 41.813333 49.493333 87.893333 62.293333 136.533333 15.36 58.026667 19.626667 118.613333 11.093333 177.493333-7.68 56.32-26.453333 111.786667-55.466666 162.133334z" fill="" p-id="2514"></path><path d="M866.986667 270.506667c-26.453333-38.4-58.026667-71.68-95.573334-99.84-36.693333-27.306667-77.653333-49.493333-121.173333-64-44.373333-15.36-90.453333-22.186667-137.386667-23.04-37.546667 0-75.093333 5.12-111.786666 14.506666-55.466667 14.506667-107.52 40.106667-152.746667 75.946667-43.52 34.133333-80.213333 75.946667-108.373333 123.733333-28.16 47.786667-46.08 100.693333-53.76 155.306667-6.826667 57.173333-3.413333 114.346667 11.093333 169.813333 12.8 46.08 32.426667 90.453333 59.733333 129.706667 26.453333 38.4 58.026667 71.68 95.573334 99.84 36.693333 27.306667 77.653333 49.493333 121.173333 64 44.373333 15.36 90.453333 23.04 137.386667 22.186667 37.546667 0 75.093333-5.12 111.786666-14.506667 55.466667-14.506667 107.52-40.106667 152.746667-75.946667 43.52-34.133333 80.213333-75.946667 108.373333-123.733333 28.16-47.786667 46.08-100.693333 53.76-155.306667 7.68-56.32 4.266667-114.346667-10.24-169.813333-12.8-45.226667-33.28-88.746667-60.586666-128.853333z m-249.173334 634.88c-34.986667 9.386667-70.826667 13.653333-106.666666 13.653333-180.906667 0-345.6-119.466667-394.24-302.08-58.026667-217.6 71.68-441.173333 290.133333-499.2 34.986667-9.386667 70.826667-13.653333 106.666667-13.653333 180.906667 0 345.6 119.466667 394.24 302.08 57.173333 216.746667-71.68 441.173333-290.133334 499.2z" fill="" p-id="2515"></path><path d="M733.866667 305.493333l47.786666-12.8c1.706667-0.853333 3.413333-2.56 2.56-5.12-0.853333-1.706667-2.56-3.413333-5.12-2.56l-51.2 13.653334C670.72 240.64 593.066667 208.213333 512 208.213333c-25.6 0-52.053333 3.413333-78.506667 10.24C324.266667 248.32 245.76 332.8 218.453333 435.2l-52.053333 13.653333c-1.706667 0.853333-3.413333 2.56-2.56 5.12 0.853333 1.706667 2.56 3.413333 4.266667 2.56h0.853333l286.72-76.8L733.866667 305.493333zM227.84 432.64c12.8-46.08 37.546667-88.746667 69.973333-123.733333 37.546667-39.253333 85.333333-68.266667 137.386667-81.92 24.746667-6.826667 50.346667-10.24 76.8-10.24 76.8 0 151.04 30.72 206.506667 84.48l-382.293334 102.4-108.373333 29.013333z m627.2 134.826667L808.106667 580.266667 290.133333 719.36l-47.786666 12.8c-1.706667 0.853333-2.56 2.56-2.56 4.266667s1.706667 2.56 3.413333 2.56h0.853333l51.2-13.653334c56.32 57.173333 133.973333 90.453333 215.893334 90.453334 25.6 0 52.053333-3.413333 78.506666-10.24C699.733333 776.533333 779.093333 690.346667 805.546667 587.946667l51.2-13.653334c1.706667-0.853333 2.56-2.56 2.56-4.266666s-1.706667-2.56-4.266667-2.56zM726.186667 715.093333c-37.546667 39.253333-85.333333 68.266667-137.386667 81.92-24.746667 6.826667-51.2 10.24-76.8 10.24-76.8 0-151.04-30.72-206.506667-84.48l490.666667-131.413333c-12.8 46.08-36.693333 88.746667-69.973333 123.733333zM354.986667 514.56l113.493333-30.72 17.92 66.56-47.786667 12.8 2.56 11.093333 69.12-18.773333 4.266667 16.213333-69.12 18.773334 6.826667 24.746666-17.066667 5.12-6.826667-24.746666-68.266666 18.773333-5.12-17.066667 68.266666-18.773333-2.56-11.093333-47.786666 12.8-17.92-65.706667z m110.933333 24.746667l-2.56-11.093334-80.213333 21.333334 2.56 11.093333 80.213333-21.333333z m-87.04-4.266667l80.213333-21.333333-2.56-10.24-80.213333 21.333333 2.56 10.24z m-51.2-46.08l37.546667-10.24-3.413334-11.093333 17.92-5.12 3.413334 11.093333 40.96-11.093333-3.413334-11.093334 17.92-5.12 3.413334 11.093334 37.546666-10.24 4.266667 16.213333-37.546667 10.24 3.413334 11.093333-17.92 5.12-3.413334-11.093333-40.96 11.093333 3.413334 11.093334-17.92 5.12-3.413334-11.093334-37.546666 10.24-4.266667-16.213333z m171.52-46.933333c19.626667-6.826667 35.84-15.36 48.64-23.893334l11.093333 15.36c-6.826667 4.266667-12.8 7.68-17.066666 10.24l5.973333 23.893334 18.773333-5.12 5.12 17.92-18.773333 5.12 1.706667 6.826666c10.24 5.973333 19.626667 11.946667 27.306666 17.066667l-4.266666-14.506667 93.866666-25.6 17.066667 63.146667c3.413333 11.946667-0.853333 19.626667-11.946667 23.04l-12.8 3.413333-8.533333-14.506666 11.946667-2.56c3.413333-0.853333 4.266667-3.413333 3.413333-8.533334l-11.946667-44.373333-58.88 16.213333 17.92 65.706667-17.066666 4.266667-17.92-66.56-5.973334 17.92c-5.12-5.973333-11.093333-11.946667-17.066666-17.92l19.626666 72.533333-17.92 5.12-19.626666-71.68c-0.853333 16.213333-3.413333 31.573333-7.68 44.373333L520.533333 541.013333c6.826667-16.213333 11.093333-33.28 11.093334-51.2l-17.92 5.12-5.12-17.92 21.333333-5.973333-5.12-20.48c-4.266667 1.706667-9.386667 4.266667-17.92 6.826667l-7.68-15.36z m77.653333 6.826666l72.533334-19.626666 9.386666 35.84-72.533333 19.626666-9.386667-35.84z m62.293334 7.68l-2.56-9.386666-38.4 10.24 2.56 9.386666 38.4-10.24z m-29.866667 54.613334l43.52-11.946667 9.386667 35.84-43.52 11.946667-9.386667-35.84z m34.986667 16.213333l-2.56-11.093333-14.506667 3.413333 2.56 11.093333 14.506667-3.413333z m-39.253334-127.146667c3.413333 4.266667 5.973333 9.386667 9.386667 13.653334l41.813333-11.093334 4.266667 16.213334-95.573333 25.6-4.266667-16.213334 35.84-9.386666c-2.56-3.413333-5.973333-6.826667-9.386667-10.24l17.92-8.533334z" fill="" p-id="2516">
                            </path>
                            </svg>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="right-wrap">
                <edit-panel :article="currentSelectArtilce" :isNewArticle="isNewArticle"></edit-panel>
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
    middleware: 'adminAuth',
    components: {
      EditPanel
    },
    methods: {
      // 退出登录，在公共电脑上登录别忘了执行此操作， token有效期为7天
      logout () {
        axios.post('/api/user/logout')
          .then((response) => {
          this.$router.replace('/login')
        })
      },
      // 选择分类同步数据
      async selectClass (item) {
        this.$store.commit('classify/UPDATECURRENTSELECTCLASS', item.className)
        await this.$store.dispatch('classify/getArticlesByClassName', this.currentSelectClass)
      },
      selectArticle (item) {
          this.$store.commit('classify/UPDATECURRENTSELECTEDARTICLE', item)
      },
      // 新建一个分类
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
      },
      newArticle () {
        let article = {
          title: '新建文章',
          desc: '',
          markdown: '',
          className: this.currentSelectClass,
          createAt: Date.now(),
          version: 1
        }
        this.$store.commit('classify/NEWARTICLE', article)
      }
    },
    computed: {
      ...mapState('classify', [
        'classifies',
        'currentSelectClassArticles',
        'currentSelectClass',
        'currentSelectArtilce',
        'isNewArticle'
      ])
    },
    async mounted () {
      await this.$store.dispatch('classify/getClassifies')
      await this.$store.dispatch('classify/getArticlesByClassName', this.currentSelectClass)
    },
    watch: {
      // 监听如果新增文章修改当前高亮文章
      currentSelectClassArticles () {
        this.$store.commit('classify/UPDATECURRENTSELECTEDARTICLE', this.currentSelectClassArticles[0])
      }
    }
  }
</script>

<style lang="scss" scoped>
    @import "../../assets/css/base";

    .admin-wrapper {
        width: 100%;
        height: 100vh;
        overflow: hidden;
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
                    bottom: 3em;
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
                height: 100%;
                border-right: 1px solid gray;
                text-align: center;
                .new-article {
                    margin: 20px auto;
                    width: 40%;
                    svg {
                        margin-right: 10px;
                    }
                    span {

                    }
                    @include border-1px
                }
                .article-list {
                    height: 90%;
                    overflow-y: auto;
                    .list {
                        margin: 0;
                        padding: 0;
                        list-style: none;
                        .item {
                            position: relative;
                            padding: 20px 0;
                            @include border-1px
                            &:hover {
                                background: $LightGray;
                            }
                            svg {
                                position: absolute;
                                fill: $Base;
                                right: 10px;
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