<template>
  <div class="content-container-wrapper">
    <div class="content">
      <div class="estding-about-header">
        <p>About</p>
      </div>
      <div class="estding-about-content">
        <div class="estding-about-desc">
          <p>大家好我是 <strong>estding</strong>目前专职前端,主要技术栈包括：JavaScript、es6、es7、Vue、React、TypeScript偶尔还写写nodejs,python等，本站的后端就是nodejs编写的。</p>
          <p>受限于本人技术平，本站所有开源项目代码仅供参考学习，欢迎大家一起学习交流。</p>
        </div>
        <div class="estding-about-contact">
          <h2>Contact</h2>
          <ul>
          <li><a href="mailto:estding0@gmail.com">E-mail</a></li>
          <li><a href="https://github.com/BESTDing">Github</a></li>
          </ul>
        </div>
        <div class="estding-about-project">
          <h2>Project</h2>
          <ul>
            <li><a href="http://estding.coding.me/gank/">Gank web App</a></li>
            <li><a href="https://github.com/BESTDing/vue-ssr-blog">博客系统</a></li>
            <li><a href="http://estding.coding.me/myportfolio/">Portfolio</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'blog',
  name: 'About',
  props: {},
  components: {}
}
</script>

<style lang="scss" scoped>
.estding-about-header {
  border-bottom: 1px solid #f2f0ed;
  margin-bottom: 1.5em;
  padding: 0 0 1.5em;
  text-align: center;
}
.estding-about-content {

}
</style>
