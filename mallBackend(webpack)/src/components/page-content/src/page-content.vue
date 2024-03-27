<template>
  <div class="pageContent">
    <DiyTable
      :data="List"
      v-bind="contentTableConfig"
      :total="ListCount"
      v-model:pagination="pagination"
    >
      <template #handler v-if="contentTableConfig.addTitle">
        <el-button type="primary" @click="handleAddClick">{{
          contentTableConfig.addTitle
        }}</el-button>
      </template>
      <!-- 状态 -->
      <template #status="scope">
        <el-button
          plain
          size="small"
          :type="scope.row.Status ? 'success' : 'danger'"
          >{{ scope.row.Status ? '启用' : '禁用' }}</el-button
        >
      </template>
      <!-- 编辑删除操作 -->
      <template #operate="scope">
        <div class="operate">
          <el-link
            :underline="false"
            type="primary"
            @click="handleEditClick(scope.row)"
          >
            <template #icon>
              <i-ep-edit />
            </template>
            编辑</el-link
          >
          <el-link
            :underline="false"
            type="primary"
            @click="handleDeleteClick(scope.row)"
          >
            <template #icon>
              <i-ep-delete />
            </template>
            删除
          </el-link>
        </div>
      </template>
      <!-- <template #created_at>
    {{ $tool.formatTime('2021-08-12T01:49:08.000Z') }}
  </template> -->
      <!-- 其他不是公用的插槽 -->
      <template
        v-for="item in otherPropSlots"
        :key="item.prop"
        #[item.slotName]="scope"
      >
        <template v-if="item.slotName">
          <slot :row="scope.row" :name="item.slotName"></slot>
        </template>
      </template>
    </DiyTable>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref, watch, PropType } from 'vue';
import DiyTable from '@/base-ui/table';
import { useStore } from '@/store';
import { formatUtcToString } from '@/utils/data-format';

export default defineComponent({
  props: {
    contentTableConfig: {
      type: Object as PropType<any>,
      required: true
    },
    pageName: {
      type: String,
      required: true
    },
    getFormData: {
      type: Object,
      required: true
    }
  },
  components: { DiyTable },
  emits: ['addBtnClick', 'editBtnClick'],
  setup(props, { emit }) {
    const store = useStore();
    const pagination = ref({ currentPage: 1, pageSize: 10 });
    watch(pagination, () => getPageData(props.getFormData));
    //数据更新
    const getPageData = (queryInfo: any = {}) => {
      if (queryInfo?.betweenTime) {
        const betweenTime = queryInfo.betweenTime;
        betweenTime[0] = formatUtcToString(betweenTime[0]);
        betweenTime[1] = formatUtcToString(betweenTime[1]);
      }
      store.dispatch('systemModule/getPageListAction', {
        pageName: props.pageName,
        queryInfo: {
          page: pagination.value.currentPage,
          limit: pagination.value.pageSize,
          ...queryInfo
        }
      });
    };
    getPageData(props.getFormData);
    const List = computed(
      //第一种写法通过拼接
      // () => (store.state.systemModule as any)[`${props.pageName}List`]
      //第二种通过getter
      () => store.getters['systemModule/pageListData'](props.pageName)
    );
    const ListCount = computed(
      //第一种写法通过拼接
      // () => (store.state.systemModule as any)[`${props.pageName}ListCount`]
      //第二种通过getter
      () => store.getters['systemModule/pageListCount'](props.pageName)
    );
    const otherPropSlots = props.contentTableConfig?.propList.filter(
      (item: any) => {
        if (item.slotName === 'status') return false;
        if (item.slotName === 'operate') return false;
        return true;
      }
    );
    //增加操作
    const handleAddClick = () => {
      emit('addBtnClick');
    };
    //修改操作
    const handleEditClick = (item: any) => {
      emit('editBtnClick', item);
    };
    // 删除操作
    const handleDeleteClick = async (item: any) => {
      try {
        await ElMessageBox.confirm('是否删除这一项?', '警告', {
          confirmButtonText: '确认',
          cancelButtonText: '取消',
          type: 'warning'
        });
        const id = item.id ?? item.Goodid ?? item.Cid;
        await store.dispatch('systemModule/deletePageDataAction', {
          pageName: props.pageName,
          id
        });
        ElMessage({
          type: 'success',
          message: '删除成功'
        });
      } catch (error) {
        ElMessage({
          type: 'info',
          message: '删除失败'
        });
      }
    };
    return {
      List,
      ListCount,
      getPageData,
      pagination,
      otherPropSlots,
      handleDeleteClick,
      handleAddClick,
      handleEditClick
    };
  }
});
</script>

<style scoped lang="less">
.pageContent {
  width: 100%;
  height: 100%;
  .operate {
    .el-link {
      font-size: 12px;
      padding: 0 5px;
    }
  }
}
</style>
