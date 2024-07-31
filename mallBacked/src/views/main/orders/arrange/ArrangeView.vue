<template>
  <div class="arrange-view">
    <PageContent
      ref="pageContentRef"
      :contentTableConfig="contentTableConfig"
      :getFormData="{}"
      pageName="order"
    >
      <template #option="scope">
        <div class="option">
          <template v-if="scope.row.condition === '购买成功'">
            <ElLink type="primary" @click="handleSendOut(scope.row)">发货</ElLink>
          </template>
          <template v-else>
            <ElLink type="primary" disabled>已发货</ElLink>
          </template>
          <ElLink type="primary" @click="handleSeeDetailClick(scope.row)">详情</ElLink>
        </div>
      </template>
    </PageContent>
    <PageDetail v-bind="detailConfig" :detailData="detailData" ref="pageDetailRef">
      <template #Num="scope">
        {{ reduce(scope.data) }}
      </template>
      <template #price="scope">
        {{ formatterDetail((scope.data as any)["price"], (scope.row as any)["type"], scope.index) }}
      </template>
      <template #Color="scope">
        {{
          formatterDetail((scope.data as any)["color"], (scope.row as any)["color"], scope.index)
        }}
      </template>
      <template #createdAt="scope">
        {{ formatTime((scope.row as any).createdAt) }}
      </template>
    </PageDetail>
  </div>
</template>

<script setup lang="ts">
import PageContent from "@/components/PageContent.vue";
import PageDetail from "@/components/PageDetail.vue";
import detailConfig from "./config/detailConfig";
import { contentTableConfig } from "./config/contentConfig";
import { useMainStore } from "@/store/main";
import { getOrderDetail } from "@/service/order";
import { delay, formatTime } from "@/utils";
import { reduce } from "@/utils/dataFormat";

const mainStore = useMainStore();
const pageContentRef = ref<InstanceType<typeof PageContent>>();
const pageDetailRef = ref<InstanceType<typeof PageDetail>>();
const detailData = reactive({});
const handleSendOut = async (row: any) => {
  const id = row.orderId;
  await mainStore.editPageDataAction("order", {}, id);
  pageContentRef.value && pageContentRef.value.getPageData();
};
//查看订单详情
async function handleSeeDetailClick(data: any) {
  const { orderId, goodId, userId } = data;
  const res = await getOrderDetail({
    orderId,
    goodId,
    userId
  });
  Object.assign(detailData, res.data.list[0]);
  await delay(300);
  pageDetailRef.value && pageDetailRef.value?.setVisible(true);
}

function formatterDetail(originalValue: any, valueToIndex: any, index: any) {
  const valueIndex = valueToIndex.split(",");
  const originalValueArr = originalValue.split(",");
  return (originalValueArr as any)[valueIndex[index]];
}
</script>

<style scoped lang="scss">
.arrange-view {
  .option {
    .el-link:first-child {
      margin-right: 0.5rem;
    }
  }
}
</style>
