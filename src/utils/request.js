import axios from "axios";
import { Toast } from "vant";
import store from "@/store";
import qs from "qs";

/**
 * 自定义Axios实例
 */
const Axios = axios.create({
  baseURL: process.env.VUE_APP_URL,
  timeout: 30000,
  withCredentials: true,
  // headers: { "Content-Type": "application/x-www-form-urlencoded;charset=utf-8" },
  // headers: { "Content-Type": "application/json" },
  headers: { "Content-Type": "application/json;charset=utf-8" }
  
});

// 添加请求拦截器
Axios.interceptors.request.use(
  config => {
    if (localStorage.token) {
      // config.headers.token = localStorage.token;
      config.headers.Authorization = "Bearer " + localStorage.token;
    }
    return config;
  },
  error => {
    console.log(error);
    return Promise.reject("网络出错");
  }
);

// 添加响应拦截器
Axios.interceptors.response.use(
  function(response) {
    // console.log(response);
    // 对响应数据做点什么
    const { code, message } = response.data;
    if (
      code !== 200 &&
      code !== 0 &&
      code !== 400 &&
      code !== 100 &&
      code !== 201 &&
      code !== 202 &&
      code !== 401
    ) {
      Toast.fail(message);
    }

    // 登录失效
    if (code === 9000 || code === 1008) {
      store.dispatch("GET_WX_REDIRECT");
    }
    // console.log(response.data);
    return response.data;
  },
  function(error) {
    store.dispatch("GET_WX_REDIRECT");
    // 对响应错误做点什么，比如400、401、402等等
    if (error && error.response) {
      console.log(error.response);
    }
    return Promise.reject(error);
  }
);

// 定义对外Get、Post、File请求
export default {
  get(url, param = {}, headers = {}) {
    return Axios.get(url, {
      params: param,
      headers
    });
  },
  post(url, param = null, headers = {}) {
    return Axios.post(url, param, {
      // return Axios.post(url, qs.stringify(param), {
      headers
    });
  },
  put(url, param = null, headers = {}) {
    return Axios.put(url, param, {
      headers
    });
  },
  file(url, param = null, headers = {}) {
    return Axios.post(url, param, {
      headers: {
        "Content-Type": "multipart/form-data"
      },
    });
  },
  delete(url, param = null, headers = {}) {
    return Axios.delete(url, {
      param,
      headers: Object.assign(
        {
          "Content-Type": "multipart/form-data"
        },
        headers
      )
    });
  }
};
