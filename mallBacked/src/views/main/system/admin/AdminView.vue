<template>
  <div class="admin-view">
    <PageSearch
      :SearchFormConfig="searchConfigComputed"
      @resetBtnClick="handleResetClick"
      @queryBtnClick="handleQueryClick"
    ></PageSearch>
    <PageContent
      ref="pageContentRef"
      :contentTableConfig="contentTableConfig"
      :getFormData="getFormData"
      pageName="admin"
      @addBtnClick="handleAddData"
      @editBtnClick="handleEditData"
    >
      <template #gender="scope">
        {{ scope.row.gender ? "女" : "男" }}
      </template>
      <template #roleName="scope">
        {{ scope.row.role.name }}
      </template>
    </PageContent>
    <PageModal
      :title="title"
      :modalConfig="modalConfigComputed"
      pageName="admin"
      ref="pageModalRef"
      :defaultInfo="defaultInfo"
      @success="pageContentRef && pageContentRef.getPageData()"
    ></PageModal>
  </div>
</template>

<script setup lang="ts">
import { SearchFormConfig } from "./config/searchConfig";
import { contentTableConfig } from "./config/contentConfig";
import { usePageSearch } from "@/hook/usePageSearch";
import { modalConfig } from "./config/modalConfig";
import { usePageModal } from "@/hook/usePageModal";
import { useMainStore } from "@/store/main";
import { validateAdminName } from "@/service/login";

const mainStore = useMainStore();
const searchConfigComputed = computed(() => {
  const roleItem = SearchFormConfig.formItems.find((item: any) => item.field === "roleId");
  if (roleItem) {
    roleItem.options = mainStore.entireRole.map((item: any) => {
      return { label: item.name, value: item.id };
    });
  }
  return SearchFormConfig;
});
const modalConfigComputed = computed(() => {
  const roleItem = modalConfig.formItems.find((item: any) => item.field === "roleId");
  if (roleItem) {
    roleItem.options = mainStore.entireRole.map((item: any) => {
      return { label: item.name, value: item.id };
    });
  }
  return modalConfig;
});
const { pageContentRef, handleResetClick, handleQueryClick, getFormData } = usePageSearch();
function adminNameValidate(oldVal = "") {
  return [
    { required: true, message: "请输入管理员账号", trigger: "blur" },
    {
      pattern: /^[a-z0-9]{5,10}$/,
      message: "账号为5-10个数字或者英文",
      trigger: "blur"
    },
    {
      validator: (rule: any, value: string, callback: any) => {
        if (oldVal && oldVal === value) {
          callback();
          return;
        }
        const res = validateAdminName(value).then((res) => {
          if (res.data) {
            callback();
            return;
          }
          callback(new Error("此账号已注册，请更换别的账号"));
        });
      },
      trigger: "blur"
    }
  ];
}
const addCallback = () => {
  const passwordItem = modalConfig.formItems.find((item: any) => item.field === "adminPwd");
  const adminNameItem = modalConfig.formItems.find((item: any) => item.field === "adminName");
  if (passwordItem) passwordItem.isHidden = false;
  if (adminNameItem) adminNameItem.rules = adminNameValidate();
};
const editCallback = (item: any) => {
  const passwordItem = modalConfig.formItems.find((item: any) => item.field === "adminPwd");
  const adminNameItem = modalConfig.formItems.find((item: any) => item.field === "adminName");
  if (passwordItem) passwordItem.isHidden = true;
  if (adminNameItem) adminNameItem.rules = adminNameValidate(item.adminName);
};
const { handleAddData, handleEditData, defaultInfo, pageModalRef, title } = usePageModal(
  addCallback,
  editCallback
);
onMounted(() => {
  mainStore.getEntireRole();
});
</script>

<style scoped></style>
