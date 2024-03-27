import type { AxiosRequestConfig, AxiosResponse } from 'axios';

interface RequestInterceptors<T = AxiosResponse> {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig;
  requestInterceptorCatch?: (err: any) => any;
  responseInterceptor?: (res: T) => T;
  responseInterceptorCatch?: (err: any) => any;
}

interface RequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  requestInterceptors?: RequestInterceptors<T>;
  showLoading?: boolean;
}

export { RequestInterceptors, RequestConfig };
