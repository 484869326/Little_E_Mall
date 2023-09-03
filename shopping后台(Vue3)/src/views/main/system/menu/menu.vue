<template>
  <div class="menus">
    <pageContent
      ref="pageContentRef"
      :getFormData="{}"
      :contentTableConfig="contentTableConfig"
      pageName="menu"
      @addBtnClick="handleAddData"
      @editBtnClick="handleEditData"
    >
      <template #icon="scope">
        <el-icon v-html="scope.row.icon"></el-icon>
      </template>
    </pageContent>
    <PageModel
      :title="title"
      :modelConfig="modelConfigComputed"
      pageName="menu"
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
import { useStore } from '@/store';
export default defineComponent({
  name: 'menus',
  setup() {
    const store = useStore();
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
    const modelConfigComputed = computed(() => {
      const menuItem = modelConfig.formItems.find((item: any) => {
        return item.field === 'parentID';
      });
      if (menuItem) {
        let menuList = store.state.systemModule.menuList.map((item) => {
          return { label: item.text, value: item.id };
        });
        menuItem.options = [{ label: ' ', value: 0 }, ...menuList];
      }
      return modelConfig;
    });
    return {
      contentTableConfig,
      handleAddData,
      handleEditData,
      defaultInfo,
      pageModelRef,
      title,
      modelConfigComputed
    };
  }
});
</script>

<style scoped lang="less"></style>
