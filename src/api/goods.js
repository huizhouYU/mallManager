import request from '../../src/utils/request.js'
//��Ʒ�б�
export function goodsList(data) {
  return request({
    url: 'goods/list',
    method: 'post',
    data
  })
}
//��Ʒ����
export function goodsDetail(query) {
  return request({
    url: 'goods/detail',
    method: 'get',
    params:query
  })
}
//�����Ʒ�Ƽ�
export function relatedRecommendGoods(data) {
  return request({
    url: 'goods/recommend',
    method: 'post',
    data
  })
}
