import request from '../../src/utils/request.js'
//根据广告位code获取广告
export function advertByCode() {
  return request({
    url: '/advert/queryByCode',
    method: 'get'
  })
}
//分类列表(树形)
export function categoryList() {
  return request({
    url: '/goodsCategory/list',
    method: 'get'
  })
}

//根据Pid查找下级分类
export function listByPid(query) {
  return request({
    url: 'goodsCategory/listByPid',
    method: 'get',
    params: query
  })
}

//品牌列表
export function getBrandsList(query) {
  return request({
    url: '/brand/list',
    method: 'get',
    params: query
  })
}

//品牌列表分页
export function getBrandsListPage(query) {
  return request({
    url: 'brand/listPage',
    method: 'get',
    params: query
  })
}

//九宫格推荐商品
export function recommendGoods(query) {
  return request({
    url: 'index/recommendGoods',
    method: 'get',
    params: query
  })
}

//获取热门求购+需求列表
export function articleList(query) {
  return request({
    url: 'index/articleList',
    method: 'get',
    params: query
  })
}

//查询配件分类
export function listByGroup(query) {
  return request({
    url: 'goodsCategory/listByGroup',
    method: 'get',
    params: query
  })
}

// 获取医疗器械
export function equipmentList(query) {
  return request({
    url: 'index/equipment',
    method: 'get',
    params: query
  })
}
// 获取企业服务-个人工程师
export function storeList(query) {
  return request({
    url: 'index/storeList',
    method: 'get',
    params: query
  })
}

// 关键字列表
export function searchKeys(query) {
  return request({
    url: 'common/searchKeys',
    method: 'get',
    params: query
  })
}

//客户留言提交
export function guestMessage(data) {
  return request({
    url: '/guestMessage/submit',
    method: 'post',
    data: data
  })
}
