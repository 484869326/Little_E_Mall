import { defineStore } from "pinia";

export const useMediaStore = defineStore("media", {
  state() {
    return {
      //折叠菜单
      collapse: false,
      //首页描述那里  2行变1行
      column: 2
    };
  },
  actions: {
    init() {
      const innerWidth = window.innerWidth;
      if (innerWidth < 768) {
        this.collapse = true;
        this.column = 1;
      } else {
        this.collapse = false;
        this.column = 2;
      }
    },
    onResize() {
      window.addEventListener("resize", this.init);
    }
  }
});
