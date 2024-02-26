"use strict";
const common_vendor = require("../common/vendor.js");
const service_shopping = require("../service/shopping.js");
const useShoppingStore = common_vendor.defineStore("shopping", {
  state: () => {
    return {
      // 购物车列表
      shoppingList: [],
      // 是否全部选择
      isCheckAll: false,
      // 总价格
      totalPrice: 0,
      // 被选中的总价格
      totalCheckPrice: 0,
      // 多少个被选择
      totalCheck: 0,
      // 总共多少个购物车
      total: 0
    };
  },
  // 修改state里面的数据
  actions: {
    async fetchCheckAll() {
      const res = await service_shopping.getCheckAll();
      this.isCheckAll = res.data.isCheckAll;
      this.totalPrice = res.data.totalPrice;
      this.totalCheck = res.data.totalCheck;
      this.totalCheckPrice = res.data.totalCheckPrice;
      this.total = res.data.total;
    },
    //详情
    async fetchShoppingList(page) {
      const res = await service_shopping.getShoppingList(page);
      this.shoppingList = res.data || [];
    },
    async fetchChangeShoppingNum(id, num) {
      const res = await service_shopping.changeShoppingNum(id, num);
      return res;
    },
    async fetchDeleteShopping(id) {
      const res = await service_shopping.deleteShopping(id);
      return res;
    },
    async fetchChangeChecked(id, isChecked) {
      const res = await service_shopping.changeChecked(id, isChecked);
      return res;
    },
    async fetchChangeAllChecked(isChecked) {
      const res = await service_shopping.changeCheckedAll(isChecked);
      return res;
    }
  }
});
exports.useShoppingStore = useShoppingStore;
