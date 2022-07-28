import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/src/jquery.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faMoon } from '@fortawesome/free-regular-svg-icons'
import { faMagnifyingGlass, faChevronDown, faSpinner, faArrowLeftLong } from '@fortawesome/free-solid-svg-icons'
import router from "./router";

library.add(faMoon, faMagnifyingGlass, faChevronDown, faSpinner, faArrowLeftLong)

Vue.config.productionTip = false
Vue.use(VueRouter);
Vue.component('font-awesome-icon', FontAwesomeIcon)

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')

