import request from '../../src/utils/request.js'
//商品列表
export function goodsList(data) {
  return request({
    url: 'goods/list',
    method: 'post',
    data
  })
}
