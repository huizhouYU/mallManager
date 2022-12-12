import {
  login,
  msgLogin,
  logout,
  register,
  getInfo
} from '../../api/user.js'
import {
  getToken,
  setToken,
  // setStoreId,
  // getStoreId,
  removeToken
} from '../../utils/auth.js'

// import router, {
//   resetRouter
// } from '@/router'

const state = {
  token: getToken(),
  name: '',
  userid:'',
  avatar: '',
  introduction: '',
  mobile: '',
  roles: [],
  currentLookStoreId: ''
  // currentLookStoreId: getStoreId()
}

const mutations = {
  SET_TOKEN: (state, token) => {
    // console.log("保存token")
    state.token = token
  },
  SET_INTRODUCTION: (state, introduction) => {
    // console.log("保存introduction")
    state.introduction = introduction
  },
  SET_MOBILE: (state, mobile) => {
    // console.log("保存mobile")
    state.mobile = mobile
  },
  SET_NAME: (state, name) => {
    // console.log("保存name")
    state.name = name
  },
  SET_USERID: (state, userid) => {
    state.userid = userid
  },
  SET_AVATAR: (state, avatar) => {
    // console.log("保存avatar")
    state.avatar = avatar
  },
  SET_ROLES: (state, roles) => {
    // console.log("保存roles")
    state.roles = roles
  },
  SET_STOREID: (state, storeID) => {
    // console.log("保存roles")
    state.currentLookStoreId = storeID
  }
}

const actions = {
  setStoreId({ commit }, storeId) {

    return new Promise((resolve, reject) => {
      commit('SET_STOREID', storeId)
      // setToken(storeId)
      console.log("保存的店铺ID：",storeId)
      resolve("保存当前浏览的店铺ID成功")
    })
  },
  // 用户名密码登录
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
      // commit('SET_TOKEN', "iuhdusfpo0bphjihoihojihiohih")
      // setToken("iuhdusfpo0bphjihoihojihiohih")
      // resolve()
      login({
        username: username.trim(),
        password: password
      }).then(response => {

        if (response.code == 10000) {
          const {
            data
          } = response
          console.log("setToken:", data)
          commit('SET_TOKEN', data)
          setToken(data)
        }
        resolve(response)
      }).catch(error => {
        reject(error)
      })
    })
  },
  //短信验证码登录
  msgLogin({
    commit
  }, userInfo) {
    console.log("请求登录接口")
    const {
      mobile,
      vCode
    } = userInfo
    return new Promise((resolve, reject) => {
      console.log("假设请求登录接口，并且登录成功了")
      // commit('SET_TOKEN', "iuhdusfpo0bphjihoihojihiohih")
      // setToken("iuhdusfpo0bphjihoihojihiohih")
      // resolve()
      msgLogin({
        mobile: mobile.trim(),
        captcha: vCode
      }).then(response => {
        if (response.code == 10000) {
          const {
            data
          } = response
          console.log("setToken:", data)
          commit('SET_TOKEN', data)
          setToken(data)
        }
        resolve(response)
      }).catch(error => {
        reject(error)
      })
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
        const {
          data
        } = response.data
        console.log("setToken:",data)
        commit('SET_TOKEN', data)
        setToken(data)
        resolve(response)
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
    return new Promise((resolve, reject) => {
      const roles = ["admin"]
      const token = getToken()
      getInfo().then(response => {
        console.log("getInfo:", response)
        if (response.code == 10000) {
          const {
            data
          } = response
          console.log(data)
          commit('SET_NAME', data.user.username)
          commit('SET_USERID',  data.user.userid)
          commit('SET_AVATAR',
            "https://img2.baidu.com/it/u=631618391,2322805080&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500")
          commit('SET_INTRODUCTION', "固定无")
          // var mobile = ''
          // if(data.user.mobile == undefined || data.user.mobile == ''|| data.user.mobile== null){
          //   mobile = '13329019580'
          // }else{
          //   mobile = data.user.mobile
          // }
          // commit('SET_MOBILE', mobile)

        } else {
          commit('SET_TOKEN', '')
          removeToken()
          reject(response.message)
        }
        resolve(response)

      }).catch(error => {
        reject(error)
      })
    })
  },

  // user logout
  logout({
    commit,
    state,
    dispatch
  }) {
    return new Promise((resolve, reject) => {
      commit('SET_TOKEN', '')
      commit('SET_ROLES', [])
      removeToken()
      commit('SET_NAME', "")
      commit('SET_AVATAR', "")
      commit('SET_INTRODUCTION', "")
      commit('SET_MOBILE', "")


      resolve()
      // logout(state.token).then(() => {
      //   commit('SET_TOKEN', '')
      //   commit('SET_ROLES', [])
      //   removeToken()
      //   // resetRouter()

      //   // reset visited views and cached views
      //   // to fixed https://github.com/PanJiaChen/vue-element-admin/issues/2485
      //   dispatch('tagsView/delAllViews', null, {
      //     root: true
      //   })

      //   resolve()
      // }).catch(error => {
      //   reject(error)
      // })
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
