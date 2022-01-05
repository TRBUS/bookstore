<template>
  <div id="app">
    <Header></Header>
    <Menus></Menus>
    <router-view />
  </div>
</template>

<script>
import Header from '@/components/Header'
import Menus from '@/components/Menus'

export default {
  components: {
    Menus,
    Header
  },
  data() {
    return {}
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 1200px;
}
</style>
