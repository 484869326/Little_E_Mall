import { Request1 } from "@/service";
import { useLoginStore } from "@/store/login";
import type { InternalAxiosRequestConfig } from "axios";

let promise: any;

export function refreshToken() {
  if (promise) {
    return promise;
  }
  promise = new Promise(async (resolve) => {
    const loginStore = useLoginStore();
    loginStore.token = `Bearer ${loginStore.refreshToken}`;
    try {
      const res = await Request1.post<{
        code: number;
      }>({
        url: "/admin/refresh",
        __isRefreshToken: true
      } as any);
      resolve(res.code === 200);
    } catch (error) {
      resolve(false);
    }
  });
  promise.finally(() => {
    promise = null;
  });
  return promise;
}

export function isRefreshRequest(
  config: InternalAxiosRequestConfig & {
    __isRefreshToken?: boolean;
  }
) {
  return config.__isRefreshToken;
}
