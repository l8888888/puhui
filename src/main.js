import Vue from 'vue'
import App from './App'
import router from './router'
import VueScroller from 'vue-scroller'
import axios from 'axios'
import VueAxios from 'vue-axios'
import fastClick from 'fastclick'
import Vant from 'vant'
import 'vant/lib/index.css'
import "./assets/style/reset.css"
import "./assets/style/iconfont.css"
import "./assets/style/animate.css"

Vue.config.productionTip = false
Vue.use(VueScroller)
Vue.use(VueAxios, axios)
Vue.use(Vant)
fastClick.attach(document.body)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
