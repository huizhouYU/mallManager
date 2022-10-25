import {
  login,
  logout,
  register,
  getInfo
} from '../../api/user.js'
import {
  getToken,
  setToken,
  removeToken
} from '../../utils/auth.js'

// import router, {
//   resetRouter
// } from '@/router'

const state = {
  token: getToken(),
  name: '',
  avatar: '',
  introduction: '',
  mobile:'',
  roles: []
}

const mutations = {
  SET_TOKEN: (state, token) => {
    console.log("保存token")
    state.token = token
  },
  SET_INTRODUCTION: (state, introduction) => {
    console.log("保存introduction")
    state.introduction = introduction
  },
  SET_MOBILE: (state, mobile) => {
    console.log("保存mobile")
    state.mobile = mobile
  },
  SET_NAME: (state, name) => {
    console.log("保存name")
    state.name = name
  },
  SET_AVATAR: (state, avatar) => {
    console.log("保存avatar")
    state.avatar = avatar
  },
  SET_ROLES: (state, roles) => {
    console.log("保存roles")
    state.roles = roles
  }
}

const actions = {
  // user login
  login({
    commit
  }, userInfo) {
    console.log("请求登录接口")
    const {
      username,
      password
    } = userInfo
    return new Promise((resolve, reject) => {
      console.log("假设请求登录接口，并且登录成功了")
      commit('SET_TOKEN', "iuhdusfpo0bphjihoihojihiohih")
      setToken("iuhdusfpo0bphjihoihojihiohih")
      resolve()
      // login({
      //   username: username.trim(),
      //   password: password
      // }).then(response => {
      //   console.log("sdresponse：",response)
      //   const {
      //     data
      //   } = response.data
      //   console.log("setToken:",data)
      //   commit('SET_TOKEN', data)
      //   setToken(data)
      //   resolve()
      // }).catch(error => {
      //   reject(error)
      // })
    })
  },

  register({
    commit
  }, registerInfo) {
    const {
      mobile,
      captcha,
      activation
    } = registerInfo
    return new Promise((resolve, reject) => {
      register({
        mobile: mobile.trim(),
        captcha: captcha.trim(),
        activation: activation.trim()
      }).then(response => {
        console.log("注册接口返回：", response)
        console.log("将返回的token保存到store中")
        // const {
        //   data
        // } = response.data
        // console.log("setToken:",data)
        // commit('SET_TOKEN', data)
        // setToken(data)
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },

  // get user info
  getInfo({
    commit,
    state
  }) {
    console.log("请求用户信息")
    return new Promise((resolve, reject) => {
      const roles = ["admin"]
      commit('SET_ROLES', roles)
      commit('SET_NAME', "百货互补")
      commit('SET_AVATAR', "https://img2.baidu.com/it/u=631618391,2322805080&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500")
      commit('SET_INTRODUCTION', "固定无")
      commit('SET_MOBILE', "18154526542")
      resolve()


      // getInfo(state.token).then(response => {
      //   const {  data } = response.data
      //   if (!data) {
      //     reject('Verification failed, please Login again.')
      //   }

      //   // const { roles, name, avatar, introduction } = data
      //   const {
      //     store,
      //     user
      //   } = data
      //   const roles = ["admin"]
      //   // roles.push(store.stype)
      //   // roles = ["admin"]

      //   // roles must be a non-empty array
      //   if (!roles || roles.length <= 0) {
      //     reject('getInfo: roles must be a non-null array!')
      //   }
      //   commit('SET_ROLES', roles)
      //   commit('SET_NAME', user.username)
      //   commit('SET_AVATAR', "")
      //   commit('SET_INTRODUCTION', "固定无")
      //   // commit('SET_ROLES', roles)
      //   // commit('SET_NAME', name)
      //   // commit('SET_AVATAR', avatar)
      //   // commit('SET_INTRODUCTION', introduction)
      //   resolve(data)
      // }).catch(error => {
      //   reject(error)
      // })
    })
  },

  // user logout
  logout({
    commit,
    state,
    dispatch
  }) {
    return new Promise((resolve, reject) => {
      logout(state.token).then(() => {
        commit('SET_TOKEN', '')
        commit('SET_ROLES', [])
        removeToken()
        // resetRouter()

        // reset visited views and cached views
        // to fixed https://github.com/PanJiaChen/vue-element-admin/issues/2485
        dispatch('tagsView/delAllViews', null, {
          root: true
        })

        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },

  // remove token
  resetToken({
    commit
  }) {
    return new Promise(resolve => {
      commit('SET_TOKEN', '')
      commit('SET_ROLES', [])
      removeToken()
      resolve()
    })
  },

  // dynamically modify permissions
  async changeRoles({
    commit,
    dispatch
  }, role) {
    const token = role + '-token'

    commit('SET_TOKEN', token)
    setToken(token)

    const {
      roles
    } = await dispatch('getInfo')

    // resetRouter()

    // generate accessible routes map based on roles
    const accessRoutes = await dispatch('permission/generateRoutes', roles, {
      root: true
    })
    // dynamically add accessible routes
    router.addRoutes(accessRoutes)

    // reset visited views and cached views
    dispatch('tagsView/delAllViews', null, {
      root: true
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
