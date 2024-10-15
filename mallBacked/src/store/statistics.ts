import { defineStore } from "pinia";

import type {
  IAdminSexCount,
  IOrderCount,
  ICategoryGoodsCount,
  IMonthPriceCount,
  IPie,
  ILine
} from "@/types/statistics";
import {
  getCategoryGoodsCount,
  getAdminSexCount,
  getOrderCount,
  getMonthPriceCount
} from "@/service/statistics";

export const useStatisticsStore = defineStore("statistics", {
  state: () => {
    return {
      adminSexCount: [] as IPie[],
      orderCount: {} as ILine,
      categoryGoodsCount: {} as ILine,
      monthPriceCount: {} as ILine
    };
  },
  actions: {
    async getAdminSexCount() {
      let adminSexCount: IAdminSexCount[] = [];
      adminSexCount = (await getAdminSexCount()).data;
      this.adminSexCount = adminSexCount.map((item: any) => {
        return { name: item.gender ? "女" : "男", value: item.count };
      });
    },
    async getOrderCount() {
      let orderCount: IOrderCount[] = [];
      orderCount = (await getOrderCount()).data;
      this.orderCount = { xLabels: [], values: [] };
      for (const item of orderCount) {
        this.orderCount.xLabels.push(item.date);
        this.orderCount.values.push(item.count);
      }
    },
    async getCategoryGoodsCount() {
      let categoryGoodsCount: ICategoryGoodsCount[] = [];
      categoryGoodsCount = (await getCategoryGoodsCount()).data;
      this.categoryGoodsCount = { xLabels: [], values: [] };
      for (const item of categoryGoodsCount) {
        this.categoryGoodsCount.xLabels.push(item.cName);
        this.categoryGoodsCount.values.push(item.count);
      }
    },
    async getMonthPriceCount() {
      let monthPriceCount: IMonthPriceCount[] = [];
      monthPriceCount = (await getMonthPriceCount()).data;
      this.monthPriceCount = { xLabels: [], values: [] };
      for (const item of monthPriceCount) {
        this.monthPriceCount.xLabels.push(item.month);
        this.monthPriceCount.values.push(item.price);
      }
    }
  }
});
