<template>
    <div class="login-wrapper">
        <div class="login">
            <div class="login-header">
                <h3>博客后台登录</h3>
            </div>
            <div class="form">
                <div class="user-name">
                    <input type="text" placeholder="用户名">
                </div>
                <div class="user-password">
                    <input type="text" placeholder="密码">
                </div>
                <div class="login-button">
                    <button>登录</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    layout: 'admin'
  }
</script>

<style lang="scss" scoped>
    .login-wrapper {
        flex: 1;
        width: 100vw;
        display: flex;
        justify-content: center;
        .login {

            border: 10px;
            background: #fafafa;
            .from {
                padding: 1em;
            }
        }
    }
</style>