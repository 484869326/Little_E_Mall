<template>
  <div class="statistics-view">
    <ElRow :gutter="30" class="el-row">
      <ElCol :md="12">
        <EchartSkeleton title="管理员性别比例" :loadFn="statisticsStore.getAdminSexCount">
          <PieEcharts :pieData="adminSexCount" :isDark="isDark"></PieEcharts>
        </EchartSkeleton>
      </ElCol>
      <ElCol :md="12">
        <EchartSkeleton title="近7日订单数" :loadFn="statisticsStore.getOrderCount">
          <LineEcharts v-bind="orderCount" :isDark="isDark"></LineEcharts>
        </EchartSkeleton>
      </ElCol>
    </ElRow>
    <ElRow :gutter="30">
      <ElCol :md="12">
        <EchartSkeleton title="分类商品数量" :loadFn="statisticsStore.getCategoryGoodsCount">
          <BarEcharts v-bind="categoryGoodsCount" :isDark="isDark"></BarEcharts>
        </EchartSkeleton>
      </ElCol>
      <ElCol :md="12">
        <EchartSkeleton title="十二个月的销售额" :loadFn="statisticsStore.getMonthPriceCount">
          <LineBarEcharts v-bind="monthPriceCount" :isDark="isDark"></LineBarEcharts>
        </EchartSkeleton>
      </ElCol>
    </ElRow>
  </div>
</template>

<script lang="ts" setup>
import { useStatisticsStore } from "@/store/statistics";
import { useThemeStore } from "@/store/theme";
import EchartSkeleton from "@/components/EchartSkeleton.vue";
import { storeToRefs } from "pinia";

const statisticsStore = useStatisticsStore();
const isShow = ref(false);
provide("isShow", isShow);
(async () => {})();
const themeStore = useThemeStore();
const isDark = computed(() => {
  return themeStore.isDark;
});
const { adminSexCount, orderCount, categoryGoodsCount, monthPriceCount } =
  storeToRefs(statisticsStore);
onActivated(() => {
  isShow.value = true;
});
onDeactivated(() => {
  isShow.value = false;
});
</script>

<style scoped lang="scss">
.statistics-view {
  .el-row {
    &:first-child {
      margin-bottom: 20px;
    }
    .el-col {
      &:first-child {
        margin-bottom: 20px;
      }
    }
  }
}
</style>
