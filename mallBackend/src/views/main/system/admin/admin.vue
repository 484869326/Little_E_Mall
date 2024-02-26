<template>
  <div class="admin">
    <pageSearch
      :SearchFormConfig="SearchFormConfig"
      @resetBtnClick="handleResetClick"
      @queryBtnClick="handleQueryClick"
    ></pageSearch>
    <pageContent
      ref="pageContentRef"
      :contentTableConfig="contentTableConfig"
      :getFormData="getFormData"
      pageName="admin"
      @addBtnClick="handleAddData"
      @editBtnClick="handleEditData"
    ></pageContent>
    <PageModel
      :title="title"
      :modelConfig="modelConfig"
      pageName="admin"
      ref="pageModelRef"
      :defaultInfo="defaultInfo"
    ></PageModel>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { SearchFormConfig } from './config/search_config';
import { contentTableConfig } from './config/content_config';
import { usePageSearch } from '@/hook/usePageSearch';
import { modelConfig } from './config/model.config';
import { usePageModel } from '@/hook/usePageModel';
export default defineComponent({
  name: 'admin',
  setup() {
    const { pageContentRef, handleResetClick, handleQueryClick, getFormData } =
      usePageSearch();
    const addCallback = () => {
      const passwordItem = modelConfig.formItems.find(
        (item) => item.field === 'adminPwd'
      );
      if (passwordItem) passwordItem.isHidden = false;
    };
    const editCallback = () => {
      const passwordItem = modelConfig.formItems.find(
        (item) => item.field === 'adminPwd'
      );
      if (passwordItem) passwordItem.isHidden = true;
    };
    const { handleAddData, handleEditData, defaultInfo, pageModelRef, title } =
      usePageModel(addCallback, editCallback);
    return {
      contentTableConfig,
      SearchFormConfig,
      pageContentRef,
      handleResetClick,
      handleQueryClick,
      modelConfig,
      handleAddData,
      handleEditData,
      defaultInfo,
      pageModelRef,
      getFormData,
      title
    };
  }
});
</script>

<style scoped lang="less"></style>
