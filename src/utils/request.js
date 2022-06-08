import axios from 'axios'
import store from '@/store'

const request = axios.create({
  // 配置选项
})

// 添加请求拦截器
request.interceptors.request.use(function (config) {
  const { user } = store.state
  if(user && user.access_token) {
    config.headers.Authorization = user.access_token
  }
  // 在发送请求之前做些什么
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

export default request
