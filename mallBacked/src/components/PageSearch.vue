<template>
  <div class="page-search">
    <DiyForm v-model="formData" v-bind="SearchFormConfig">
      <template #footer>
        <div class="buttons">
          <ElButton @click="handleResetClick" class="default-button">
            <template #icon>
              <IEpRefresh />
            </template>
            重置
          </ElButton>
          <ElButton type="primary" @click="handleQueryClick">
            <template #icon>
              <IEpSearch />
            </template>
            搜索</ElButton
          >
        </div>
      </template>
    </DiyForm>
  </div>
</template>

<script lang="ts" setup>
import DiyForm from "@/base-ui/FormUI.vue";
import { deepClone } from "@/utils";

const props = defineProps({
  SearchFormConfig: {
    type: Object,
    required: true
  }
});
const emit = defineEmits(["resetBtnClick", "queryBtnClick"]);
const formItem = props.SearchFormConfig?.formItems ?? [];
const formOriginData: any = {};
for (const item of formItem) {
  formOriginData[item.field] = item.value;
}
const formData = ref(deepClone(formOriginData));
const handleResetClick = () => {
  for (const key in formOriginData) {
    formData.value[key] = formOriginData[key];
  }
  emit("resetBtnClick");
};
const handleQueryClick = () => {
  emit("queryBtnClick", deepClone(formData.value));
};
</script>

<style scoped lang="scss">
.page-search {
  border-radius: 5px;
  box-shadow: 0 6px 18px 0 rgb(60 70 79 / 10%);
  .buttons {
    text-align: right;
    padding: 0 30px 18px;
    .el-button {
      padding: 10px 15px;
    }
  }
}
</style>
