import localCache from "@/utils/cache";
import type { PiniaPluginContext } from "pinia";

const KEY_PREFIX = "PINIA_STATE_";

export default function (context: PiniaPluginContext) {
  const { store } = context;
  //先持久化 主题状态
  if (store.$id !== "theme" && store.$id !== "login") return;
  const id = store.$id.toUpperCase();
  window.addEventListener("beforeunload", () => {
    localCache.setCache(KEY_PREFIX + id, store.$state);
  });
  try {
    const state = localCache.getCache(KEY_PREFIX + id);
    if (state) {
      store.$patch(state);
    }
  } catch {
    console.log("存储的数据有误");
  }
}
