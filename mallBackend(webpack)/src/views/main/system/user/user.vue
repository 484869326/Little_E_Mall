<template>
  <div class="user">
    <pageSearch
      :SearchFormConfig="SearchFormConfig"
      @resetBtnClick="handleResetClick"
      @queryBtnClick="handleQueryClick"
    ></pageSearch>
    <pageContent
      ref="pageContentRef"
      :contentTableConfig="contentTableConfig"
      :getFormData="getFormData"
      pageName="user"
      @addBtnClick="handleAddData"
      @editBtnClick="handleEditData"
    >
      <template #avatarUrl="scope">
        <el-image
          v-show="scope.row.avatarUrl"
          :src="scope.row.avatarUrl"
          :preview-src-list="[scope.row.avatarUrl]"
          fit="cover"
        >
        </el-image>
      </template>
    </pageContent>
    <PageModel
      :title="title"
      :modelConfig="modelConfig"
      pageName="user"
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
    const { handleAddData, handleEditData, defaultInfo, pageModelRef, title } =
      usePageModel();
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
