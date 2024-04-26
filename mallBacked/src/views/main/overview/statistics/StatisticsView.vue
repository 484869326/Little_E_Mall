<template>
  <div class="statistics-view">
    <ElRow :gutter="30" class="el-row">
      <ElCol :md="12">
        <DiyCard title="管理员性别比例">
          <PieEcharts :pieData="adminSexCount" :isDark="isDark"></PieEcharts>
        </DiyCard>
      </ElCol>
      <ElCol :md="12">
        <DiyCard title="近7日订单数">
          <LineEcharts v-bind="orderCount" :isDark="isDark"></LineEcharts>
        </DiyCard>
      </ElCol>
    </ElRow>
    <ElRow :gutter="30">
      <ElCol :md="12">
        <DiyCard title="分类商品数量">
          <BarEcharts v-bind="categoryGoodsCount" :isDark="isDark"></BarEcharts>
        </DiyCard>
      </ElCol>
      <ElCol :md="12">
        <DiyCard title="十二个月的销售额">
          <LineBarEcharts v-bind="monthPriceCount" :isDark="isDark"></LineBarEcharts>
        </DiyCard>
      </ElCol>
    </ElRow>
  </div>
</template>

<script lang="ts" setup>
import { useStatisticsStore } from "@/store/statistics";
import { useThemeStore } from "@/store/theme";
import DiyCard from "@/base-ui/CardUI.vue";

const statisticsStore = useStatisticsStore();
statisticsStore.getStatisticsDataAction();
const themeStore = useThemeStore();

const isDark = computed(() => {
  return themeStore.isDark;
});
const adminSexCount = computed(() => {
  return statisticsStore.adminSexCount.map((item: any) => {
    return { name: item.gender ? "女" : "男", value: item.count };
  });
});
const orderCount = computed(() => {
  const xLabels: string[] = [];
  const values: any[] = [];
  for (const item of statisticsStore.orderCount) {
    xLabels.push(item.date);
    values.push(item.count);
  }
  return { xLabels, values };
});
const categoryGoodsCount = computed(() => {
  const xLabels: string[] = [];
  const values: any[] = [];
  for (const item of statisticsStore.categoryGoodsCount) {
    xLabels.push(item.cName);
    values.push(item.count);
  }
  return { xLabels, values };
});
const monthPriceCount = computed(() => {
  const xLabels: string[] = [];
  const values: any[] = [];
  for (const item of statisticsStore.monthPriceCount) {
    xLabels.push(item.month);
    values.push(item.price);
  }
  return { xLabels, values };
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
