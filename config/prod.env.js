'use strict'
let baseUrl= ''
let params = process.env.env_config
switch (params) {
  case 'prod': //正式环境地址
    baseUrl = '"//web-api.yijiequan.cn/"' 
      break
  default: //测试环境地址
    baseUrl = '"//web-api-test.yijiequan.cn/"' 
}
module.exports = {
  NODE_ENV: '"production"',
  BASE_URI: baseUrl
}
