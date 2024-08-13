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
        <template #label>
          <ContextMenu :menu="getMenuList(item.path, index)" @select="handleSelect($event, index)">
            {{ item.text }}
          </ContextMenu>
        </template>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script lang="ts" setup>
import { useTabsStore } from "@/store/tabs";
import type { TabPaneName, TabsPaneContext } from "element-plus";
import { useRoute, useRouter } from "vue-router";
import ContextMenu from "./ContextMenu.vue";
import { storeToRefs } from "pinia";
const tabsStore = useTabsStore();
const router = useRouter();
const route = useRoute();
function getMenuList(path: string, index: number) {
  return computed(() => {
    const data = [
      {
        label: "刷新当前页面",
        value: "refresh",
        disabled: route.path !== path
      },
      {
        label: "关闭其他标签页",
        value: "closeOther",
        disabled: tabsStore.tabsList.length === 1
      },
      {
        label: "关闭左侧标签页",
        value: "closeLeft",
        disabled: !index
      },
      {
        label: "关闭右侧标签页",
        value: "closeRight",
        disabled: index === tabsStore.tabsList.length - 1
      }
    ];
    return data;
  }).value;
}

const emit = defineEmits(["refresh", "closeOther", "closeLeftRight"]);
function handleSelect(value: string, index: number) {
  if (value === "refresh") {
    emit("refresh");
  } else if (value === "closeOther") {
    const newTabsList = tabsStore.tabsList[index];
    const path = newTabsList.path;
    tabsStore.tabsList = [newTabsList];
    router.push(path);
    tabsStore.currentPath = path;
    emit("closeOther", path);
  } else {
    const path = tabsStore.tabsList[index].path;
    const length = tabsStore.tabsList.length - index - 1;
    if (value === "closeLeft") {
      tabsStore.tabsList.splice(0, index);
    } else {
      tabsStore.tabsList.splice(index + 1, length);
    }
    const isExist = tabsStore.tabsList.find((item) => item.path === tabsStore.currentPath);
    if (!isExist) {
      tabsStore.currentPath = path;
      router.push(path);
    }
    const pathArr = tabsStore.tabsList.map((item) => {
      return item.path;
    });
    emit("closeLeftRight", pathArr);
  }
}
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
