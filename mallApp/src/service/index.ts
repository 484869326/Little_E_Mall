const TIME_OUT = 60000;
let BASE_URL: any;
// #ifdef H5
BASE_URL = import.meta.env.VITE_API_URL;
// #endif
// #ifndef H5
if (import.meta.env.MODE === "development") {
  BASE_URL = import.meta.env.VITE_API_WXURL;
} else {
  BASE_URL = import.meta.env.VITE_API_URL;
}
// #endif

class Request1 {
  request<T>(url: string, method: any, data: any): Promise<IRequest.IRes<T>> {
    return new Promise((resolve, reject) => {
      uni.showLoading({
        title: "加载中",
        mask: true,
      });
      uni.request({
        url: BASE_URL + url,
        method: method || "GET",
        timeout: TIME_OUT,
        data: data,
        // #ifdef MP-WEIXIN
        header: {
          Cookie: uni.getStorageSync("cookies"),
        },
        // #endif
        // 学到新东西(跨域用到，不然后端老生成新的cookie就对应不上 session) 这个会自动生成cookie
        withCredentials: true,
        success(res: any) {
          // #ifdef MP-WEIXIN
          if (res.cookies.length !== 0) {
            uni.setStorageSync("cookies", res.cookies[0]);
          }
          // #endif
          resolve(res.data);
        },
        fail(err) {
          reject(err);
        },
        complete() {
          uni.hideLoading();
        },
      });
    });
  }
  get<T>(url: string, params = {}) {
    return this.request<T>(url, "GET", params);
  }
  post<T>(url: string, data: any) {
    return this.request<T>(url, "POST", data);
  }
  delete<T>(id: string) {
    return this.request<T>("/" + id, "DELETE", {});
  }
  patch<T>(url: string, data: any) {
    return this.request(url, "PATCH", data);
  }
}

export default new Request1();
