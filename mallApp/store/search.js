import { defineStore } from "pinia";
import { getSearchList } from "@/service/search.js";

export const useSearchStore = defineStore("search", {
  state: () => {
    return {
      searchList: [],
    };
  },
  // 修改state里面的数据
  actions: {
    //详情
    async fetchSearchList(searchValue, page) {
      const res = await getSearchList(searchValue, page);
      this.searchList = res.data || [];
    },
  },
});
