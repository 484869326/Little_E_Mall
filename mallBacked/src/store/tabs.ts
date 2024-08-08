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
      // 最多4个标签
      if (this.tabsList.length === 4) {
        this.tabsList.shift();
      }
      this.tabsList.push(data);
      this.currentPath = data.path;
    },
    removeTab(path: string) {
      this.tabsList = this.tabsList.filter((item) => item.path !== path);
      this.currentPath = this.tabsList[this.tabsList.length - 1]?.path;
    }
  }
});
