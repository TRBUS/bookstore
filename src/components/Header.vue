<template>
  <div class="header">
    <img src="@/assets/images/logo.png" />
    <HeaderSearch></HeaderSearch>
    <HeaderCart></HeaderCart>
    <span>你好，请<router-link to="">登录</router-link> 免费 <router-link to="">注册</router-link></span>
    <span>欢迎您，<a href="javascript:;">退出登录</a></span>
  </div>
</template>

<script>
import HeaderSearch from './HeaderSearch'
import HeaderCart from './HeaderCart'
export default {
  name: 'Header',
  components: {
    HeaderSearch,
    HeaderCart
  }
}
</script>

<style scoped>
.header {
  width: 100%;
  /*position: relative;*/
}
.header img {
  width: 200px;
  height: 60px;
  margin: auto;
}
.header span {
  margin-left: 20px;
}
.header a {
  text-decoration: none;
  color: red;
}
</style>
