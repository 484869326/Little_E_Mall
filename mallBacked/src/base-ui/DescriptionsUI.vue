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
}
</style>
