import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import '@/utils/mock/mockOrigin'
// import '@/utils/mockAdapter'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'  // 需要注意的是，样式文件需要单独引入。

//全局css文件
import '@/assets/reset.css'

Vue.use(Element)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
