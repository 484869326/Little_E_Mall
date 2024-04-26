<template>
  <div class="page-content">
    <DiyTable
      :data="mainStore.getList(pageName)"
      v-bind="contentTableConfig"
      :total="mainStore.getListCount(pageName)"
      v-model:pagination="pagination"
    >
      <template #handler v-if="contentTableConfig.addTitle">
        <ElButton type="primary" @click="handleAddClick">{{
          contentTableConfig.addTitle
        }}</ElButton>
      </template>
      <!-- 状态 -->
      <template #status="scope">
        <ElButton plain size="small" :type="scope.row.status ? 'success' : 'danger'">{{
          scope.row.status ? "启用" : "禁用"
        }}</ElButton>
      </template>
      <!-- 编辑删除操作 -->
      <template #operate="scope">
        <div class="operate">
          <ElLink :underline="false" type="primary" @click="handleEditClick(scope.row)">
            <template #icon>
              <IEpEdit></IEpEdit>
            </template>
            编辑</ElLink
          >
          <ElLink :underline="false" type="primary" @click="handleDeleteClick(scope.row)">
            <template #icon>
              <IEpDelete></IEpDelete>
            </template>
            删除
          </ElLink>
        </div>
      </template>
      <!-- <template #created_at>
    {{ $tool.formatTime('2021-08-12T01:49:08.000Z') }}
  </template> -->
      <!-- 其他不是公用的插槽 -->
      <template
        v-for="item in otherPropSlots"
        :key="item.prop"
        v-slot:[String(item.slotName)]="scope"
      >
        <template v-if="item.slotName">
          <slot :row="scope.row" :name="item.slotName"></slot>
        </template>
      </template>
    </DiyTable>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch } from "vue";
import type { PropType } from "vue";
import DiyTable from "@/base-ui/TableUI.vue";
import { useMainStore } from "@/store/main";
import type { ITable } from "@/types/baseUI";

const props = defineProps({
  contentTableConfig: {
    type: Object as PropType<{
      title?: string;
      addTitle?: string;
      propList: ITable[];
      showSelectColumn?: boolean;
      childrenProps?: any;
    }>,
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
});
const emit = defineEmits(["addBtnClick", "editBtnClick"]);
const mainStore = useMainStore();
const pagination = ref({ currentPage: 1, pageSize: 10 });
function paginationWatch() {
  return watch(pagination, () => getPageData(props.getFormData));
}
let unWatch = paginationWatch();
//页面初始化
const initPagination = () => {
  pagination.value = { currentPage: 1, pageSize: 10 };
  unWatch();
  unWatch = paginationWatch();
};
//数据更新
const getPageData = (queryInfo: any = {}) => {
  if (queryInfo["betweenTime"]) {
    const betweenTime = queryInfo["betweenTime"];
    betweenTime[0] = betweenTime[0] + " 00:00";
    betweenTime[1] = betweenTime[1] + " 23:59";
  }
  mainStore.getPageListAction(props.pageName, {
    page: pagination.value.currentPage,
    limit: pagination.value.pageSize,
    ...queryInfo
  });
};
getPageData(props.getFormData);
const otherPropSlots = props.contentTableConfig?.propList.filter((item: any) => {
  return !(item.slotName === "status" || item.slotName === "operate");
});
//增加操作
const handleAddClick = () => {
  emit("addBtnClick");
};
//修改操作
const handleEditClick = (item: any) => {
  emit("editBtnClick", item);
};
// 删除操作
const handleDeleteClick = async (item: any) => {
  try {
    await ElMessageBox.confirm("是否删除这一项?", "警告", {
      confirmButtonText: "确认",
      cancelButtonText: "取消",
      type: "warning"
    });
    const id = item.id ?? item.goodId ?? item.cid;
    await mainStore.deletePageDataAction(props.pageName, id);
    ElMessage({
      type: "success",
      message: "删除成功"
    });
    getPageData(props.getFormData);
  } catch (error: any) {
    ElMessage({
      type: "info",
      message: error.message || "删除失败"
    });
  }
};
defineExpose({
  getPageData,
  initPagination
});
</script>

<style scoped lang="scss">
.page-content {
  width: 100%;
  height: 100%;
  margin-top: 10px;
  box-shadow: 0 6px 18px 0 rgb(60 70 79 / 10%);
  border-radius: 5px;
  @include useTheme {
    border: 1px solid getVar("borderColor");
  }
  :deep(.table-UI) {
    .el-table-ui {
      background-color: transparent;
      &::before,
      &::after {
        @include useTheme {
          background-color: getVar("borderColor");
        }
      }
      .el-table__inner-wrapper {
        &::before,
        &::after {
          @include useTheme {
            background-color: getVar("borderColor");
          }
        }
        .el-table__border-left-patch {
          opacity: 0;
        }
      }
      .el-table__cell {
        transition: none;
        @include useTheme {
          background: getVar("bgColor");
          color: getVar("regularTextColor");
          border-right-color: getVar("borderColor");
          border-bottom-color: getVar("borderColor");
        }
      }
    }
  }
  :deep(.el-pagination) {
    .el-pagination__total.is-first,
    .el-pagination__goto,
    .el-pagination__classifier {
      @include useTheme {
        color: getVar("regularTextColor");
      }
    }
    .el-select__wrapper,
    .el-input__wrapper {
      background: transparent;
      transition: none;
      @include useTheme {
        box-shadow: inset 0 0 0 1px getVar("boxShadowColor");
      }
      &.is-focused,
      &.is-focus {
        box-shadow: inset 0 0 0 1px getVar("primaryColor") !important;
      }
      &:hover:not(.is-focused, .is-focus) {
        @include useTheme {
          box-shadow: inset 0 0 0 1px getVar("hoverBorderColor") !important;
        }
      }
      .el-select__selected-item,
      .el-icon,
      .el-input__inner {
        @include useTheme {
          color: getVar("regularTextColor");
        }
      }
    }
    .btn-prev,
    .btn-next {
      background: transparent;
      @include useTheme {
        color: getVar("regularTextColor");
      }
    }
    .el-pager {
      li {
        background: transparent;
        @include useTheme {
          color: getVar("regularTextColor");
        }
        &.is-active {
          @include useTheme {
            color: #409eff;
          }
        }
      }
    }
  }
  .operate {
    .el-link {
      font-size: 12px;
      padding: 0 5px;
    }
  }
}
</style>
