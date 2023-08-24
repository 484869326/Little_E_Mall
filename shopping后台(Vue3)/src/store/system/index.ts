import { Module } from 'vuex';
import { IRootState } from '../type';
import { ISystemState } from './type';
import {
  addPageData,
  deletePageData,
  editPageData,
  getPageListData
} from '@/service/main/system';
import { titleToUpperCase } from '@/utils/title-case';

const systemModule: Module<ISystemState, IRootState> = {
  namespaced: true,
  state() {
    return {
      adminList: [],
      adminListCount: 0,
      userList: [],
      userListCount: 0,
      goodList: [],
      goodListCount: 0,
      menuList: [],
      orderList: [],
      orderListCount: 0,
      categoryList: [],
      categoryListCount: 0
    };
  },
  getters: {
    pageListData(state) {
      return (pageName: string) => {
        return (state as any)[`${pageName}List`];
      };
    },
    pageListCount(state) {
      return (pageName: string) => {
        return (state as any)[`${pageName}ListCount`];
      };
    }
  },
  mutations: {
    changeAdminList(state, adminList: any[]) {
      state.adminList = adminList;
    },
    changeAdminListCount(state, adminListCount: number) {
      state.adminListCount = adminListCount;
    },
    changeUserList(state, userList: any[]) {
      state.userList = userList;
    },
    changeUserListCount(state, userListCount: number) {
      state.userListCount = userListCount;
    },
    changeGoodList(state, goodList: any[]) {
      state.goodList = goodList;
    },
    changeGoodListCount(state, goodListCount: number) {
      state.goodListCount = goodListCount;
    },
    changeOrderList(state, orderList: any[]) {
      state.orderList = orderList;
    },
    changeOrderListCount(state, orderListCount: number) {
      state.orderListCount = orderListCount;
    },
    changeCategoryList(state, categoryList: any[]) {
      state.categoryList = categoryList;
    },
    changeCategoryListCount(state, categoryListCount: number) {
      state.categoryListCount = categoryListCount;
    },
    changeMenuList(state, menuList: any[]) {
      state.menuList = menuList;
    }
  },
  actions: {
    async getPageListAction({ commit }, payload: any) {
      const pageName = payload.pageName;
      const queryInfo = payload.queryInfo;
      const url = `${pageName}/likeSelect`;
      const res = await getPageListData(url, queryInfo);
      const data = res.data;
      const count = res?.count;
      commit(`change${titleToUpperCase(pageName)}List`, data);
      if (count) {
        commit(`change${titleToUpperCase(pageName)}ListCount`, count);
      }
    },
    async deletePageDataAction({ dispatch }, payload: any) {
      const { pageName, id } = payload;
      const pageUrl = `/${pageName}/${id}`;
      const res = await deletePageData(pageUrl);
      if (res.code) {
        throw new Error('删除失败');
      }
      dispatch('getPageListAction', {
        pageName,
        queryInfo: { page: 0, limit: 10 }
      });
      return res;
    },
    async addPageDataAction({ dispatch }, payload: any) {
      const { pageName, data } = payload;
      const pageUrl = `/${pageName}/Insert`;
      const res = await addPageData(pageUrl, data);
      if (res.code) {
        throw new Error('增加失败');
      }
      dispatch('getPageListAction', {
        pageName,
        queryInfo: { page: 0, limit: 10 }
      });
    },
    async editPageDataAction({ dispatch }, payload: any) {
      const { pageName, data, id } = payload;
      const pageUrl = `/${pageName}/${id}`;
      const res = await editPageData(pageUrl, data);
      if (res.code) {
        throw new Error('修改失败');
      }
      dispatch('getPageListAction', {
        pageName,
        queryInfo: { page: 0, limit: 10 }
      });
    }
  }
};
export default systemModule;
