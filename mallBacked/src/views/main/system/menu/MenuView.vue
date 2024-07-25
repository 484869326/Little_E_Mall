<template>
  <div class="menu-view">
    <PageContent
      ref="pageContentRef"
      :getFormData="{}"
      :contentTableConfig="contentTableConfig"
      pageName="menu"
      @addBtnClick="handleAddData"
      @editBtnClick="handleEditData"
    >
      <template #icon="scope">
        <ElIcon v-html="scope.row.icon"></ElIcon>
      </template>
    </PageContent>
    <PageModal
      :title="title"
      :modalConfig="modalConfigComputed"
      pageName="menu"
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
import { useMainStore } from "@/store/main";

const mainStore = useMainStore();
const pageContentRef = ref<InstanceType<typeof PageContent>>();
const modalConfigComputed = computed(() => {
  const menuItem = modalConfig.formItems.find((item: any) => {
    return item.field === "parentId";
  });
  if (menuItem) {
    let menuList = mainStore.menuList.map((item) => {
      return { label: item.text, value: item.id };
    });
    menuItem.options = [...menuList];
  }
  return modalConfig;
});

//默认 disabled为false
const addCallback = () => {
  const levelItem: any = modalConfig.formItems.find((item: any) => {
    return item.field === "level";
  });
  levelItem.disabled = false;
};
//隐藏函数
const editCallback = () => {
  //层级
  const levelItem: any = modalConfig.formItems.find((item: any) => {
    return item.field === "level";
  });
  //上次菜单
  const parentIdItem = modalConfig.formItems.find((item: any) => {
    return item.field === "parentId";
  });
  //默认设置为false
  levelItem.disabled = false;
  (defaultInfo.value as any)["parentId"] === 0
    ? ((defaultInfo.value as any)["parentId"] = "")
    : void 0;
  //获取 传过来的编辑数据
  const formData: any = defaultInfo.value;
  const level = formData["level"];
  if (parentIdItem && level === 0) {
    parentIdItem.options = parentIdItem.options?.filter((item: any) => {
      return item.value !== formData["id"];
    });
    formData["children"].length !== 0 && (levelItem.disabled = true);
  }
  levelItem?.isChange(modalConfig.formItems, level);
};
//hook
const { handleAddData, handleEditData, defaultInfo, pageModalRef, title } = usePageModal(
  addCallback,
  editCallback
);
</script>

<style scoped></style>
