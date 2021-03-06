import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import  FastClick  from  'fastclick'

Vue.config.productionTip = false
import req from './api'
Vue.prototype.$req = req

FastClick.attach(document.body);
if ('addEventListener' in document) {
  document.addEventListener('DOMContentLoaded', function () {
    FastClick.attach(document.body)
  }, false)
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
