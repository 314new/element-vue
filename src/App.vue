<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <div class="test">你打分好世界</div>
    <el-button type="primary">{{ $t('home') }}</el-button>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  .test {
    color: $nav-color;
  }
}
</style>
