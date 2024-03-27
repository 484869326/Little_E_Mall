import { defineStore } from "pinia";
import {
  getCheckAll,
  getShoppingList,
  changeShoppingNum,
  deleteShopping,
  changeChecked,
  changeCheckedAll,
  changeType,
} from "@/service/shopping.js";

export const useShoppingStore = defineStore("shopping", {
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
      total: 0,
    };
  },
  // 修改state里面的数据
  actions: {
    initShoppingStore() {
      this.shoppingList = [];
      this.isCheckAll = false;
      this.totalPrice = 0;
      this.totalCheckPrice = 0;
      this.totalCheck = 0;
      this.total = 0;
    },
    async fetchCheckAll(userId) {
      const res = await getCheckAll(userId);
      this.isCheckAll = res.data.isCheckAll;
      this.totalPrice = res.data.totalPrice;
      this.totalCheck = res.data.totalCheck;
      this.totalCheckPrice = res.data.totalCheckPrice;
      this.total = res.data.total;
    },
    //详情
    async fetchShoppingList(page, userId) {
      const res = await getShoppingList(page, userId);
      this.shoppingList.push(...res.data);
    },
    async fetchChangeShoppingNum(id, num) {
      const res = await changeShoppingNum(id, num);
      return res;
    },
    async fetchDeleteShopping(id) {
      const res = await deleteShopping(id);
      return res;
    },
    async fetchChangeChecked(id, isChecked, userId) {
      const res = await changeChecked(id, isChecked, userId);
      return res;
    },
    async fetchChangeAllChecked(id, isChecked) {
      const res = await changeCheckedAll(id, isChecked);
      return res;
    },
    async fetchChangeType(data) {
      const res = await changeType(data);
      return res;
    },
  },
});
