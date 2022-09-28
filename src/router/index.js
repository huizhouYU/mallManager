import Vue from 'vue'
import Router from 'vue-router'
import Login from '../pages/login/login.vue'
import Home from '../pages/home/home.vue'
import Index from '../pages/index/index.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      name: 'index',
      path: '/',
      component: Index
    },
    {
      name: 'login',
      path: '/login',
      component: Login
    },
    {
      name: 'home',
      path: '/',
      component: Home
    }
  ]
})
