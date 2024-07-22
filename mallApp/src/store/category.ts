import { defineStore } from "pinia";
import { getCategoryList } from "@/service/category";

export const useCategoryStore = defineStore("category", {
  state: () => {
    return {
      categoryList: [] as IRequest.ICategory[],
      subCategory: [] as IRequest.ICategory[],
    };
  },
  // 修改state里面的数据
  actions: {
    //详情
    async fetchCategoryList() {
      const res = await getCategoryList();
      this.categoryList = res.data || [];
      this.subCategory = this.categoryList.flatMap((item) => item.children ?? []);
    },
  },
});
