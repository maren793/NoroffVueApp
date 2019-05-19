import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Recipies from './recipePage.vue'
Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/',
      name: 'Recipies',
      component: Recipies
    }
  ]
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
