import Router from 'vue-router'
import Vue from 'vue'
import HomeVue from '@/views/Home.vue';

Vue.use(Router)

const routes = [{
  path: '/',
  name: 'Home',
  component: HomeVue
}]

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes
})

export default router
