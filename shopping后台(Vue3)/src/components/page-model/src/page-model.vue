<template>
  <div class="pageModel">
    <el-dialog
      v-model="centerDialogVisible"
      v-if="centerDialogVisible"
      :title="title"
      width="30%"
      center
    >
      <DiyForm v-bind="modelConfig" v-model="formData"> </DiyForm>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="centerDialogVisible = false">取消</el-button>
          <el-button type="primary" @click="handleConfirmClick">
            确认
          </el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, watch } from 'vue';
import DiyForm from '@/base-ui/form';
import { useStore } from '@/store';
export default defineComponent({
  name: 'page-model',
  props: {
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
  },
  components: { DiyForm },
  setup(props) {
    const store = useStore();
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
    //确认按钮
    const handleConfirmClick = async () => {
      try {
        if (Object.keys(props.defaultInfo).length) {
          const id =
            props.defaultInfo.id ??
            props.defaultInfo.Goodid ??
            props.defaultInfo.Cid;
          await store.dispatch('systemModule/editPageDataAction', {
            pageName: props.pageName,
            data: { ...formData.value },
            id
          });
          ElMessage.success('修改成功');
        } else {
          await store.dispatch('systemModule/addPageDataAction', {
            pageName: props.pageName,
            data: { ...formData.value }
          });
          ElMessage.success('增加成功');
        }
        centerDialogVisible.value = false;
      } catch (error: any) {
        ElMessage.error(error.message);
      }
    };
    return {
      centerDialogVisible,
      formData,
      handleConfirmClick
    };
  }
});
</script>

<style scoped lang="less"></style>
