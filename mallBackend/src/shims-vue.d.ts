/* eslint-disable */
declare module '*.vue' {
  import type { DefineComponent } from 'vue';
  const component: DefineComponent<{}, {}, any>;
  export default component;
}
declare module 'element-plus/dist/locale/zh-cn.mjs';
//全局注册 变量冒红
// import { ComponentCustomProperties } from '@vue/runtime-core';

// declare module '@vue/runtime-core' {
//   export interface ComponentCustomProperties {
//     $tool: any;
//   }
// }
