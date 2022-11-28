import request from '../../src/utils/request.js'
//分类列表(树形)
export function categoryList() {
  return request({
    url: '/goodsCategory/list',
    method: 'get'
  })
}
//品牌列表
export function getBrandsList() {
  return request({
    url: '/brand/list',
    method: 'get'
  })
}
