<template>
  <div class="page_search">
    <DiyForm v-model="formData" v-bind="SearchFormConfig">
      <template #footer>
        <div class="buttons">
          <el-button @click="handleResetClick">
            <template #icon>
              <i-ep-refresh />
            </template>
            重置
          </el-button>
          <el-button type="primary" @click="handleQueryClick">
            <template #icon>
              <i-ep-search />
            </template>
            搜索</el-button
          >
        </div>
      </template>
    </DiyForm>
  </div>
</template>

<script lang="ts">
import DiyForm from '@/base-ui/form';
import { defineComponent, ref } from 'vue';
export default defineComponent({
  props: {
    SearchFormConfig: {
      type: Object,
      required: true
    }
  },
  components: { DiyForm },
  emits: ['resetBtnClick', 'queryBtnClick'],
  setup(props, { emit }) {
    const formItem = props.SearchFormConfig?.formItems ?? [];
    const formOriginData: any = {};
    for (const item of formItem) {
      formOriginData[item.field] = item.value;
    }
    const formData = ref(formOriginData);
    const handleResetClick = () => {
      for (const key in formOriginData) {
        formData.value[key] = formOriginData[key];
      }
      emit('resetBtnClick');
    };
    const handleQueryClick = () => {
      emit('queryBtnClick', formData.value);
    };
    return { formData, handleResetClick, handleQueryClick };
  }
});
</script>

<style scoped lang="less">
.page_search {
  background-color: #fff;
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
