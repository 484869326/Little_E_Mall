import localCache from "@/utils/cache";
import type { PiniaPluginContext } from "pinia";

const KEY_PREFIX = "PINIA_STATE_";

export default function (context: PiniaPluginContext) {
  const { store } = context;
  if (store.$id !== "theme" && store.$id !== "login" && store.$id !== "tabs") return;
  const id = store.$id.toUpperCase();
  // 从本地缓存中恢复状态
  try {
    const state = localCache.getCache(KEY_PREFIX + id);
    if (state) {
      store.$patch(state);
    }
  } catch {
    console.error("存储的数据有误");
  }
  // 在 Pinia 状态变化时更新本地缓存
  store.$subscribe(() => {
    try {
      localCache.setCache(KEY_PREFIX + id, store.$state);
    } catch (error) {
      console.error("存储数据时出错:", error);
    }
  });
  //跨标签页更新pinia
  window.addEventListener("storage", function (event) {
    if (event.key === KEY_PREFIX + id) {
      try {
        const state = localCache.getCache(KEY_PREFIX + id);
        if (state) {
          if (id === "LOGIN" && !state.token) {
            return;
          }
          store.$patch(state);
        }
      } catch {
        console.error("存储的数据有误");
      }
    }
  });
}
