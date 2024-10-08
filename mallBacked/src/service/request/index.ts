import axios from "axios";
import type { AxiosError, AxiosInstance } from "axios";
import type { RequestInterceptors, RequestConfig } from "./type";

const DEFAULT_LOADING = true;
let loadingInstance: any = null;
let timer: any = null;

class Request {
  instance: AxiosInstance;
  requestInterceptors?: RequestInterceptors;
  requestMap: Map<any, { resolve: any[]; reject: any[]; isPending: boolean }>;
  constructor(config: RequestConfig) {
    this.instance = axios.create(config);
    this.requestInterceptors = config.requestInterceptors;
    this.requestMap = new Map();
    //全部拦截
    this.instance.interceptors.request.use(
      (config) => {
        this.startLoading((config as any)?.showLoading ?? DEFAULT_LOADING);
        // console.log("全部拦截器request");
        return config;
      },
      (err) => {
        return err;
      }
    );
    this.instance.interceptors.response.use(
      (res) => {
        this.endLoading();
        // console.log("全部相应拦截器");
        return res;
      },
      (err: AxiosError) => {
        this.endLoading();
        const response = err.response;
        if (response?.status === 500) {
          ElMessage.error("服务器出错，请稍等片刻");
        } else if (response?.status === 400) {
          ElMessage.error((response.data as any)["msg"]);
        } else if (err.code === "ERR_NETWORK") {
          ElMessage.error("网络错误");
        } else if (err.code === "ECONNABORTED") {
          ElMessage.error("连接超时，请稍等片刻");
        }
        return Promise.reject(err);
      }
    );
    //局部拦截
    this.instance.interceptors.request.use(
      this.requestInterceptors?.requestInterceptor,
      this.requestInterceptors?.requestInterceptorCatch
    );
    this.instance.interceptors.response.use(
      this.requestInterceptors?.responseInterceptor,
      this.requestInterceptors?.responseInterceptorCatch
    );
  }
  request<T>(config: RequestConfig<T>): Promise<T> {
    return new Promise((resolve, reject) => {
      //单独拦截
      if (config.requestInterceptors?.requestInterceptor) {
        config = config.requestInterceptors.requestInterceptor(config as any);
      }
      const key = JSON.stringify(config);
      if (!this.requestMap.has(key)) {
        this.requestMap.set(key, {
          resolve: [],
          reject: [],
          isPending: false
        });
      }
      const state = this.requestMap.get(key);
      if (!state) return;
      state.resolve.push(resolve);
      state.reject.push(reject);
      if (state.isPending) return;
      state.isPending = true;
      this.instance
        .request<any, T>(config)
        .then((res: any) => {
          //resolve(res.data);
          state.resolve.forEach((resolve) => {
            if (config.requestInterceptors?.responseInterceptor) {
              resolve(config.requestInterceptors.responseInterceptor(res));
              return;
            }
            resolve(res.data);
          });
        })
        .catch((err) => {
          //reject(err);
          state.reject.forEach((reject) => reject(err));
        })
        .finally(() => {
          this.requestMap.delete(key);
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
  startLoading(showLoading: boolean) {
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
    if (showLoading && !loadingInstance) {
      loadingInstance = ElLoading.service({
        lock: true,
        text: "加载中....",
        background: "rgba(0, 0, 0, 0.7)",
        fullscreen: false
      });
    }
  }
  endLoading() {
    if (loadingInstance) {
      timer = setTimeout(() => {
        loadingInstance && loadingInstance.close();
        loadingInstance = null;
        timer = null;
      }, 300);
    }
  }
}

export default Request;
