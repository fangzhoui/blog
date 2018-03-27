<template>
  <div id="app">
    <nav-header v-show="$store.state.header.showHeader"></nav-header>
    <router-view/>
    <nav-footer v-show="$store.state.header.showHeader"></nav-footer>
  </div>
</template>

<script>
import NavHeader from '@/components/NavHeader'
import NavFooter from '@/components/NavFooter'
export default {
  name: 'App',
  components:{
    NavHeader,
    NavFooter
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.container{
  width: 1076px;
  min-width: 980px;
  max-width: 1000px;
  margin: 0 auto;
  box-sizing: border-box;
}
.el-upload {
    border: 1px dashed #0f142a;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
}
.el-upload:hover {
  border-color: #fff;
}
[v-cloak] {
  display: none;
}
</style>
