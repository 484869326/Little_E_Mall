import { defineStore } from "pinia";
import { getSearchList } from "@/service/search";

export const useSearchStore = defineStore("search", {
  state: () => {
    return {
      searchList: [] as any[],
    };
  },
  // 修改state里面的数据
  actions: {
    //详情
    async fetchSearchList(searchValue: any, page: any) {
      const res = (await getSearchList(searchValue, page)) as any;
      this.searchList = res.data || [];
    },
  },
});
