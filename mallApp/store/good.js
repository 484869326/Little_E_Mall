import { defineStore } from "pinia";
import {
  getGoodDetail,
  addShop,
  buy,
  getBuyGoodList,
  getOrderList,
  received,
} from "@/service/good.js";

export const useGoodStore = defineStore("good", {
  state: () => {
    return {
      detail: {},
      goodList: [],
      orderList: [],
    };
  },
  getters: {
    isEmpty() {
      return JSON.stringify(this.detail) === "{}";
    },
    totalPrice() {
      return this.goodList.reduce((pre, cur) => {
        return pre + Number(cur.price[cur.type]) * Number(cur.num);
      }, 0);
    },
    totalNum() {
      return this.goodList.reduce((p, c) => p + Number(c.num), 0);
    },
    dataId() {
      let shoppingId = [];
      let goodId = [];
      let color = [];
      let type = [];
      let num = [];
      this.goodList.forEach((item) => {
        shoppingId.push(item.shoppingId);
        goodId.push(item.goodId);
        color.push(item.color);
        type.push(item.type);
        num.push(item.num);
      });
      return {
        shoppingId: shoppingId.join(","),
        goodId: goodId.join(","),
        color: color.join(","),
        type: type.join(","),
        num: num.join(","),
      };
    },
  },
  // 修改state里面的数据
  actions: {
    //详情
    async fetchGoodDetail(goodId) {
      const { data } = await getGoodDetail(goodId);
      data.price = data.price.split(",");
      data.color = data.color.split(",");
      data.type = data.type.split(",");
      data.isBuy = true;
      this.detail = data || {};
    },
    async fetchAddShop(data) {
      const res = await addShop(data);
      return res;
    },
    async fetchGoodList(value) {
      const { data } = await getBuyGoodList(value);
      this.goodList = data.map((item) => {
        item.good.goodColor = item.good.color;
        item.good.goodType = item.good.type;
        delete item.good.color;
        delete item.good.type;
        Object.assign(item, item.good);
        delete item.good;
        item.price = item.price.split(",");
        item.goodColor = item.goodColor.split(",");
        item.goodType = item.goodType.split(",");
        return item;
      });
    },
    async fetchBuy(data) {
      const { msg } = await buy(data);
      return msg;
    },
    async fetchgetOrderList(data) {
      const { data: value } = await getOrderList(data);
      this.orderList.length = 0;
      this.orderList.push(
        ...value.map((item) => {
          item.type = item.type.split(",");
          item.color = item.color.split(",");
          item.totalNum = item.num.split(",").reduce((pre, cur) => {
            return pre + Number(cur);
          }, 0);
          return item;
        })
      );
    },
    async fetchReceived(data) {
      await received(data);
    },
  },
});
