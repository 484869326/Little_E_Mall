import axios from "axios";
import type { AxiosInstance, InternalAxiosRequestConfig } from "axios";
import type { RequestInterceptors, RequestConfig } from "./type";

const DEFAULT_LOADING = true;
let loadingInstance: any = null;
let timer: any = null;

class Request {
  instance: AxiosInstance;
  requestInterceptors?: RequestInterceptors;
  showLoading: boolean;
  constructor(config: RequestConfig) {
    this.instance = axios.create(config);
    this.showLoading = config.showLoading ?? DEFAULT_LOADING;
    this.requestInterceptors = config.requestInterceptors;
    //局部拦截
    this.instance.interceptors.request.use(
      this.requestInterceptors?.requestInterceptor,
      this.requestInterceptors?.requestInterceptorCatch
    );
    this.instance.interceptors.response.use(
      this.requestInterceptors?.responseInterceptor,
      this.requestInterceptors?.responseInterceptorCatch
    );
    //全部拦截
    this.instance.interceptors.request.use(
      (config) => {
        // console.log('全部');
        this.startLoading();
        return config;
      },
      (err) => {
        return err;
      }
    );
    this.instance.interceptors.response.use(
      (res) => {
        this.endLoading();
        return res.data;
      },
      (err) => {
        this.endLoading();
        return err;
      }
    );
  }
  request<T>(config: RequestConfig<T>): Promise<T> {
    return new Promise((resolve, reject) => {
      //解决版本更新 兼容问题
      const requestInterceptorsConfig: InternalAxiosRequestConfig = Object.assign(
        {},
        { ...config },
        {
          headers:
            config.headers ??
            new axios.AxiosHeaders({
              "Content-Type": "application/json"
            })
        }
      );
      //单独拦截
      if (config.requestInterceptors?.requestInterceptor) {
        config = config.requestInterceptors.requestInterceptor(requestInterceptorsConfig);
      }
      if (config.showLoading === false) {
        this.showLoading = config.showLoading;
      }
      this.instance
        .request<any, T>(config)
        .then((res) => {
          if (config.requestInterceptors?.responseInterceptor) {
            res = config.requestInterceptors.responseInterceptor(res);
          }
          resolve(res);
          this.showLoading = DEFAULT_LOADING;
        })
        .catch((err) => {
          reject(err);
          this.showLoading = DEFAULT_LOADING;
          return err;
        });
    });
  }
  get<T>(config: RequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: "GET" });
  }
  post<T>(config: RequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: "POST" });
  }
  delete<T>(config: RequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: "DELETE" });
  }
  patch<T>(config: RequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: "PATCH" });
  }
  startLoading() {
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
    if (this.showLoading && !loadingInstance) {
      loadingInstance = ElLoading.service({
        lock: true,
        text: "加载中....",
        background: "rgba(0, 0, 0, 0.7)",
        fullscreen: false
      });
    }
  }
  endLoading() {
    if (this.showLoading && loadingInstance) {
      timer = setTimeout(() => {
        loadingInstance && loadingInstance.close();
        loadingInstance = null;
        timer = null;
      }, 300);
    }
  }
}

export default Request;
