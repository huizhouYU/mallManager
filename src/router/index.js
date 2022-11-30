import Vue from 'vue'
import Router from 'vue-router'
import Login from '../pages/login/login.vue'
import Home from '../pages/home/home.vue'
import Index from '../pages/index/index.vue'
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
      path: '/redirect',
      component: () => import('../../src/components/redirect.vue')
    },
    {
      name: 'index',
      path: '/',
      component: Index,
      redirect: '/home',
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
          path: '/medicalApparatus',
          name: 'MedicalApparatus', //医疗器械
          component: () => import('../pages/medicalApparatus/index.vue')
        },
        {
          path: '/enterpriseServices',
          name: 'EnterpriseServices', //企业服务
          component: () => import('../pages/enterpriseServices/index.vue')
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
          redirect: '/personal',
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
              path: '/receiptAddress',
              name: 'ReceiptAddress', //收货地址
              component: () => import('../pages/buyer/personal/receiptAddress.vue')
            },
            {
              path: '/changePWD',
              name: 'ChangePWD', //修改密码
              component: () => import('../pages/buyer/personal/changePWD.vue')
            },
            {
              path: '/allOrders',
              name: 'AllOrders', //我的订单
              component: () => import('../pages/buyer/myOrder/allOrders.vue')
            }, {
              path: '/supplyDemandInfo',
              name: 'SupplyDemandInfo', //供求信息
              component: () => import('../pages/buyer/personal/supplyDemandInfo.vue')
            },
          ]
        }
      ]
    },
    {
      name: 'shop',
      path: '/shop',
      component: () => import('../../src/pages/shop/index.vue'),
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
      path: '/orderDetail',
      name: 'OrderDetail', //订单详情
      component: () => import('../../src/pages/buyer/myOrder/orderDetail.vue')
    },
    {
      path: '/orderPayment',
      name: 'OrderPayment', //立即支付
      component: () => import('../../src/pages/buyer/orderPayment/index.vue')
    },
    {
      name: 'login',
      path: '/login',//登录
      component: Login
    },
    {
      path: '/register',
      name: 'Register', //注册
      component: () => import('../../src/pages/login/register.vue')
    },
    {
      path: '/forgetPsd',
      name: 'ForgetPsd', //找回密码
      component: () => import('../../src/pages/login/forgetPsd.vue')
    },
    {
      path: '/publishDemandIndex',
      name: 'PublishDemandIndex', //发布需求
      redirect: '/publishDemand',
      component: () => import('../../src/pages/publishDemand/index.vue'),
      children: [{
          path: '/publishDemand',
          name: 'PublishDemand', //发布需求表单填写页面
          component: () => import('../../src/pages/publishDemand/publishDemand.vue')
        },
        {
          path: '/success',
          name: 'Success', //发布成功
          component: () => import('../../src/pages/publishDemand/success.vue')
        }
      ]
    },
    {
      path: '/personDemandDetail',
      name: 'PersonDemandDetail', //个人发布的需求详情页
      component: () => import('../../src/pages/publishDemand/demandDetail.vue')
    },
    {
      name: 'ResidencyAgreement',
      path: '/residencyAgreement', //入驻协议
      component: () => import('../../src/pages/index/residencyAgreement.vue')
    },
    {
      name: 'TradingRules',
      path: '/tradingRules', //交易规则
      component: () => import('../../src/pages/index/tradingRules.vue')
    },
    {
      name: 'AboutUs',
      path: '/aboutUs', //关于我们
      component: () => import('../../src/pages/index/aboutUs.vue')
    },
    {
      name: 'LegalStatement',
      path: '/legalStatement', //法律声明
      component: () => import('../../src/pages/index/legalStatement.vue')
    }
  ]
})
