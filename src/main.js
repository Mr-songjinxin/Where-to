// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'

import "./assets/styles/reset.css"
import "./assets/styles/border.css"
import "./assets/styles/iconfont.css"
import "swiper/dist/css/swiper.css"

import fastClick from 'fastclick'
Vue.use(VueAwesomeSwiper, /* { default options with global component } */)


Vue.config.productionTip = false
Vue.config.devtools = true
fastClick.attach(document.body)



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
