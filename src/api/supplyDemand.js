import request from '../../src/utils/request.js'
//需求列表
export function articleList(query) {
  return request({
    url: 'article/list',
    method: 'get',
    params:query
  })
}
//需求详情
export function articleDetail(query) {
  return request({
    url: 'article/detail',
    method: 'get',
    params:query
  })
}

//精选推荐
export function recommendList(query) {
  return request({
    url: 'article/recommend',
    method: 'get',
    params:query
  })
}
