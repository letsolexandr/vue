

import Vue from 'vue'
import Vuetify from 'vuetify'
import VueRouter from 'vue-router'
import 'vuetify/dist/vuetify.min.css' // Ensure you are using css-loader
import store from './store';
import router from './router'
import App from './App.vue'



Vue.use(VueRouter)

Vue.use(Vuetify)

Vue.config.productionTip = false


new Vue({
  render: h => h(App),
  store:store,
  router: router,
}).$mount('#app')
