import Vue from 'vue'
import App from './App.vue'
import {BootstrapVue, IconsPlugin} from  'bootstrap-vue'
import router from "./router";

Vue.config.productionTip = false

Vue.use (BootstrapVue)
Vue.use (IconsPlugin)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')


