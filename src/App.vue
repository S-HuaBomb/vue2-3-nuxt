<!-- eslint-disable no-unused-vars -->
<template>
  <div id="app">
    <header-vue></header-vue>
    <footer-vue></footer-vue>
  </div>
</template>

<script>
import FooterVue from './components/common/Footer.vue';
import HeaderVue from './components/common/Header.vue';
import request from '@/utils/request'

export default {
  name: 'App',
  components: {
    FooterVue,
    HeaderVue
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
