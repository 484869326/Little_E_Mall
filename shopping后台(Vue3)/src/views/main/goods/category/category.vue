<template>
  <div class="category">
    <pageContent
      :getFormData="{}"
      :contentTableConfig="contentTableConfig"
      pageName="category"
      @addBtnClick="handleAddData"
      @editBtnClick="handleEditData"
    >
      <template #Cimg="scope">
        <el-image
          v-show="scope.row.Cimg"
          :src="scope.row.Cimg"
          :preview-src-list="[scope.row.Cimg]"
          fit="cover"
        >
        </el-image>
      </template>
    </pageContent>
    <PageModel
      :title="title"
      :modelConfig="modelConfig"
      pageName="category"
      ref="pageModelRef"
      :defaultInfo="defaultInfo"
    ></PageModel>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { contentTableConfig } from './config/content_config';
import { modelConfig } from './config/model.config';
import { usePageModel } from '@/hook/usePageModel';
export default defineComponent({
  name: 'category',
  setup() {
    //隐藏函数
    const editCallback = () => {
      const levelItem = modelConfig.formItems.find((item: any) => {
        return item.field === 'level';
      });
      const value: any = defaultInfo.value;
      const level = value['level'];
      levelItem?.isChange(modelConfig.formItems, level);
    };
    const { handleAddData, handleEditData, defaultInfo, pageModelRef, title } =
      usePageModel(undefined, editCallback);
    return {
      contentTableConfig,
      modelConfig,
      handleAddData,
      handleEditData,
      defaultInfo,
      pageModelRef,
      title
    };
  }
});
</script>

<style scoped lang="less"></style>
