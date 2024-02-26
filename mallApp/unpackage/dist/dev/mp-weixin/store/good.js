"use strict";
const common_vendor = require("../common/vendor.js");
const service_good = require("../service/good.js");
const useGoodStore = common_vendor.defineStore("good", {
  state: () => {
    return {
      detail: {}
    };
  },
  // 修改state里面的数据
  actions: {
    //详情
    async fetchGoodDetail(Goodid) {
      const res = await service_good.getGoodDetail(Goodid);
      this.detail = res.data || {};
    }
  }
});
exports.useGoodStore = useGoodStore;
