"use strict";
const common_vendor = require("../common/vendor.js");
const TIME_OUT = 6e4;
const BASE_URL = "http://192.168.31.83:3333/api";
class Request1 {
  request(url, method, data) {
    return new Promise((resolve, reject) => {
      common_vendor.index.request({
        url: BASE_URL + url,
        method: method || "GET",
        timeout: TIME_OUT,
        data,
        success(res) {
          resolve(res.data);
        },
        fail(err) {
          reject(err);
        }
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
}
const Request1$1 = new Request1();
exports.Request1 = Request1$1;
