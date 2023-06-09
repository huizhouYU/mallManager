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
  userid: '',
  avatar: '',
  introduction: '',
  mobile: '',
  roles: [],
  currentLookStoreId: '',
  currentLookStoreName:''
  // currentLookStoreId: getStoreId()
}

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  SET_INTRODUCTION: (state, introduction) => {
    state.introduction = introduction
  },
  SET_MOBILE: (state, mobile) => {
    state.mobile = mobile
  },
  SET_NAME: (state, name) => {
    state.name = name
  },
  SET_USERID: (state, userid) => {
    state.userid = userid
  },
  SET_AVATAR: (state, avatar) => {
    state.avatar = avatar
  },
  SET_ROLES: (state, roles) => {
    state.roles = roles
  },
  SET_STOREID: (state, storeID) => {
    state.currentLookStoreId = storeID
  },
  SET_STORENAME: (state, storeName) => {
    state.currentLookStoreName = storeName
  }
}

const actions = {
  setStoreId({
    commit
  }, storeId) {

    return new Promise((resolve, reject) => {
      commit('SET_STOREID', storeId)
      // setToken(storeId)
      resolve("保存当前浏览的店铺ID成功")
    })
  },
  setStoreName({
    commit
  }, storeName) {
  
    return new Promise((resolve, reject) => {
      commit('SET_STORENAME', storeName)
      // setToken(storeId)
    })
  },
  // 用户名密码登录
  login({
    commit
  }, userInfo) {
    const {
      username,
      password
    } = userInfo
    return new Promise((resolve, reject) => {
      login({
        username: username.trim(),
        password: password
      }).then(response => {
        if (response.code == 10000) {
          const {
            data
          } = response
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
    const {
      mobile,
      vCode
    } = userInfo
    return new Promise((resolve, reject) => {
      msgLogin({
        mobile: mobile.trim(),
        captcha: vCode
      }).then(response => {
        if (response.code == 10000) {
          const {
            data
          } = response
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
        if (response.code == 10000) {
          const {
            data
          } = response
          commit('SET_TOKEN', data)
          setToken(data)
        }
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
        if (response.code == 10000) {
          const {
            data
          } = response
          var portrait = 'https://image.yijiequan.cn/yijiequan/attach/default-logo.jpg'
          if (data.user.portrait != undefined && data.user.portrait != null && data.user.portrait != '') {
            if (data.user.portrait.indexOf("https://") != -1 || data.user.portrait.indexOf("http://") != -1) {
              portrait = data.user.portrait
            }
          }
          commit('SET_NAME', data.user.username)
          commit('SET_USERID', data.user.userid)
          commit('SET_AVATAR', portrait)
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
