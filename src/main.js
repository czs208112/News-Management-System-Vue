// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
Vue.use(ElementUI)
import api from './api/index.js'
Vue.prototype.$api = api
import utils from './utils'
Vue.prototype.$utils = utils
Vue.config.productionTip = false
import compUtils from './components/componetUtils'
Vue.prototype.$compUtils = compUtils

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
