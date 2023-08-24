<template>
  <div class="order">
    <pageContent
      ref="pageContentRef"
      :contentTableConfig="contentTableConfig"
      :getFormData="{}"
      pageName="order"
    >
      <template #sendOut="scope">
        <template v-if="scope.row.condition === '购买成功'">
          <el-link type="primary" @click="handleSendOut(scope.row)"
            >发货</el-link
          >
        </template>
        <template v-else>
          <el-link type="primary" disabled>已发货</el-link>
        </template>
      </template>
    </pageContent>
  </div>
</template>

<script lang="ts">
import { useStore } from '@/store';
import { defineComponent } from 'vue';
import { contentTableConfig } from './config/content_config';
export default defineComponent({
  name: 'admin',
  setup() {
    const store = useStore();
    const handleSendOut = (row: any) => {
      const id = row.orderid;
      store.dispatch('systemModule/editPageDataAction', {
        pageName: 'order',
        data: {},
        id
      });
    };
    return {
      contentTableConfig,
      handleSendOut
    };
  }
});
</script>

<style scoped lang="less"></style>
