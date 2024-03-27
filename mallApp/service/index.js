const TIME_OUT = 60000;
const BASE_URL = "http://localhost:3333/api";

class Request1 {
  request(url, method, data) {
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
        // 学到新东西(跨域用到，不然后端老生成新的cookie就对应不上 session) 这个会自动生成cookie
        withCredentials: true,
        success(res) {
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
  get(url, params = {}) {
    return this.request(url, "GET", params);
  }
  post(url, data) {
    return this.request(url, "POST", data);
  }
  delete(id) {
    return this.request("/" + id, "DELETE", {});
  }
  patch(url, data) {
    return this.request(url, "PATCH", data);
  }
}

export default new Request1();
