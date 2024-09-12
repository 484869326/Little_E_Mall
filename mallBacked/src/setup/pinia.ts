import { createPinia } from "pinia";
import { useLoginStore } from "@/store/login";
import persistPlugin from "@/utils/persistPlugin";
import type { App } from "vue";

const pinia = createPinia();

export default {
  async install(app: App) {
    pinia.use(persistPlugin);
    app.use(pinia);
    //刷新才能保持页面不跳转
    const loginStore = useLoginStore();
    if (loginStore.refreshToken) {
      await loginStore.getAllRoute();
    }
  }
};
