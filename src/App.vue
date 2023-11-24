<template>
  <div id="app">
    <datav v-if="page === '1'" @toggle="page = '2'" />
    <datav2 v-if="page === '2'" @toggle="page = '1'" />
  </div>
</template>

<script lang="ts" setup>
import datav from './components/datav/index.vue'
import datav2 from './components/datav2/index.vue'

const page = ref('1')
</script>

<style lang="less">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 100%;
  height: 100%;
}
</style>
