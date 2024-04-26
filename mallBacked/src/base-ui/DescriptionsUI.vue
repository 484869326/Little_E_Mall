<template>
  <div class="description-ui">
    <ElDescriptions :title="title" :column="column" border>
      <template v-for="itemData in tableData" :key="itemData.name">
        <ElDescriptionsItem>
          <template #label> {{ itemData.name }} </template>
          <ElTag size="small">{{ itemData.description }}</ElTag>
        </ElDescriptionsItem>
      </template>
    </ElDescriptions>
  </div>
</template>

<script lang="ts" setup>
import type { PropType } from "vue";
import type { IDescriptionProp } from "@/types/baseUI";

defineProps({
  title: {
    type: String,
    default: ""
  },
  column: {
    type: Number,
    default: 1
  },
  tableData: {
    type: Array as PropType<IDescriptionProp[]>,
    default: () => []
  }
});
</script>

<style scoped lang="scss">
.description-ui {
  margin-bottom: 20px;
  :deep(.el-descriptions) {
    .el-descriptions__title {
      @include useTheme {
        color: getVar("textColor");
      }
    }
    .el-descriptions__body {
      .el-descriptions__cell {
        @include useTheme {
          border-color: getVar("borderColor");
        }
        &.el-descriptions__label {
          @include useTheme {
            color: getVar("textColor");
            background: getVar("hoverColor");
          }
        }
        &.el-descriptions__content {
          @include useTheme {
            background: getVar("bgColor");
          }
        }
        .el-tag {
          @include useTheme {
            background: getVar("buttonHoverBgColor");
            border-color: getVar("buttonHoverBorderColor");
          }
          @include responseTo("phone") {
            height: fit-content;
          }
          .el-tag__content {
            @include responseTo("phone") {
              line-height: 24px;
              white-space: pre-wrap;
            }
          }
        }
      }
    }
  }
}
</style>
