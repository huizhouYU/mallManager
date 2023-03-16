import request from '../../src/utils/request.js'
//商品列表
export function goodsList(data) {
  return request({
    url: 'goods/list',
    method: 'post',
    data
  })
}
//商品详情
export function goodsDetail(query) {
  return request({
    url: 'goods/detail',
    method: 'get',
    params:query
  })
}
//相关商品推荐
export function relatedRecommendGoods(data) {
  return request({
    url: 'goods/recommend',
    method: 'post',
    data
  })
}
