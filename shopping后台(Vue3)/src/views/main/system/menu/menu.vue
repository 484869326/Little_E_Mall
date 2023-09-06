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
    //默认 disabled为false
    const addCallback = () => {
      const levelItem: any = modelConfig.formItems.find((item: any) => {
        return item.field === 'level';
      });
      levelItem.disabled = false;
    };
    //隐藏函数
    const editCallback = () => {
      //层级
      const levelItem: any = modelConfig.formItems.find((item: any) => {
        return item.field === 'level';
      });
      //上次菜单
      const parentIDItem = modelConfig.formItems.find((item: any) => {
        return item.field === 'parentID';
      });
      //默认设置为false
      levelItem.disabled = false;
      //获取 传过来的编辑数据
      const formData: any = defaultInfo.value;
      const level = formData['level'];
      if (parentIDItem && level === 0) {
        parentIDItem.options = parentIDItem.options?.filter((item: any) => {
          return item.value !== formData['id'];
        });
        formData['children'].length !== 0 && (levelItem.disabled = true);
      }
      levelItem?.isChange(modelConfig.formItems, level);
    };
    //hook
    const { handleAddData, handleEditData, defaultInfo, pageModelRef, title } =
      usePageModel(addCallback, editCallback);

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
