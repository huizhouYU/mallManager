import Vue from 'vue'
import Router from 'vue-router'
import Login from '../pages/login/login.vue'
import Home from '../pages/home/home.vue'
import Index from '../pages/index/index.vue'
import shop from '../../src/pages/shop/index.vue'
// import accessory from '../../pages/accessory/index.vue' //配件专区
// import supplyDemand from '../../pages/supplyDemand/index.vue' //供求信息
// import cooperationBrand from '../cooperationBrand/index.vue' //合作品牌
Vue.use(Router)
//解决vue路由重复导航错误
//获取原型对象上的push函数
const originalPush = Router.prototype.push
//修改原型对象中的push方法
Router.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}

export default new Router({
  routes: [{
      name: 'index',
      path: '/',
      component: Index,
      redirect:'/home',
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
        },
        {
          path: '/shoppingCart',
          name: 'ShoppingCart', //买家购物车
          component: () => import('../pages/shoppingCart/index.vue')
        },
        {
          path: '/buyer',
          name: 'Buyer', //买家中心
          component: () => import('../pages/buyer/index.vue'),
          redirect:'/personal',
          children: [{
              path: '/personal',
              name: 'Personal', //首页
              component: () => import('../pages/buyer/personal/index.vue')
            },
            {
                path: '/personalData',
                name: 'PersonalData', //个人资料
                component: () => import('../pages/buyer/personal/personalData.vue')
              },
              {
                  path: '/changePWD',
                  name: 'ChangePWD', //修改密码
                  component: () => import('../pages/buyer/personal/changePWD.vue')
                }]
        }
      ]
    },
    {
      name: 'shop',
      path: '/shop',
      component: shop,
      children: [{
          path: '/goodDetail',
          name: 'goodDetail', //商品详情页
          component: () => import('../../src/pages/shop/goodDetail.vue')
        },
        {
          path: '/shopHome',
          name: 'shopHome', //首页
          component: () => import('../../src/pages/shop/shopHome.vue')
        },
        {
          path: '/introductionIndex',
          name: 'introductionIndex', //简要介绍
          component: () => import('../../src/pages/shop/introduction/index.vue')
        },
        {
          path: '/qualificationsIndex',
          name: 'qualificationsIndex', //公司资质
          component: () => import('../../src/pages/shop/qualifications/index.vue')
        },
        {
          path: '/shopAllGoods',
          name: 'shopAllGoods', //店铺商品
          component: () => import('../../src/pages/allGoods/index.vue')
        },
        {
          path: '/demandIndex',
          name: 'demandIndex', //供求信息
          component: () => import('../../src/pages/shop/demand/index.vue')
        },
        {
          path: '/contactIndex',
          name: 'contactIndex', //联系方式
          component: () => import('../../src/pages/shop/contact/index.vue')
        },
        {
          path: '/demandDetail',
          name: 'demandDetail', //需求详情页
          component: () => import('../../src/pages/shop/demand/detail.vue')
        },
      ]
    },
    {
      name: 'login',
      path: '/login',
      component: Login
    }
    // ,
    // {
    //   name: 'home',
    //   path: '/',
    //   component: Home
    // }
  ]
})
