import request from '../../src/utils/request.js'
//店铺详情
export function storeDetail(query) {
  return request({
    url: 'store/detail',
    method: 'get',
    params:query
  })
}
//店铺列表
export function storeList(query) {
  return request({
    url: 'store/list',
    method: 'get',
    params:query
  })
}