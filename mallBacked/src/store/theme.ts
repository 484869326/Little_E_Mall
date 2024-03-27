import { defineStore } from "pinia";

export const useThemeStore = defineStore("theme", {
  state: () => {
    return {
      themeAppearance: "light"
    };
  },
  getters: {
    isDark(): boolean {
      return this.themeAppearance === "dark";
    }
  },
  actions: {
    toggleThemes(value: boolean) {
      this.themeAppearance = value ? "dark" : "light";
      document.documentElement.dataset.theme = this.themeAppearance;
    }
  }
});
