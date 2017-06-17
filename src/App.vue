<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
html, body{
  margin: 0;
  height: 100%;
  overflow: hidden;
}
#app {
  display: flex;
  flex-direction: column;
  margin: 0;
  height: 100%;
  overflow: hidden;
}
</style>
