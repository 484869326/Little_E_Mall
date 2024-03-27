<template>
  <ElBreadcrumb separator="/">
    <template v-for="item in breadCrumbs" :key="item.name">
      <ElBreadcrumbItem :to="item.path ?? {}"> {{ item.name }}</ElBreadcrumbItem></template
    >
  </ElBreadcrumb>
</template>

<script lang="ts" setup>
import type { PropType } from "vue";
import type { IBreadCrumb } from "@/types/baseUI";
defineProps({
  breadCrumbs: {
    type: Array as PropType<IBreadCrumb[]>,
    default: () => []
  }
});
</script>

<style scoped></style>
