<template>
  <div class="menu-tab">
    <el-tabs
      v-model="tabsStore.currentPath"
      type="card"
      class="demo-tabs"
      @tab-click="handleTabClick"
      @tab-remove="handleRemoveClick"
    >
      <el-tab-pane
        v-for="(item, index) in tabsStore.tabsList"
        :key="item.id"
        :label="item.text"
        :name="item.path"
        :closable="index !== 0"
      >
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script lang="ts" setup>
import { useTabsStore } from "@/store/tabs";
import type { TabPaneName, TabsPaneContext } from "element-plus";
import { useRouter } from "vue-router";

const tabsStore = useTabsStore();
const router = useRouter();
function handleTabClick(pane: TabsPaneContext) {
  const path = pane.props.name as string;
  router.push({
    path
  });
}
function handleRemoveClick(name: TabPaneName) {
  tabsStore.removeTab(name as string);
  router.push({
    path: tabsStore.currentPath
  });
}
</script>

<style></style>
