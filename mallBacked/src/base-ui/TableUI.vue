<template>
  <div class="table-UI">
    <!-- 标题和增加 -->
    <div class="header">
      <slot name="header">
        <div class="title">{{ title }}</div>
        <div class="handler">
          <slot name="handler"></slot>
        </div>
      </slot>
    </div>
    <!-- 表格 -->
    <ElTable
      :data="data"
      border
      style="width: 100%"
      @selection-change="handleSelectChange"
      v-bind="childrenProps"
      class="el-table-ui"
    >
      <!-- 展示可选框 -->
      <template v-if="showSelectColumn">
        <ElTableColumn type="selection" align="center" width="60px" />
      </template>
      <!-- 展示前面序号 -->
      <template v-if="showIndexColumn">
        <ElTableColumn type="index" label="序号" align="center" width="60px" />
      </template>
      <template v-for="item in propList" :key="item.label">
        <ElTableColumn v-bind="item" align="center" show-overflow-tooltip>
          <template #default="scope">
            <slot :name="item.slotName" :row="scope.row"> {{ scope.row[item.prop ?? ""] }}</slot>
          </template>
        </ElTableColumn>
      </template>
    </ElTable>
    <!-- 分页 -->
    <div class="footer" v-if="total">
      <slot name="footer">
        <ElPagination
          v-model:current-page="localPagination.currentPage"
          v-model:page-size="localPagination.pageSize"
          :page-sizes="[10, 20, 30, 40]"
          layout="total, sizes, prev, pager, next, jumper"
          :total="total"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
      /></slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { PropType } from "vue";
import type { ITable } from "@/types/baseUI";

const props = defineProps({
  title: { type: String, default: "" },
  showSelectColumn: { type: Boolean, default: true },
  showIndexColumn: {
    type: Boolean,
    default: true
  },
  data: {
    type: Array,
    required: true
  },
  total: {
    type: Number,
    default: 0
  },
  propList: {
    type: Array as PropType<ITable[]>,
    required: true
  },
  pagination: {
    type: Object,
    default: () => ({ currentPage: 1, pageSize: 10 })
  },
  childrenProps: {
    type: Object,
    default: () => ({})
  }
});
const emit = defineEmits(["selectionChange", "update:pagination"]);

const handleSelectChange = (value: any) => {
  emit("selectionChange", value);
};
const localPagination = reactive({ ...props.pagination });

const handleCurrentChange = (currentPage: number) => {
  emit("update:pagination", { ...props.pagination, currentPage });
};
const handleSizeChange = (pageSize: number) => {
  emit("update:pagination", { ...props.pagination, pageSize });
};

//改变自身
watchEffect(() => {
  localPagination.currentPage = props.pagination.currentPage;
  localPagination.pageSize = props.pagination.pageSize;
});
</script>

<style scoped lang="scss">
$distance: 20px;
.table-UI {
  margin: $distance 0;
  border-radius: 5px;
  padding: $distance;
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 5px;
    margin-bottom: $distance;
    .title {
      font-size: 18px;
      font-weight: bold;
    }
    .handler {
      align-items: center;
    }
  }
  :deep(.el-table__cell) {
    position: static !important; // 解决el-image 和 el-table冲突层级冲突问题
  }
  .footer {
    display: flex;
    justify-content: right;
    margin-top: $distance;
  }
}
</style>
