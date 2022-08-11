import axios from 'axios';
import { ElMessage, ElMessageBox } from 'element-plus';
import { localStorage } from '@/utils/storage';

// 创建 axios 实例
const service = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_API,
  timeout: 50000,
  headers: { 'Content-Type': 'application/json;charset=utf-8' }
});

// 请求拦截器
service.interceptors.request.use(
  (config) => {
    if (!config.headers) {
      throw new Error(
        `Expected 'config' and 'config.headers' not to be undefined`
      );
    }
    config.headers.Authorization = `${localStorage.get('token')}`;
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

// 响应拦截器
service.interceptors.response.use(
  (response) => {
    const { code, message } = response.data;
    if (code && code !== 200) {
      ElMessage.error(message || 'Error');

      return Promise.reject(new Error(message || 'Error'));
    } else {
      return response.data;
    }
  },
  error => {
    const { code, message } = error.response.data;
    if (code === '401') {
      // token 过期
      localStorage.clear(); // 清除浏览器全部缓存
      window.location.href = '/'; // 跳转登录页
      ElMessageBox.alert('当前页面已失效，请重新登录', '提示', {});
    } else {
      ElMessage({
        message: message || '系统出错',
        type: 'error'
      });
    }
    return Promise.reject(new Error(message || 'Error'));
  }
);

// 导出 axios 实例
export default service;
