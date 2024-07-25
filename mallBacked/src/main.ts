import { createApp } from "vue";

import "normalize.css";
import "@/assets/sass/index.sass";
import ElementPlus from "element-plus";
//暗黑模式
import "element-plus/theme-chalk/dark/css-vars.css";
import App from "./App.vue";
import router from "./router";
import directives from "@/setup/directives";
import pinia from "@/setup/pinia";

const app = createApp(App);

//状态管理工具得在路由前面
app.use(pinia);
app.use(router);
app.use(ElementPlus);
app.use(directives);

app.mount("#app");
