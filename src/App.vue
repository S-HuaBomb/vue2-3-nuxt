<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import request from '@/utils/request'
// import axios from 'axios'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  created() {
    request({
      url: '/api',
      method: 'get',
      params: {
        searchText: 'John'
      }
    }).then(res => {
      console.log('/api get:', res)
    })

    request({
      url: '/loginUser',
      method: 'post',
      data: {
        unsername: 'John',
        password: 12345
      }
    }).then(res => {
      console.log('/loginUser post:', res)
    })

    request({
      url: '/users'
    }).then(res => {
      console.log('/users get:', res)
    })
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
