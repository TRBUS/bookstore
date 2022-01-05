<template>
  <div class="headerCart">
    <a href="javascript:;">
      <span>购物车</span>
    </a>
  </div>
</template>

<script>
export default {
  name: 'HeaderCart'
}
</script>

<style scoped>
.headerCart {
  display: inline-block;
  position: relative;
  text-align: center;
  width: 100px;
  height: 30px;
  margin-top: 20px;
  margin-bottom: 20px;
  cursor: pointer;
  margin-left: 20px;
  background-color: red;
  vertical-align: middle;
}

.headerCart a {
  text-decoration: none;
  color: white;
}
.headerCart a > span {
  position: absolute;
  left: 2px;
  right: 2px;
  bottom: 5px;
}
</style>
