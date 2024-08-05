<template>
  <div class="nav-header">
    <ElIcon @click="$emit('update:collapse', !collapse)">
      <IEpExpand v-if="collapse"></IEpExpand>
      <IEpFold v-else></IEpFold>
    </ElIcon>
    <div class="content">
      <Breadcrumb :breadCrumbs="breadCrumbs"></Breadcrumb>
      <UserInfo v-model:isPwd="isPwd" @click="handleClick"></UserInfo>
    </div>
    <PageModal
      :title="title"
      :modalConfig="modalConfig"
      pageName="admin"
      ref="pageModalRef"
      :defaultInfo="defaultInfo"
      :otherMethod="true"
      @confirmClick="handleConfirmClick"
    ></PageModal>
  </div>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";
import { useLoginStore } from "@/store/login";
import UserInfo from "./cpns/UserInfo.vue";
import Breadcrumb from "@/base-ui/BreadCrumbUI.vue";
import { pathMenuToBread } from "@/router/mapMenus";
import type PageModal from "../PageModal.vue";
import { userConfig } from "./config/userConfig";
import { pwdConfig } from "./config/pwdConfig";
import { updatePassword, updateUserInfo } from "@/service/login";

defineProps(["collapse"]);
defineEmits(["update:collapse"]);
const route = useRoute();
const router = useRouter();
const pageModalRef = ref<InstanceType<typeof PageModal>>();
const loginStore = useLoginStore();
const breadCrumbs = computed(() => pathMenuToBread(loginStore.getMenu, route.path));
const isPwd = ref(false);
const title = computed(() => {
  return isPwd.value ? "修改密码" : "修改个人资料";
});
const defaultInfo = ref({});
const modalConfig = computed(() => {
  return isPwd.value ? pwdConfig : userConfig;
});
function handleClick() {
  if (isPwd.value) {
    defaultInfo.value = {};
  } else {
    defaultInfo.value = loginStore.userInfo;
  }
  pageModalRef.value && pageModalRef.value.setCenterDialogVisible();
}
async function handleConfirmClick(data: any) {
  if (isPwd.value) {
    await updatePassword(data);
    ElMessage.success("密码修改成功");
    router.push("/login");
    return;
  }
  await updateUserInfo(data);
  ElMessage.success("个人资料修改成功");
  Object.assign(loginStore.userInfo, data);
  pageModalRef.value && pageModalRef.value.setCenterDialogVisible(false);
}
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
