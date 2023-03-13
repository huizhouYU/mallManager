'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')
let baseUrl = ''
let params = process.argv[4]
switch(params){
    case '--env=test':
        baseUrl = '"http://web-api-test.yijiequan.cn/"'
        break
    case '--env=prod':
        baseUrl= '"http://web-api.yijiequan.cn/"'
        break
      default:
        baseUrl = '"http://web-api.yijiequan.cn/"'
}
module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  BASE_URI:baseUrl
})
