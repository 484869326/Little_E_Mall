<template>
  <div class="category">
    <pageContent
      :getFormData="{}"
      :contentTableConfig="contentTableConfig"
      pageName="category"
      @addBtnClick="handleAddData"
       @editBtnClick="handleEditData">
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
      :modelConfig="modelConfigComputed"
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
    const modelConfigComputed = computed(() => {
      return modelConfig;
    });
    //默认 disabled为false
    const addCallback = () => {
      const levelItem: any = modelConfig.formItems.find((item: any) => {
        return item.field === 'level';
      });
      levelItem.disabled = false;
    };
    //隐藏函数
    const editCallback = async () => {
      const levelItem: any = modelConfig.formItems.find((item: any) => {
        return item.field === 'level';
      });
      const formData: any = defaultInfo.value;
      const level = formData['level'];
      await levelItem?.isChange(modelConfig.formItems, level);
      levelItem.disabled = false;
      if (formData['children'] && formData['children'].length !== 0) {
        const children = formData['children'];
        const grandson = children.some((item: any) => {
          if (item.children && item.children.length !== 0) {
            return true;
          }
        });
        grandson && (levelItem.disabled = true);
      }
    };
    const { handleAddData, handleEditData, defaultInfo, pageModelRef, title } =
      usePageModel(addCallback, editCallback);

    return {
      contentTableConfig,
      modelConfigComputed,
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
