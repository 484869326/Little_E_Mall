<template>
  <div class="user">
    <pageSearch
      :SearchFormConfig="searchConfigComputed"
      @resetBtnClick="handleResetClick"
      @queryBtnClick="handleQueryClick"
    ></pageSearch>
    <pageContent
      :getFormData="getFormData"
      ref="pageContentRef"
      :contentTableConfig="contentTableConfig"
      pageName="good"
      @addBtnClick="handleAddData"
      @editBtnClick="handleEditData"
    >
      <template #Goodimg="scope">
        <el-image
          :src="scope.row.Goodimg"
          :preview-src-list="[scope.row.Goodimg]"
          fit="cover"
        >
        </el-image>
      </template>
      <template #Swiper="scope">
        <el-image
          :src="scope.row.Swiper[0]"
          :preview-src-list="[...scope.row.Swiper]"
          fit="cover"
        >
        </el-image>
      </template>
      <template #Detail="scope">
        <el-image
          :src="scope.row.Detail[0]"
          :preview-src-list="[...scope.row.Detail]"
          fit="cover"
        >
        </el-image>
      </template>
    </pageContent>
    <PageModel
      :title="title"
      :modelConfig="modelConfigComputed"
      ref="pageModelRef"
      :defaultInfo="defaultInfo"
      pageName="good"
    ></PageModel>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { SearchFormConfig } from './config/search_config';
import { contentTableConfig } from './config/content_config';
import { usePageSearch } from '@/hook/usePageSearch';
import { modelConfig } from './config/model.config';
import { usePageModel } from '@/hook/usePageModel';
import { useStore } from '@/store';
export default defineComponent({
  name: 'message',
  components: {},
  setup() {
    const { pageContentRef, handleResetClick, handleQueryClick, getFormData } =
      usePageSearch();
    const { handleAddData, handleEditData, defaultInfo, pageModelRef, title } =
      usePageModel();
    const store = useStore();
    const searchConfigComputed = computed(() => {
      const categoryItem = SearchFormConfig.formItems.find(
        (item) => item.field === 'Cid'
      );
      if (categoryItem) {
        categoryItem.options = store.state.entireCategory.map((item) => {
          return { label: item.Cname, value: item.Cid };
        });
      }
      return SearchFormConfig;
    });
    const modelConfigComputed = computed(() => {
      const categoryItem = modelConfig.formItems.find(
        (item) => item.field === 'Cid'
      );
      if (categoryItem) {
        categoryItem.options = store.state.entireCategory.map((item) => {
          return { label: item.Cname, value: item.Cid };
        });
      }
      return modelConfig;
    });

    return {
      contentTableConfig,
      searchConfigComputed,
      pageContentRef,
      handleResetClick,
      handleQueryClick,
      modelConfigComputed,
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
