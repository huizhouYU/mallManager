import router from './router'
import store from './store'
import {
  Message
} from 'element-ui'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style
import {
  getToken
} from '@/utils/auth' // get token from cookie

NProgress.configure({
  showSpinner: false
}) // NProgress Configuration
//白名单
const whiteList = ['/login', '/home', '/register', '/residencyAgreement', '/tradingRules', '/aboutUs', '/legalStatement' ] // 无重定向白名单
//需要登录才能看见的名单
const loginList = ['/buyer', '/personal', '/personalData', '/receiptAddress', '/changePWD', '/allOrders',
  '/supplyDemandInfo', '/orderDetail', '/orderPayment', '/personDemandDetail','/shoppingCart' ]


router.beforeEach(async (to, from, next) => {
  // 启动进度条
  NProgress.start()

  // 确定用户是否已登录  从Cookies中获取token
  const hasToken = getToken()
  if (hasToken) {
    if (to.path === '/login') {
      // 如果已登录，则重定向到主页
      next({
        path: '/'
      })
      NProgress.done() // hack: https://github.com/PanJiaChen/vue-element-admin/pull/2939
    } else {
      const a = await store.dispatch('user/getInfo')
      next()
      // // 确定用户是否已通过getInfo获得其权限角色
      // const hasRoles = store.getters.roles && store.getters.roles.length > 0
      // console.log("hasRoles:", hasRoles)
      // if (hasRoles) {
      //   next()
      // } else {
      //   try {
      //     // get user info
      //     // note: roles must be a object array! such as: ['admin'] or ,['developer','editor']
      //     const { roles } = await store.dispatch('user/getInfo')

      //     // generate accessible routes map based on roles  基于角色生成可访问路线图
      //     // const accessRoutes = await store.dispatch('permission/generateRoutes', roles)

      //     // dynamically add accessible routes 动态添加可访问的路由
      //     // router.addRoutes(accessRoutes)

      //     // hack method to ensure that addRoutes is complete  hack方法确保addRoutes完整
      //     // set the replace: true, so the navigation will not leave a history record 设置replace:true，这样导航将不会留下历史记录
      //     next({
      //       ...to,
      //       replace: true
      //     })
      //   } catch (error) {
      //     // remove token and go to login page to re-login
      //     await store.dispatch('user/resetToken')
      //     // Message.error(error || 'Has Error')
      //     Message.error({
      //       message: error || 'Has Error'
      //     })
      //     next(`/login?redirect=${to.path}`)
      //     NProgress.done()
      //   }
      // }
    }
  } else {
    if (loginList.indexOf(to.path) !== -1) {
      // 需要登录权限的页面被重定向到登录页面
      next(`/login?redirect=${to.path}`)
      NProgress.done()
    } else {
      //不需要登录的页面直接进入
      next()
    }

    // if (whiteList.indexOf(to.path) !== -1) {
    //   // 在免费登录白名单中，直接进入
    //   next()
    // } else {
    //   // 没有访问权限的其他页面被重定向到登录页面
    //   next(`/login?redirect=${to.path}`)
    //   NProgress.done()
    // }
  }
})

router.afterEach(() => {
  // 完成进度条
  NProgress.done()
})
