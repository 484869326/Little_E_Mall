import { createApp } from 'vue';
import store from './store';
import App from './App.vue';
import router from './router';
import { setupStore } from './store';
import 'normalize.css';
import './assets/css/index.less';
import { globalRegister } from './global';
//谷歌警告  Added non-passive event listener
import 'default-passive-events';
import 'element-plus/dist/index.css';
const app = createApp(App);
app.use(globalRegister);
app.use(store);
setupStore();
app.use(router);
app.mount('#app');
