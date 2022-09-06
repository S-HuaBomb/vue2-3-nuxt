import Vue from 'vue'
import App from './App.vue'
import '@/utils/mock/mockOrigin'
// import '@/utils/mockAdapter'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
