import Vue from 'vue'
import App from './App.vue'
import store from './store'

import './assets/css/app.css'
import router from './router'

Vue.config.productionTip = false

Vue.mixin({
  methods:{
    getPageFromURL(url){
      //TODO: Make this method better incase additional query params are passed
      if(!url){
          return null
      }
      
      let urlList = url.split("=")
      return urlList[urlList.length-1]
    }
  }
})

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
