// import 'babel-polyfill'
import Vue from 'vue' // Since using template for Vue, change node-modules/vue/package.json for import vue.js not vue.common.js.  ( vue.js = vue.common.js + compiler.js )

import store from './store'
import App from './views/App.vue'

const app = new Vue({
  el: '#app',
  // provide the store using the "store" option.
  // this will inject the store instance to all child components.
  store,
  render: h => h(App)
})