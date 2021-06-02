import Vue from 'vue'
import App from './App.vue'

//引入Vant：https://vant-contrib.gitee.io/vant/#/zh-CN/quickstart
import Vant from 'vant'
import 'vant/lib/index.css'
Vue.use(Vant)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
