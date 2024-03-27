import { defineStore } from "pinia";

import type {
  IAdminSexCount,
  IOrderCount,
  ICategoryGoodsCount,
  IMonthPriceCount
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
      adminSexCount: [] as IAdminSexCount[],
      orderCount: [] as IOrderCount[],
      categoryGoodsCount: [] as ICategoryGoodsCount[],
      monthPriceCount: [] as IMonthPriceCount[]
    };
  },
  actions: {
    async getStatisticsDataAction() {
      this.adminSexCount = (await getAdminSexCount()).data;
      this.orderCount = (await getOrderCount()).data;
      this.categoryGoodsCount = (await getCategoryGoodsCount()).data;
      this.monthPriceCount = (await getMonthPriceCount()).data;
    }
  }
});
