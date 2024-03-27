<template>
  <ElConfigProvider :locale="zhCn">
    <RouterView></RouterView>
  </ElConfigProvider>
</template>

<script setup lang="ts">
import { ElConfigProvider } from "element-plus";
import zhCn from "element-plus/dist/locale/zh-cn.mjs";
</script>

<style lang="scss" scoped></style>
