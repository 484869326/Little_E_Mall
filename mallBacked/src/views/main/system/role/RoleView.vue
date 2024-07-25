<template>
  <div class="user-view">
    <PageContent
      ref="pageContentRef"
      :contentTableConfig="contentTableConfig"
      :getFormData="{}"
      pageName="role"
      @addBtnClick="handleAddData"
      @editBtnClick="handleEditData"
    >
    </PageContent>
    <PageModal
      :title="title"
      :modalConfig="modalConfigComputed"
      pageName="role"
      ref="pageModalRef"
      :defaultInfo="defaultInfo"
      :otherInfo="otherInfo"
      @success="pageContentRef && pageContentRef.getPageData()"
    >
      <template #roleMenu>
        <ElTree
          :props="{
            label: 'text',
            children: 'children'
          }"
          :data="mainStore.menuList"
          nodeKey="id"
          showCheckbox
          ref="elTreeRef"
          @check="handleCheckChange"
        ></ElTree>
      </template>
    </PageModal>
  </div>
</template>

<script setup lang="ts">
import { contentTableConfig } from "./config/contentConfig";
import { modalConfig } from "./config/modalConfig";
import { usePageModal } from "@/hook/usePageModal";
import PageContent from "@/components/PageContent.vue";
import { useMainStore } from "@/store/main";
import type { IRole } from "@/types/main";
import type { ElTree } from "element-plus";
import { getCheckMenu } from "@/utils";

const mainStore = useMainStore();
const pageContentRef = ref<InstanceType<typeof PageContent>>();
const elTreeRef = ref<InstanceType<typeof ElTree>>();
const otherInfo = ref({
  menuIds: [] as number[]
});

const modalConfigComputed = computed(() => {
  const roleMenu = modalConfig.formItems.find((item) => item.field === "roleMenu");
  if (roleMenu) {
    roleMenu.rules = [
      {
        required: true,
        validator: (rule: any, value: any, callback: any) => {
          const otherInfoValue = toValue(otherInfo);
          if (!otherInfoValue?.menuIds || otherInfoValue?.menuIds.length === 0) {
            callback("功能权限必选一个");
          } else {
            callback();
          }
        }
      }
    ];
  }
  return modalConfig;
});

const { handleAddData, handleEditData, defaultInfo, pageModalRef, title } = usePageModal(
  () => {
    mainStore.getPageListAction("menu", {});
    otherInfo.value.menuIds = [];
  },
  (item: IRole) => {
    mainStore.getPageListAction("menu", {});
    nextTick(() => {
      if (!item.rolemenus) return;
      const [checkedKeys, halfCheckedKeys] = getCheckMenu(item.rolemenus);
      otherInfo.value.menuIds = [...checkedKeys, ...halfCheckedKeys];
      elTreeRef.value && elTreeRef.value.setCheckedKeys(checkedKeys);
    });
  }
);
//获取改变的节点
const handleCheckChange = (_: any, checkedObj: any) => {
  const checkedKeys = checkedObj.checkedKeys;
  const halfCheckedKeys = checkedObj.halfCheckedKeys;
  const menuIds = [...checkedKeys, ...halfCheckedKeys];
  otherInfo.value.menuIds = menuIds;
};
</script>

<style scoped lang="scss"></style>
