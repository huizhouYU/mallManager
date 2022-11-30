import request from '@/utils/request'
//用户名密码登录
export function login(data) {
  return request({
    url: '/login',
    method: 'post',
    data:data
  })
}
//短信验证码登录
export function msgLogin(data) {
  return request({
    url: '/msgLogin',
    method: 'post',
    data:data
  })
}

//获取用户信息
export function getInfo(token) {
  return request({
    url: '/user/info',
    method: 'get',
    // params: { token }
  })
}
//发送手机短信
export function sendMsg(data) {
  return request({
    url: '/user/sendMsg',
    method: 'post',
    data:data
  })
}
//注册
export function register(data) {
  return request({
    url: '/user/register',
    method: 'post',
    data:data
  })
}


//退出登录
export function logout() {
  return request({
    url: '/user/logout',
    method: 'post'
  })
}
