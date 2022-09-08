import request from '@/utils/request'

export function getSliders(token) {
  return request({
    url: '/api/slider/getSliders'
  })
}
