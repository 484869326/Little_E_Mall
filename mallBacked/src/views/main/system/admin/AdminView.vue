<template>
  <div class="admin-view">
    <PageSearch
      :SearchFormConfig="searchConfigComputed"
      @resetBtnClick="handleResetClick"
      @queryBtnClick="handleQueryClick"
    ></PageSearch>
    <PageContent
      ref="pageContentRef"
      :contentTableConfig="contentTableConfig"
      :getFormData="getFormData"
      pageName="admin"
      @addBtnClick="handleAddData"
      @editBtnClick="handleEditData"
    >
      <template #gender="scope">
        {{ scope.row.gender ? "女" : "男" }}
      </template>
      <template #roleName="scope">
        {{ scope.row.role.name }}
      </template>
    </PageContent>
    <PageModal
      :title="title"
      :modalConfig="modalConfigComputed"
      pageName="admin"
      ref="pageModalRef"
      :defaultInfo="defaultInfo"
      @success="pageContentRef && pageContentRef.getPageData()"
    ></PageModal>
  </div>
</template>

<script setup lang="ts">
import { SearchFormConfig } from "./config/searchConfig";
import { contentTableConfig } from "./config/contentConfig";
import { usePageSearch } from "@/hook/usePageSearch";
import { modalConfig } from "./config/modalConfig";
import { usePageModal } from "@/hook/usePageModal";
import { useMainStore } from "@/store/main";

const mainStore = useMainStore();
const searchConfigComputed = computed(() => {
  const roleItem = SearchFormConfig.formItems.find((item: any) => item.field === "roleId");
  if (roleItem) {
    roleItem.options = mainStore.entireRole.map((item: any) => {
      return { label: item.name, value: item.id };
    });
  }
  return SearchFormConfig;
});
const modalConfigComputed = computed(() => {
  const roleItem = modalConfig.formItems.find((item: any) => item.field === "roleId");
  if (roleItem) {
    roleItem.options = mainStore.entireRole.map((item: any) => {
      return { label: item.name, value: item.id };
    });
  }
  return modalConfig;
});
const { pageContentRef, handleResetClick, handleQueryClick, getFormData } = usePageSearch();
const addCallback = () => {
  const passwordItem = modalConfig.formItems.find((item: any) => item.field === "adminPwd");
  if (passwordItem) passwordItem.isHidden = false;
};
const editCallback = () => {
  const passwordItem = modalConfig.formItems.find((item: any) => item.field === "adminPwd");
  if (passwordItem) passwordItem.isHidden = true;
};
const { handleAddData, handleEditData, defaultInfo, pageModalRef, title } = usePageModal(
  addCallback,
  editCallback
);
onMounted(() => {
  mainStore.getEntireRole();
});
</script>

<style scoped></style>
