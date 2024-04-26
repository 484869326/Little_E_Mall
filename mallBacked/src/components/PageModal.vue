<template>
  <div class="page-modal">
    <ElDialog
      v-model="centerDialogVisible"
      v-if="centerDialogVisible"
      :title="title"
      width="30%"
      center
      :z-index="3"
    >
      <DiyForm v-bind="modelConfig" v-model="formData" ref="diyFormRef"> </DiyForm>
      <template #footer>
        <span class="dialog-footer">
          <ElButton @click="centerDialogVisible = false" class="default-button">取消</ElButton>
          <ElButton type="primary" @click="handleConfirmClick"> 确认 </ElButton>
        </span>
      </template>
    </ElDialog>
  </div>
</template>
<script lang="ts" setup>
import { ref, watch } from "vue";
import DiyForm from "@/base-ui/FormUI.vue";
import { useMainStore } from "@/store/main";

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  //表单值  是空还是有值
  defaultInfo: {
    type: Object,
    required: true
  },
  modelConfig: {
    type: Object,
    required: true
  },
  //页面名字
  pageName: {
    type: String,
    required: true
  }
});
const emit = defineEmits(["success"]);
const mainStore = useMainStore();
//dialog是否弹出
const centerDialogVisible = ref(false);
//传递表格value值
const formData = ref<any>({});
watch(
  () => props.defaultInfo,
  (newValue: any) => {
    for (const item of props.modelConfig.formItems) {
      formData.value[`${item.field}`] = newValue[`${item.field}`];
    }
  }
);
const diyFormRef = ref<InstanceType<typeof DiyForm>>();
//确认按钮
const handleConfirmClick = async () => {
  if (diyFormRef.value) {
    const result = await diyFormRef?.value.validateData();
    if (result) {
      try {
        if (Object.keys(props.defaultInfo).length) {
          const id = props.defaultInfo.id ?? props.defaultInfo.goodId ?? props.defaultInfo.cid;
          await mainStore.editPageDataAction(props.pageName, { ...formData.value }, id);
          ElMessage.success("修改成功");
        } else {
          await mainStore.addPageDataAction(props.pageName, { ...formData.value });
          ElMessage.success("增加成功");
        }
        emit("success");
        centerDialogVisible.value = false;
      } catch (error: any) {
        ElMessage.error(error.message);
      }
    } else {
      ElMessage.error("检查所填内容");
    }
  }
};
defineExpose({
  centerDialogVisible
});
</script>

<style scoped lang="scss">
.page-modal {
  :deep(.el-overlay) {
    .el-dialog {
      @include responseTo("desktop") {
        --el-dialog-width: 56% !important;
      }
      @include responseTo("notebook") {
        --el-dialog-width: 60% !important;
      }
      @include responseTo("pad") {
        --el-dialog-width: 70% !important;
      }
      @include responseTo("phone") {
        --el-dialog-width: 90% !important;
      }
      @include useTheme {
        background: getVar("bgColor");
      }
      .el-dialog__title {
        @include useTheme {
          color: getVar("textColor");
        }
      }
    }
  }
}
</style>
