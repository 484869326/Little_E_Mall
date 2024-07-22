import App from "@/App.vue";
import "@/uni.scss";
import * as Pinia from "pinia";
import { createSSRApp } from "vue";
// #ifdef H5
// h5图片懒加载
import lazyPlugin from "vue3-lazy";
import imageLoading from "@/static/image_loading.jpg";
// #endif
export function createApp() {
  const app = createSSRApp(App);
  app.use(Pinia.createPinia());
  // #ifdef H5
  app.use(lazyPlugin, {
    loading: imageLoading,
  });
  // #endif
  return {
    app,
    Pinia,
  };
}
