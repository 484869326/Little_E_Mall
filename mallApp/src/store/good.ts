import { defineStore } from "pinia";
import {
  getGoodDetail,
  addShop,
  buy,
  getBuyGoodList,
  getOrderList,
  received,
} from "@/service/good";

export const useGoodStore = defineStore("good", {
  state: () => {
    return {
      detail: {} as IRequest.IGood,
      goodList: [] as IRequest.IGood[],
      orderList: [] as IRequest.IOrder[],
      orderPage: 1,
    };
  },
  getters: {
    isEmpty(): boolean {
      return JSON.stringify(this.detail) === "{}";
    },
    totalPrice(): number {
      return this.goodList.reduce((pre: number, cur: any) => {
        return pre + Number(cur.price[cur.type]) * Number(cur.num);
      }, 0);
    },
    totalNum(): number {
      return this.goodList.reduce((pre: number, cur: any) => pre + Number(cur.num), 0);
    },
    dataId() {
      const shoppingId: any[] = [];
      const goodId: any[] = [];
      const color: any[] = [];
      const type: any[] = [];
      const num: any[] = [];
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
    async fetchGoodDetail(goodId: string) {
      const { data } = await getGoodDetail(goodId);
      if (!data) return;
      data.price = (data.price as string).split(",");
      data.color = (data.color as string).split(",");
      data.type = (data.type as string).split(",");
      data.isBuy = true;
      this.detail = data || {};
    },
    async fetchAddShop(data: IRequest.IAddShop) {
      const res = await addShop(data);
      return res;
    },
    async fetchGoodList(value: any) {
      const { data } = (await getBuyGoodList(value)) as any;
      this.goodList = data.map((item: any) => {
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
    async fetchBuy(data: IRequest.IBuy) {
      const { msg } = await buy(data);
      return msg;
    },
    async fetchgetOrderList(data: IRequest.IOrderManage) {
      const { data: value } = await getOrderList(data);
      if (!value) return;
      if (this.orderPage === 1) {
        this.orderList.length = 0;
      }
      this.orderList.push(
        ...value.map((item: any) => {
          item.type = item.type.split(",");
          item.color = item.color.split(",");
          item.totalNum = item.num.split(",").reduce((pre: number, cur: any) => {
            return pre + Number(cur);
          }, 0);
          return item;
        })
      );
    },
    async fetchReceived(data: IRequest.IReceive) {
      await received(data);
    },
  },
});
