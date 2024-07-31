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
      :modalConfig="modalConfig"
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
import { parentMenuList } from "@/utils";

const mainStore = useMainStore();
const pageContentRef = ref<InstanceType<typeof PageContent>>();
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
onMounted(() => {
  const level = modalConfig.formItems.find((item) => item.field === "level");
  if (!level) return;
  level.isChange = (formItems: any, value: any) => {
    const fieldArr: any[] = [
      //一级菜单
      ["text", "level", "icon", "path"],
      //二级菜单
      ["text", "level", "path", "parentId"],
      //三级菜单
      ["text", "level", "parentId", "permission"]
    ];
    if (value !== 1) {
      const parentId = formItems.find((item: any) => {
        return item.field === "parentId";
      });
      parentId.options = parentMenuList(value, mainStore.menuList);
      pageModalRef.value && pageModalRef.value.setFormDataField("parentId", "");
    }
    formItems.forEach((item: any) => {
      const field = item.field;
      item.isHidden = true;
      if (fieldArr[value - 1].includes(field)) {
        item.isHidden = false;
        if (field === "path") {
          item.rules =
            value !== 1
              ? [
                  { required: true, message: "请输入路径", trigger: "blur" },
                  {
                    pattern: /\/+/,
                    message: "请填写正确的路径",
                    trigger: "blur"
                  }
                ]
              : [];
        }
      }
    });
  };
});
</script>

<style scoped></style>
