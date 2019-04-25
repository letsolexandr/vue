

import Vue from 'vue'
import Vuetify from 'vuetify'
import VueRouter from 'vue-router'
import 'vuetify/dist/vuetify.min.css' // Ensure you are using css-loader

import App from './App.vue'
import router from './router'

Vue.use(VueRouter)

Vue.use(Vuetify)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router: router,
}).$mount('#app')
