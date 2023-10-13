import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App.vue'
/* import router from './router' */
import store from './store/store'
import BootstrapVue from 'bootstrap-vue'
import 'typeface-roboto'
import './icons'
import 'animate.css'
import i18n from './i18n'

Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.use(VueResource)

// Root der API - im Moment dient die corsproxy.php als CORS-Proxy
/* Vue.http.options.root =
  'https://kultursphaere .sh/corsproxy.php?url='; */
// TODO(change off to error in eslintc.js at no-console and no-debugger)

new Vue({
  /* router, */
  store,
  render: h => h(App),
  i18n
}).$mount('#living-images-viewer-app')
