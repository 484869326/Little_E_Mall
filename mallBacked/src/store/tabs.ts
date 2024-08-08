import type { IMenu } from "@/types/login";
import { defineStore } from "pinia";

export const useTabsStore = defineStore("tabs", {
  state: () => {
    return {
      currentPath: "/",
      tabsList: [] as IMenu[]
    };
  },
  actions: {
    addTabs(data: IMenu) {
      const item = this.tabsList.find((item) => item.id === data.id);
      if (item) {
        this.currentPath = item.path;
        return;
      }
      // 最多6个标签
      if (this.tabsList.length === 3) {
        this.tabsList.shift();
      }
      this.tabsList.push(data);
      this.currentPath = data.path;
    },
    removeTab(path: string) {
      const index = this.tabsList.findIndex((item) => item.path === path);
      this.tabsList.splice(index, 1);
      const data = this.tabsList[this.tabsList.length - 1];
      this.currentPath = data.path;
    }
  }
});
