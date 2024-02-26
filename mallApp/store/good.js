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
        return pre + Number(cur.price[cur.type]) * Number(cur.Num);
      }, 0);
    },
    totalNum() {
      return this.goodList.reduce((p, c) => p + Number(c.Num), 0);
    },
    dataId() {
      let shoppingid = [];
      let Goodid = [];
      let color = [];
      let type = [];
      let Num = [];
      this.goodList.forEach((item) => {
        shoppingid.push(item.shoppingid);
        Goodid.push(item.Goodid);
        color.push(item.color);
        type.push(item.type);
        Num.push(item.Num);
      });
      return {
        shoppingid: shoppingid.join(","),
        Goodid: Goodid.join(","),
        color: color.join(","),
        type: type.join(","),
        Num: Num.join(","),
      };
    },
  },
  // 修改state里面的数据
  actions: {
    //详情
    async fetchGoodDetail(Goodid) {
      const { data } = await getGoodDetail(Goodid);
      data.price = data.price.split(",");
      data.Color = data.Color.split(",");
      data.Type = data.Type.split(",");
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
        Object.assign(item, item.good);
        delete item.good;
        item.price = item.price.split(",");
        item.Color = item.Color.split(",");
        item.Type = item.Type.split(",");
        return item;
      });
    },
    async fetchBuy(data) {
      const { msg } = await buy(data);
      return msg;
    },
    async fetchgetOrderList(data) {
      const { data: value } = await getOrderList(data);
      this.orderList.push(
        ...value.map((item) => {
          item.type = item.type.split(",");
          item.color = item.color.split(",");
          item.totalNum = item.Num.split(",").reduce((pre, cur) => {
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
