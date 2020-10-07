<template>
  <my-header
    title="者也专栏"
    :isShowDropDown="true"
  />
  <router-view />
</template>

<script>
import MyHeader from '_c/Header';
export default {
  name: 'App',
  components: {
    MyHeader
  }
};
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
