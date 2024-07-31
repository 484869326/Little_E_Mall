import { useLoginStore } from "@/store/login";
import Request from "./request";
import { BASE_URL, TIME_OUT } from "./request/config";
import router from "@/router";
import { isRefreshRequest, refreshToken } from "@/utils/refreshToken";

const Request1 = new Request({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  headers: {
    "Content-Type": "application/json"
  },
  requestInterceptors: {
    requestInterceptor: (config) => {
      const loginStore = useLoginStore();
      config.headers.Authorization = loginStore.token;
      // console.log('局部拦截');
      return config;
    },
    requestInterceptorCatch: (err) => {
      return Promise.reject(err);
    },
    responseInterceptor: (res) => {
      // console.log("局部拦截器");
      const loginStore = useLoginStore();
      if (res.headers.authorization) {
        loginStore.token = res.headers.authorization;
      }
      if (res.headers.refreshtoken) {
        loginStore.refreshToken = res.headers.refreshtoken;
      }
      //拦截器不要去做 res.data操作（不然token无感刷新会出问题）
      return res;
    },
    responseInterceptorCatch: async (err) => {
      const loginStore = useLoginStore();
      if (err.response.data.code === 401 && !isRefreshRequest(err.config)) {
        const res = await refreshToken();
        if (res) {
          err.config.headers.Authorization = `Bearer ${loginStore.token}`;
          const resp: any = Request1.request(err.config);
          return resp;
        }
        router.push("/login");
        ElMessage.error("登录状态失效，请重新登录");
      }
      return Promise.reject(err);
    }
  }
});
export { Request1 };
