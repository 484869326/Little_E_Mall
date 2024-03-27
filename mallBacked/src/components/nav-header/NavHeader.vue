<template>
  <div class="nav-header">
    <i class="" @click="handleFoldChange" v-html="svg"> </i>
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
import { pathMenuToBread } from "@/utils/mapMenus";

const emit = defineEmits(["foldChange"]);
const route = useRoute();
const loginStore = useLoginStore();

const svg = ref("");
let isFold = false;
const expand =
  '<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" data-v-ea893728=""><path fill="currentColor" d="M128 192h768v128H128V192zm0 256h512v128H128V448zm0 256h768v128H128V704zm576-352 192 160-192 128V352z"></path></svg>';
const fold =
  '<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" data-v-ea893728=""><path fill="currentColor" d="M896 192H128v128h768V192zm0 256H384v128h512V448zm0 256H128v128h768V704zM320 384 128 512l192 128V384z"></path></svg>';
svg.value = expand;
const handleFoldChange = () => {
  isFold = !isFold;
  isFold ? (svg.value = fold) : (svg.value = expand);
  emit("foldChange", isFold);
};
const breadCrumbs = computed(() => pathMenuToBread(loginStore.getMenu, route.path));
</script>

<style scoped lang="scss">
.nav-header {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  i {
    display: block;
    width: 25px;
    height: 25px;
    cursor: pointer;
  }
  .content {
    display: flex;
    padding: 0 20px;
    flex: 1;
    justify-content: space-between;
    align-items: center;
    :deep(.el-breadcrumb) {
      & > span {
        &:first-child {
          .is-link {
            @include useTheme {
              color: getVar("textColor");
            }
          }
        }
        &:last-child {
          .is-link {
            @include useTheme {
              color: getVar("regularTextColor");
            }
          }
        }
      }
    }
    :deep(.userinfo) {
      .dropdown {
        .admin-name,
        .el-icon {
          @include useTheme {
            color: getVar("regularTextColor");
          }
        }
      }
    }
  }
}
</style>
