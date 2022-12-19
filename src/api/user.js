import request from '@/utils/request'
//用户名密码登录
export function login(data) {
  return request({
    url: '/login',
    method: 'post',
    data: data
  })
}
//短信验证码登录
export function msgLogin(data) {
  return request({
    url: '/msgLogin',
    method: 'post',
    data: data
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
//发送登录短信
export function sendMsg(data) {
  return request({
    url: '/sms/sendMsg',
    method: 'post',
    data: data
  })
}
//发送忘记密码短信
export function sendForgetPwd(data) {
  return request({
    url: '/sms/sendForgetPwd',
    method: 'post',
    data: data
  })
}

//发送注册短信
export function registerMsg(data) {
  return request({
    url: 'sms/registerMsg',
    method: 'post',
    data: data
  })
}
//注册
export function register(data) {
  return request({
    url: '/register',
    method: 'post',
    data: data
  })
}
//更新用户信息
export function updateInfo(data) {
  return request({
    url: 'user/updateInfo',
    method: 'post',
    data: data
  })
}
//用户找回密码
export function findPwd(data) {
  return request({
    url: '/findPwd',
    method: 'post',
    data: data
  })
}
//发送修改资料短信
export function sendUpdateMsg(data) {
  return request({
    url: 'sms/sendUpdateMsg',
    method: 'post',
    data: data
  })
}
//修改用户密码
export function updatePwd(data) {
  return request({
    url: 'user/updatePwd',
    method: 'post',
    data: data
  })
}
//发送修改密码短信
export function sendPwdMsg(data) {
  return request({
    url: 'sms/sendPwdMsg',
    method: 'post',
    data: data
  })
}
//退出登录
export function logout() {
  return request({
    url: '/user/logout',
    method: 'post'
  })
}
