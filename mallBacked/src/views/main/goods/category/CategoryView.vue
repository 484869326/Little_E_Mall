<template>
  <div class="category-view">
    <PageContent
      ref="pageContentRef"
      :getFormData="{}"
      :contentTableConfig="contentTableConfig"
      pageName="category"
      @addBtnClick="handleAddData"
      @editBtnClick="handleEditData"
    >
      <template #cImg="scope">
        <ElImage
          v-show="scope.row.cImg"
          :src="scope.row.cImg"
          :preview-src-list="[scope.row.cImg]"
          fit="cover"
        >
        </ElImage>
      </template>
    </PageContent>
    <PageModal
      :title="title"
      :modelConfig="modelConfigComputed"
      pageName="category"
      ref="pageModalRef"
      :defaultInfo="defaultInfo"
      @success="pageContentRef && pageContentRef.getPageData()"
    ></PageModal>
  </div>
</template>

<script setup lang="ts">
import { contentTableConfig } from "./config/contentConfig";
import { modelConfig } from "./config/modelConfig";
import { usePageModal } from "@/hook/usePageModal";
import PageContent from "@/components/PageContent.vue";

const pageContentRef = ref<InstanceType<typeof PageContent>>();
const modelConfigComputed = computed(() => {
  return modelConfig;
});
//默认 disabled为false
const addCallback = () => {
  const levelItem: any = modelConfig.formItems.find((item: any) => {
    return item.field === "level";
  });
  levelItem.disabled = false;
};
//隐藏函数
const editCallback = async () => {
  const levelItem: any = modelConfig.formItems.find((item: any) => {
    return item.field === "level";
  });
  const formData: any = defaultInfo.value;
  const level = formData["level"];
  await levelItem?.isChange(modelConfig.formItems, level);
  levelItem.disabled = false;
  if (formData["children"] && formData["children"].length !== 0) {
    const children = formData["children"];
    const grandson = children.some((item: any) => {
      if (item.children && item.children.length !== 0) {
        return true;
      }
    });
    grandson && (levelItem.disabled = true);
  }
};
const { handleAddData, handleEditData, defaultInfo, pageModalRef, title } = usePageModal(
  addCallback,
  editCallback
);
</script>

<style scoped></style>
