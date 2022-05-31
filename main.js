import App from './App'
import store from './store'
import uView from "uview-ui";
// 封装请求方法

// import {myRequest} from "./utils/api.js"
// Vue.prototype.$myRequest = myRequest

// jiangmen
import Vant from 'vant'
// import 'vant/lib/index.css'
import i18n from '@/locale'
import config from '@/config'
import importDirective from '@/directive'
import 'lib-flexible/flexible.js'
// 样式效果
// import '@/static/assets/icons/iconfont.css'
import '@/libs/polyfill'
// import '@/libs/rem.js'
import '@/static/assets/font/PINGFANG_MEDIUM.TTF'
import * as filter from '@/filters'

Vue.use(uView);
// import '@/mock'
// 实际打包时应该不引入mock
/* eslint-disable */
if (process.env.NODE_ENV !== 'production') require('@/mock')

// login
import API from '@/utils/api.js'
import Tian from "@/utils/tian.js"
import IMG from '@/utils/imageMange.js'
import Config from '@/utils/config.js'
import HTTP from '@/utils/http.js'
Vue.prototype.API = API
Vue.prototype.$Tian = Tian
Vue.prototype.IMG = IMG
Vue.prototype.Config = Config
Vue.prototype.$HTTP = HTTP

Vue.use(Vant)

Vue.prototype.$config = config
// 注册指令
importDirective(Vue)
Object.keys (filter).forEach(keys=>{
  Vue.filter(keys,filter[keys])
})


// #ifndef VUE3
import Vue from 'vue'
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
    ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif