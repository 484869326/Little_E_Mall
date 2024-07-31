import axios from "axios";
import type { AxiosError, AxiosInstance } from "axios";
import type { RequestInterceptors, RequestConfig } from "./type";

class Request {
  instance: AxiosInstance;
  requestInterceptors?: RequestInterceptors;
  constructor(config: RequestConfig) {
    this.instance = axios.create(config);
    this.requestInterceptors = config.requestInterceptors;

    //全部拦截
    this.instance.interceptors.request.use(
      (config) => {
        // console.log("全部拦截器request");
        return config;
      },
      (err) => {
        return err;
      }
    );
    this.instance.interceptors.response.use(
      (res) => {
        // console.log("全部相应拦截器");
        return res;
      },
      (err: AxiosError) => {
        const response = err.response;
        if (response?.status === 500) {
          ElMessage.error("服务器出错，请稍等片刻");
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
      this.instance
        .request<any, T>(config)
        .then((res: any) => {
          if (config.requestInterceptors?.responseInterceptor) {
            resolve(config.requestInterceptors.responseInterceptor(res));
          }
          resolve(res.data);
        })
        .catch((err) => {
          reject(err);
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
}

export default Request;
