<template>
  <div class="message-view">
    <PageSearch
      :SearchFormConfig="searchConfigComputed"
      @resetBtnClick="handleResetClick"
      @queryBtnClick="handleQueryClick"
    ></PageSearch>
    <PageContent
      :getFormData="getFormData"
      ref="pageContentRef"
      :contentTableConfig="contentTableConfig"
      pageName="good"
      @addBtnClick="handleAddData"
      @editBtnClick="handleEditData"
    >
      <template #goodImg="scope">
        <ElImage :src="scope.row.goodImg" :preview-src-list="[scope.row.goodImg]" fit="cover">
        </ElImage>
      </template>
      <template #swiper="scope">
        <ElImage :src="scope.row.swiper[0]" :preview-src-list="[...scope.row.swiper]" fit="cover">
        </ElImage>
      </template>
      <template #detail="scope">
        <ElImage :src="scope.row.detail[0]" :preview-src-list="[...scope.row.detail]" fit="cover">
        </ElImage>
      </template>
    </PageContent>
    <PageModal
      :title="title"
      :modelConfig="modelConfigComputed"
      ref="pageModalRef"
      :defaultInfo="defaultInfo"
      pageName="good"
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
import { useMainStore } from "@/store/main";

const mainStore = useMainStore();

const { pageContentRef, handleResetClick, handleQueryClick, getFormData } = usePageSearch();
const { handleAddData, handleEditData, defaultInfo, pageModalRef, title } = usePageModal();
const searchConfigComputed = computed(() => {
  const categoryItem = SearchFormConfig.formItems.find((item: any) => item.field === "cid");
  if (categoryItem) {
    categoryItem.options = mainStore.entireCategory.map((item: any) => {
      return { label: item.cName, value: item.cid };
    });
  }
  return SearchFormConfig;
});
const modelConfigComputed = computed(() => {
  const categoryItem = modelConfig.formItems.find((item) => item.field === "cid");
  if (categoryItem) {
    categoryItem.options = mainStore.entireCategory.map((item: any) => {
      return { label: item.cName, value: item.cid };
    });
  }
  return modelConfig;
});
onMounted(() => {
  mainStore.getEntireCategory();
});
</script>

<style scoped></style>
