<template>
  <div class="statistics">
    <el-row :gutter="30" class="elRow">
      <el-col :span="12">
        <DiyCard title="管理员性别比例">
          <PieEchart :pieData="adminSexCount"></PieEchart>
        </DiyCard>
      </el-col>
      <el-col :span="12">
        <DiyCard title="近7日订单数">
          <LineEchart v-bind="orderCount"></LineEchart>
        </DiyCard>
      </el-col>
    </el-row>
    <el-row :gutter="30">
      <el-col :span="12">
        <DiyCard title="分类商品数量">
          <BarEchart v-bind="categoryGoodsCount"></BarEchart>
        </DiyCard>
      </el-col>
      <el-col :span="12">
        <DiyCard title="十二个月的销售额">
          <LineBarEchart v-bind="monthPriceCount"></LineBarEchart>
        </DiyCard>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import DiyCard from '@/base-ui/card';
import { useStore } from '@/store';
export default defineComponent({
  name: 'statistics',
  components: {
    DiyCard
  },
  setup() {
    const store = useStore();
    store.dispatch('statisticsModule/getStatisticsDataAction');
    const adminSexCount = computed(() => {
      return store.state.statisticsModule.adminSexCount.map((item: any) => {
        return { name: item.sex, value: item.count };
      });
    });
    const orderCount: any = computed(() => {
      const xLabels: string[] = [];
      const values: any[] = [];
      const orderCount = store.state.statisticsModule.orderCount;
      for (const item of orderCount) {
        xLabels.push(item.date);
        values.push(item.count);
      }
      return { xLabels, values };
    });
    const categoryGoodsCount: any = computed(() => {
      const xLabels: string[] = [];
      const values: any[] = [];
      const orderCount = store.state.statisticsModule.categoryGoodsCount;
      for (const item of orderCount) {
        xLabels.push(item.Cname);
        values.push(item.count);
      }
      return { xLabels, values };
    });
    const monthPriceCount: any = computed(() => {
      const xLabels: string[] = [];
      const values: any[] = [];
      const orderCount = store.state.statisticsModule.monthPriceCount;
      for (const item of orderCount) {
        xLabels.push(item.month);
        values.push(item.price);
      }
      return { xLabels, values };
    });
    return { adminSexCount, orderCount, categoryGoodsCount, monthPriceCount };
  }
});
</script>

<style scoped lang="less">
.statistics {
  .elRow {
    margin-bottom: 20px;
  }
}
</style>
