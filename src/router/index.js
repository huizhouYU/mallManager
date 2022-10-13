import Vue from 'vue'
import Router from 'vue-router'
import Login from '../pages/login/login.vue'
import Home from '../pages/home/home.vue'
import Index from '../pages/index/index.vue'
// import accessory from '../../pages/accessory/index.vue' //配件专区
// import supplyDemand from '../../pages/supplyDemand/index.vue' //供求信息
// import cooperationBrand from '../cooperationBrand/index.vue' //合作品牌
Vue.use(Router)

export default new Router({
  routes: [{
      name: 'index',
      path: '/',
      component: Index,
      children: [{
          path: '/home',
          name: 'home', //首页
          component: () => import('../pages/home/index.vue')
        }, {
          path: '/accessory',
          name: 'accessory', //配件专区
          component: () => import('../pages/accessory/index.vue')
        }, {
          path: '/supplyDemand',
          name: 'supplyDemand', //供求信息
          component: () => import('../pages/supplyDemand/index.vue')
        },
        {
          path: '/cooperationBrand',
          name: 'cooperationBrand', //合作品牌
          component: () => import('../pages/cooperationBrand/index.vue')
        },
        {
          path: '/allGoods',
          name: 'allGoods', //所有商品
          component: () => import('../pages/allGoods/index.vue')
        }
      ]
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
