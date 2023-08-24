<template>
  <el-breadcrumb separator="/">
    <template v-for="item in breadCrumbs" :key="item.name">
      <el-breadcrumb-item :to="item.path ?? {}">
        {{ item.name }}</el-breadcrumb-item
      ></template
    >
  </el-breadcrumb>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { IBreadCrumb } from '../';
export default defineComponent({
  props: {
    breadCrumbs: {
      type: Array as PropType<IBreadCrumb[]>,
      default: () => []
    }
  },
  setup() {
    return {};
  }
});
</script>

<style scoped></style>
