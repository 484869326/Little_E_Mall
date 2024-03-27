import { Module } from 'vuex';
import { IRootState } from '../type';
import { IStatisticsState } from './type';
import {
  getCategoryGoodsCount,
  getAdminSexCount,
  getOrderCount,
  getMonthPriceCount
} from '@/service/main/statistics';
const statisticsModule: Module<IStatisticsState, IRootState> = {
  namespaced: true,
  state() {
    return {
      adminSexCount: [],
      orderCount: [],
      categoryGoodsCount: [],
      monthPriceCount: []
    };
  },
  mutations: {
    chanceAdminSexCount(state, adminSexCount) {
      state.adminSexCount = adminSexCount;
    },
    chanceOrderCount(state, orderCount) {
      state.orderCount = orderCount;
    },
    chanceCategoryGoodsCount(state, categoryGoodsCount) {
      state.categoryGoodsCount = categoryGoodsCount;
    },
    chanceMonthPriceCount(state, monthPriceCount) {
      state.monthPriceCount = monthPriceCount;
    }
  },
  actions: {
    async getStatisticsDataAction({ commit }) {
      const adminCountResult = await getAdminSexCount();
      commit('chanceAdminSexCount', adminCountResult.data);
      const orderCountResult = await getOrderCount();
      commit('chanceOrderCount', orderCountResult.data);
      const categoryCountResult = await getCategoryGoodsCount();
      commit('chanceCategoryGoodsCount', categoryCountResult.data);
      const priceCountResult = await getMonthPriceCount();
      commit('chanceMonthPriceCount', priceCountResult.data);
    }
  }
};
export default statisticsModule;
