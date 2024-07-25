<template>
  <div class="user-view">
    <PageSearch
      :SearchFormConfig="SearchFormConfig"
      @resetBtnClick="handleResetClick"
      @queryBtnClick="handleQueryClick"
    ></PageSearch>
    <PageContent
      ref="pageContentRef"
      :contentTableConfig="contentTableConfig"
      :getFormData="getFormData"
      pageName="user"
      @addBtnClick="handleAddData"
      @editBtnClick="handleEditData"
    >
      <template #gender="scope">
        {{ scope.row.gender ? "女" : "男" }}
      </template>
    </PageContent>
    <PageModal
      :title="title"
      :modalConfig="modalConfig"
      pageName="user"
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

const { pageContentRef, handleResetClick, handleQueryClick, getFormData } = usePageSearch();
const { handleAddData, handleEditData, defaultInfo, pageModalRef, title } = usePageModal();
</script>

<style scoped lang="scss"></style>
