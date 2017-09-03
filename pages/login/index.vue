<template>
    <div class="login-wrapper">
        <div class="login">
            <div class="login-header">
                <h3>博客后台登录</h3>
            </div>
            <div class="form">
                <div class="user-name">
                    <input v-model="userName" type="text" placeholder="用户名">
                </div>
                <div class="user-password">
                    <input v-model="pwd" type="password" placeholder="密码">
                </div>
                <div class="login-button">
                    <button @click="login" :disabled="userName === '' || pwd === '' ">登录</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  import axios from 'axios'

  export default {
    data () {
      return {
        userName: '',
        pwd: ''
      }
    },
    layout: 'admin',
    computed: {

    },
    methods: {
      login () {
        axios.post('/api/user/login', {
          userName: this.userName,
          pwd: this.pwd
        }).then((response) => {
          console.log('eeee')
          this.$router.replace('/admin')
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
    .login-wrapper {
        flex: 1;
        width: 100vw;
        max-width: 400px;
        margin: 0 auto;
        .login {
            text-align: center;
            box-shadow: 0 0px 2px #ccc;;
            border-radius: 10px;
            background: #fafafa;
            div {
            }
            .from {

            }
            .login-button {

            }
        }
    }
</style>