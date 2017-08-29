<template>
    <div class="admin-wrapper">
        <nuxt/>
    </div>
</template>

<script>
  import AppBar from '../components/app-bar'

  export default {
    components: {
      AppBar
    }
  }
</script>

<style lang="scss">
    .admin-wrapper {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
    }
</style>