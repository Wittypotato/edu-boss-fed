import request from '@/utils/request'
import qs from 'qs'

export const login = data => {
  return request({
    method: 'POST',
    url: '/front/user/login',
    // headers: { 'content-type': 'application/x-www-form-urlencoded' },
    // axios默认发送的是application/json格式
    // 如果data是普通对象 则content-type是application/json
    // 如果data是qs.stringify(data)转换之后的数据：key=value&key=value
    // 则content-type会被设置成application/x-www-form-urlencoded
    data: qs.stringify(data)
  })
}
