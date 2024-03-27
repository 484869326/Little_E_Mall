import Request from './request';
import { BASE_URL, TIME_OUT } from './request/config';

const Request1 = new Request({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  requestInterceptors: {
    requestInterceptor: (config) => {
      // console.log('局部拦截');
      return config;
    },
    requestInterceptorCatch: (err) => {
      return err;
    },
    responseInterceptor: (res) => {
      return res;
    },
    responseInterceptorCatch: (err) => {
      return err;
    }
  }
});
export { Request1 };
