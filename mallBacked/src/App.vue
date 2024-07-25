<template>
  <ElConfigProvider :locale="zhCn">
    <RouterView></RouterView>
  </ElConfigProvider>
</template>

<script setup lang="ts">
import { ElConfigProvider } from "element-plus";
import zhCn from "element-plus/dist/locale/zh-cn.mjs";
import { useThemeStore } from "./store/theme";
const themeStore = useThemeStore();
themeStore.loadTheme();
</script>

<style lang="scss" scoped></style>
