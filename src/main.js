import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
//导入全局样式表
import './assets/css/global.css'
//配置请求的根路径
import axios from 'axios'
axios.defaults.baseURL='http://localhost:8080/ymzgzyz/'
Vue.prototype.$http = axios

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
