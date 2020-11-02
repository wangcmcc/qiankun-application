import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';


Vue.config.productionTip = false;
Vue.use(ElementUI);
import {registerMicroApps, start} from 'qiankun'

const apps = [
  {
    name: 'vueApp',
    entry: 'http://localhost:10000/',
    container: '#vue',
    activeRule: '/vue'
  },
  {
    name: 'reactApp',
    entry: '//localhost:20000',
    container: '#react',
    activeRule: '/react'
  }
]
registerMicroApps(apps)
start()
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
