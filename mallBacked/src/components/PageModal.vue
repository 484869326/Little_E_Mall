<template>
  <Teleport to="body">
    <div class="page-modal" v-if="centerDialogVisible">
      <ElDialog v-model="centerDialogVisible" :title="title" width="30%" center :z-index="3">
        <DiyForm v-bind="modalConfig" v-model="formData" ref="diyFormRef">
          <template
            v-for="item in modalConfig.formItems"
            :key="item.field"
            v-slot:[String(item.slotName)]
          >
            <template v-if="item.slotName">
              <slot :name="item.slotName"></slot>
            </template>
          </template>
          <template #footer>
            <div class="footer">
              <ElButton @click="centerDialogVisible = false" class="default-button">取消</ElButton>
              <ElButton type="primary" @click="handleConfirmClick" native-type="submit">
                确认
              </ElButton>
            </div>
          </template>
        </DiyForm>
      </ElDialog>
    </div>
  </Teleport>
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
  modalConfig: {
    type: Object,
    required: true
  },
  //页面名字
  pageName: {
    type: String,
    required: true
  },
  // 插槽值
  otherInfo: {
    type: Object,
    default: () => {}
  },
  otherMethod: {
    type: Boolean,
    default: false
  }
});
const emit = defineEmits(["success", "confirmClick"]);
const mainStore = useMainStore();
//dialog是否弹出
const centerDialogVisible = ref(false);
//传递表格value值
const formData = ref<any>({});
watch(
  () => props.defaultInfo,
  (newValue: any) => {
    for (const item of props.modalConfig.formItems) {
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
      if (props.otherMethod) {
        emit("confirmClick", formData.value);
        return;
      }
      if (Object.keys(props.defaultInfo).length) {
        const id = props.defaultInfo.id ?? props.defaultInfo.goodId ?? props.defaultInfo.cid;
        await mainStore.editPageDataAction(
          props.pageName,
          { ...formData.value, ...props.otherInfo },
          id
        );
        ElMessage.success("修改成功");
      } else {
        await mainStore.addPageDataAction(props.pageName, {
          ...formData.value,
          ...props.otherInfo
        });
        ElMessage.success("增加成功");
      }
      emit("success");
      centerDialogVisible.value = false;
      return;
    }
    ElMessage.error("检查所填内容");
  }
};
//赋值改变Form UI  formData值
function setFormDataField(field: string, value: any) {
  diyFormRef.value && diyFormRef.value.setFormDataField(field, value);
}
function setCenterDialogVisible(isVisible = true) {
  centerDialogVisible.value = isVisible;
}
defineExpose({
  setCenterDialogVisible,
  setFormDataField
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
    }
  }
  :deep(.footer) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
