import axios from 'axios'
import {
  MessageBox,
  Message
} from 'element-ui'
import store from '@/store'
import {
  getToken
} from '@/utils/auth'

// create an axios instance
const service = axios.create({
  // baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  baseURL:process.env.BASE_URI,
  // baseURL: 'https://web-api.yijiequan.cn/', // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests  允许跨域携带cookie
  timeout: 5000 // request timeout
})
// request interceptor
service.interceptors.request.use(
  config => {
    // do something before request is sent
    // 发送请求之前可以在这里写一些东西
    if (store.getters.token) {
      // let each request carry token
      // ['X-Token'] is a custom headers key
      // please modify it according to the actual situation
      config.headers['Authorization'] = 'Bearer ' + getToken()
      // Message("hhh:"+getToken())
      // config.headers['Authorization'] = getToken()
      config.headers['content-type'] = "application/json;charset=utf-8"
      // config.headers['X-Token'] = getToken()
    }
    return config
  },
  error => {
    // 请求报错的时候做一些事情
    // do something with request error
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  /**
   * If you want to get http information such as headers or status
   * Please return  response => response
   */

  /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code
   */
  response => {
    // const res = response.data
    // if the custom code is not 20000, it is judged as an error.
    // if (res.code !== 20000) {
    //10000 ：成功      console.log("请求网络：", response)
    if (response.status !== 200) {
      Message({
        message: response.statusText || 'Error',
        type: 'error',
        duration: 5 * 1000
      })

      // 50008: Illegal token; 50012: Other clients logged in; 50014: Token expired;
      // if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
      //   // to re-login
      //   MessageBox.confirm('You have been logged out, you can cancel to stay on this page, or log in again', 'Confirm logout', {
      //     confirmButtonText: 'Re-Login',
      //     cancelButtonText: 'Cancel',
      //     type: 'warning'
      //   }).then(() => {
      //     store.dispatch('user/resetToken').then(() => {
      //       location.reload()
      //     })
      //   })
      // }
      return Promise.reject(new Error(response.statusText || 'Error'))
    } else {
      return response.data
    }
  },
  error => {
    // 请求错误时做些事
    // let status = "";
    // if (error.request) {
    //   status = error.request;
    // } else if (error.response) {
    //   status = error.response;
    // }
    // if (status) {
    //   switch (status.status) {
    //     case 400:
    //       error.message = "请求错误(400)";
    //       break;
    //     case 401:
    //       error.message = "未授权，请重新登录(401)";
    //       router.push("/401");
    //       break;
    //     case 403:
    //       error.message = "拒绝访问(403)";
    //       break;
    //     case 404:
    //       error.message = "请求出错(404)";
    //       router.push("/404");
    //       break;
    //     case 408:
    //       error.message = "请求超时(408)";
    //       break;
    //     case 500:
    //       error.message = "服务器错误(500)";
    //       router.push("/a500");
    //       break;
    //     case 501:
    //       error.message = "服务未实现(501)";
    //       break;
    //     case 502:
    //       error.message = "网络错误(502)";
    //       break;
    //     case 503:
    //       error.message = "服务不可用(503)";
    //       break;
    //     case 504:
    //       error.message = "网络超时(504)";
    //       break;
    //     case 505:
    //       error.message = "HTTP版本不受支持(505)";
    //       break;
    //     default:
    //       error.message = `连接出错(${error.response.status})!`;
    //   }
    // } else {
    //   error.message = "连接服务器失败!";
    // }
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)

export default service
