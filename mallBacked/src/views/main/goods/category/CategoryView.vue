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
      :modalConfig="modalConfig"
      pageName="category"
      ref="pageModalRef"
      :defaultInfo="defaultInfo"
      @success="pageContentRef && pageContentRef.getPageData()"
    ></PageModal>
  </div>
</template>

<script setup lang="ts">
import { contentTableConfig } from "./config/contentConfig";
import { modalConfig } from "./config/modalConfig";
import { usePageModal } from "@/hook/usePageModal";
import PageContent from "@/components/PageContent.vue";

const pageContentRef = ref<InstanceType<typeof PageContent>>();
//默认 disabled为false
const addCallback = () => {
  const levelItem: any = modalConfig.formItems.find((item: any) => {
    return item.field === "level";
  });
  levelItem.disabled = false;
};
//隐藏函数
const editCallback = async () => {
  const levelItem: any = modalConfig.formItems.find((item: any) => {
    return item.field === "level";
  });
  (defaultInfo.value as any)["parentId"] === 0
    ? ((defaultInfo.value as any)["parentId"] = "")
    : void 0;
  const formData: any = defaultInfo.value;
  const level = formData["level"];
  await levelItem?.isChange(modalConfig.formItems, level);
  if (formData["children"] && formData["children"].length !== 0) {
    const children = formData["children"];
    const grandson = children.some((item: any) => {
      if (item.children && item.children.length !== 0) {
        return true;
      }
    });
    grandson && (levelItem.disabled = true);
  } else {
    levelItem.disabled = false;
  }
};
const { handleAddData, handleEditData, defaultInfo, pageModalRef, title } = usePageModal(
  addCallback,
  editCallback
);
</script>

<style scoped lang="scss">
:deep(.el-image) {
  img {
    max-width: 100px;
  }
}
</style>
