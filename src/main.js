import Vue from 'vue'
import App from './App.vue'
import i18n from '@/locale'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(ElementUI, {
  i18n: (key, value) => i18n.t(key, value)
})

new Vue({
  i18n,
  store,
  router,
  render: h => h(App),
}).$mount('#app')
