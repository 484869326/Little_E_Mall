<template>
  <div class="nav-header">
    <ElIcon @click="$emit('update:collapse', !collapse)">
      <IEpExpand v-if="collapse"></IEpExpand>
      <IEpFold v-else></IEpFold>
    </ElIcon>
    <div class="content">
      <Breadcrumb :breadCrumbs="breadCrumbs"></Breadcrumb>
      <UserInfo></UserInfo>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import { useLoginStore } from "@/store/login";
import UserInfo from "./cpns/UserInfo.vue";
import Breadcrumb from "@/base-ui/BreadCrumbUI.vue";
import { pathMenuToBread } from "@/router/mapMenus";

defineProps(["collapse"]);
defineEmits(["update:collapse"]);
const route = useRoute();

const loginStore = useLoginStore();
const breadCrumbs = computed(() => pathMenuToBread(loginStore.getMenu, route.path));
</script>

<style scoped lang="scss">
.nav-header {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  .el-icon {
    font-size: 22px;
    cursor: pointer;
  }
  .content {
    display: flex;
    padding: 0 20px;
    flex: 1;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
@/router/mapMenus
