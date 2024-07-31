import type {
  InternalAxiosRequestConfig,
  AxiosResponse,
  AxiosRequestConfig,
  RawAxiosResponseHeaders
} from "axios";

interface RequestInterceptors<T = AxiosResponse> {
  requestInterceptor?: (config: InternalAxiosRequestConfig) => InternalAxiosRequestConfig;
  requestInterceptorCatch?: (err: any) => any;
  responseInterceptor?: (res: T) => T;
  responseInterceptorCatch?: (err: any) => any;
}

interface RequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  requestInterceptors?: RequestInterceptors<T>;
  showLoading?: boolean;
  headers?: RawAxiosResponseHeaders;
}

export type { RequestInterceptors, RequestConfig };
