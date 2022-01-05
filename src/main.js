import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import { currency, factPrice, formatTime } from './utils/filters'
import msgBox from './plugin/vue-msgbox'

Vue.use(VueAxios, axios)
Vue.use(msgBox)

axios.defaults.baseURL = '/api'

Vue.config.productionTip = false

Vue.filter('currency', currency)
Vue.filter('factPrice', factPrice)
Vue.filter('formatTime', formatTime)

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
