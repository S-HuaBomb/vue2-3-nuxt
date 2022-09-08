import request from '@/utils/request'

// 查询最新课程
export function getMostNew(params) {
  return request({
    url: '/api/course/mostNew',
    method: 'post',
    data: params
  })
}

//获取一级分类
export function getFirstCategorys() {
  return request({
    url: '/api/course/category/getFirstCategorys',
  })
}

// 查询课程标签
export function getCourseTags(params) {
  return request({
    url: '/api/course/tags/list',
    method: 'post',
    data: params
  })
}

// 查询课程
export function courseSearch(params) {
  return request({
    url: '/api/course/search',
    method: 'post',
    data: params
  })
}
