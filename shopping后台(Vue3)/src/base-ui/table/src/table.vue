<template>
  <div class="tableList">
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
    <el-table
      :data="data"
      border
      style="width: 100%"
      @selection-change="handleSelectChange"
      height="400px"
      v-bind="childrenProps"
    >
      <!-- 展示可选框 -->
      <template v-if="showSelectColumn">
        <el-table-column type="selection" align="center" width="60px" />
      </template>
      <!-- 展示前面序号 -->
      <template v-if="showIndexColumn">
        <el-table-column
          type="index"
          label="序号"
          align="center"
          width="60px"
        />
      </template>
      <template v-for="item in propList" :key="item.prop">
        <el-table-column v-bind="item" align="center" show-overflow-tooltip>
          <template #default="scope">
            <slot :name="item.slotName" :row="scope.row">
              {{ scope.row[item.prop] }}</slot
            >
          </template>
        </el-table-column>
      </template>
    </el-table>
    <!-- 分页 -->
    <div class="footer" v-if="total">
      <slot name="footer">
        <el-pagination
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

<script lang="ts">
import { defineComponent, PropType, ref } from 'vue';
export default defineComponent({
  name: 'DiyTable',
  props: {
    title: { type: String, default: '' },
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
      default: null
    },
    propList: {
      type: Array as PropType<any>,
      required: true
    },
    pagination: {
      type: Object,
      default: () => ({ currentPage: 0, pageSize: 10 })
    },
    childrenProps: {
      type: Object,
      default: () => ({})
    }
  },
  emits: ['selectionChange', 'update:pagination'],
  setup(props, { emit }) {
    const handleSelectChange = (value: any) => {
      emit('selectionChange', value);
    };
    const localPagination = ref({ ...props.pagination });
    const handleCurrentChange = (currentPage: number) => {
      emit('update:pagination', { ...props.pagination, currentPage });
    };
    const handleSizeChange = (pageSize: number) => {
      emit('update:pagination', { ...props.pagination, pageSize });
    };
    return {
      handleSelectChange,
      localPagination,
      handleSizeChange,
      handleCurrentChange
    };
  }
});
</script>

<style scoped lang="less">
@distance: 20px;
.tableList {
  margin: @distance 0;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 6px 18px 0 rgb(60 70 79 / 10%);
  padding: @distance;
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 5px;
    margin-bottom: @distance;
    .title {
      font-size: 18px;
      font-weight: bold;
    }
    .handler {
      align-items: center;
    }
  }
  ::v-deep(.el-table__cell) {
    position: static !important; // 解决el-image 和 el-table冲突层级冲突问题
  }
  .footer {
    display: flex;
    justify-content: right;
    margin-top: @distance;
  }
}
</style>
