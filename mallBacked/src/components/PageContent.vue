<template>
  <div class="page-content">
    <DiyTable
      :data="mainStore.getList(pageName)"
      v-bind="contentTableConfig"
      :total="mainStore.getListCount(pageName)"
      v-model:pagination="pagination"
    >
      <template #handler v-if="contentTableConfig.addTitle && isCreate">
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
          <template v-if="isUpdate">
            <ElLink :underline="false" type="primary" @click="handleEditClick(scope.row)">
              <template #icon>
                <IEpEdit></IEpEdit>
              </template>
              编辑</ElLink
            >
          </template>
          <template v-if="isDelete">
            <ElLink :underline="false" type="primary" @click="handleDeleteClick(scope.row)">
              <template #icon>
                <IEpDelete></IEpDelete>
              </template>
              删除
            </ElLink>
          </template>
        </div>
      </template>
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
import { usePermission } from "@/hook/usePermission";

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

const isCreate = usePermission(props.pageName, "create");
const isDelete = usePermission(props.pageName, "delete");
const isUpdate = usePermission(props.pageName, "edit");
const isQuery = usePermission(props.pageName, "query");

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
    const message = await mainStore.deletePageDataAction(props.pageName, id);
    ElMessage({
      type: "success",
      message
    });
    getPageData(props.getFormData);
  } catch (error: any) {
    ElMessage({
      type: "info",
      message: error.response.data.msg || "删除失败"
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
  .operate {
    .el-link {
      font-size: 12px;
      padding: 0 5px;
    }
  }
}
</style>
