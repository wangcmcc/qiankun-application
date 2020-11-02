import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

let instance: any = null;
function render() {
  instance= new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
}

if((window as any)._POWERED_BY_QIANKUN_){
  __webpack_public_path__ = (window as any)._INJIRCTED_PUBLIC_PATH_BY_QIANKUN_;
}

if(!(window as any)._POWERED_BY_QIANKUN_){
  render()
}

// 子组件协议
export async function bootstrap(props: any) {};
export async function mount(props: any) {
  render()
};
export async function unmount(props: any) {
  instance.$destroy()
};

