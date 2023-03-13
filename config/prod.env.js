'use strict'
let baseUrl= ''
let params = process.env.env_config
switch (params) {
  case 'prod': //正式环境地址
    baseUrl = '"http://web-api.yijiequan.cn/"' //首页地址
      break
  default: //测试环境地址
    baseUrl = '"http://web-api-test.yijiequan.cn/"' //首页地址
}
module.exports = {
  NODE_ENV: '"production"',
  BASE_URI: baseUrl
}
