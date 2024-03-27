import { defineStore } from "pinia";
import { addPageData, deletePageData, editPageData, getPageListData } from "@/service/main";
import type { IUser, IMenu } from "@/types/login";
import type { IAdmin, IGood, IGoodCategory, ICategory, IOrder } from "@/types/main";

export const useMainStore = defineStore("main", {
  state: () => {
    return {
      adminList: [] as IAdmin[],
      adminListCount: 0,
      userList: [] as IUser[],
      userListCount: 0,
      goodList: [] as IGood[],
      goodListCount: 0,
      menuList: [] as IMenu[],
      orderList: [] as IOrder[],
      orderListCount: 0,
      categoryList: [] as ICategory[],
      categoryListCount: 0,
      entireCategory: [] as IGoodCategory[]
    };
  },
  getters: {
    getList(state) {
      return (pageName: string) => {
        return (state as any)[`${pageName}List`] ?? [];
      };
    },
    getListCount(state) {
      return (pageName: string) => {
        return (state as any)[`${pageName}ListCount`] ?? 0;
      };
    }
  },
  actions: {
    //查找商品需要的分类
    async getEntireCategory() {
      const res = await getPageListData("/good/selectCategory/2");
      this.entireCategory = res.data;
    },
    // 查找
    async getPageListAction(pageName: string, queryInfo: any) {
      const url = `${pageName}/likeSelect`;
      const res = await getPageListData(url, queryInfo);
      (this as any)[`${pageName}List`] = res.data;
      (this as any)[`${pageName}ListCount`] = res?.count ?? 0;
    },
    //修改
    async editPageDataAction(pageName: string, data: any, id: string) {
      const url = `/${pageName}/${id}`;
      await editPageData(url, data);
    },
    // 增加
    async addPageDataAction(pageName: string, data: any) {
      const url = `/${pageName}/Insert`;
      await addPageData(url, data);
    },
    // 删除
    async deletePageDataAction(pageName: string, id: string) {
      const url = `/${pageName}/${id}`;
      await deletePageData(url);
    }
  }
});
