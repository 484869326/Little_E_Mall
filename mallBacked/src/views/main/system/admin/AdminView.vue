<template>
  <div class="admin-view">
    <PageSearch
      :SearchFormConfig="SearchFormConfig"
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
    </PageContent>
    <PageModal
      :title="title"
      :modelConfig="modelConfig"
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
import { modelConfig } from "./config/modelConfig";
import { usePageModal } from "@/hook/usePageModal";

const { pageContentRef, handleResetClick, handleQueryClick, getFormData } = usePageSearch();
const addCallback = () => {
  const passwordItem = modelConfig.formItems.find((item: any) => item.field === "adminPwd");
  if (passwordItem) passwordItem.isHidden = false;
};
const editCallback = () => {
  const passwordItem = modelConfig.formItems.find((item: any) => item.field === "adminPwd");
  if (passwordItem) passwordItem.isHidden = true;
};
const { handleAddData, handleEditData, defaultInfo, pageModalRef, title } = usePageModal(
  addCallback,
  editCallback
);
</script>

<style scoped></style>
