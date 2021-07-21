import axios from 'axios';
import store from '@/store';
const service = axios.create({
  baseURL: '/api',
  timeout: 20000,
});

// 添加请求拦截器
service.interceptors.request.use(
  (config) => {
    // 在发送请求之前做些什么
    store.commit('STARTLOADING');
    return config;
  },
  () => {}
);

// 添加响应拦截器
service.interceptors.response.use(
  (response) => {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    store.commit('FINISHLOADING');
    return response.data;
  },
  (error) => {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    store.commit('FINISHLOADING');
    // return Promise.reject(error);
    // return new Promise(() => {});
    return { status: 'error', msg: error.message };
  }
);

export default service;
