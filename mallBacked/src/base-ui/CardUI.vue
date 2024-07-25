<template>
  <ElCard class="card-ui">
    <template #header>
      <div class="card-header">
        {{ title }}
      </div>
    </template>
    <div class="item">
      <slot></slot>
    </div>
  </ElCard>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    title: {
      type: String,
      default: ""
    }
  },
  setup() {
    return {};
  }
});
</script>

<style scoped lang="scss">
.card-ui {
  transition: none;
  :deep(.el-card__header) {
    padding: 10px 20px !important;
    .card-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 30px;
    }
  }
  .item {
    margin-bottom: 10px;
  }
}
</style>
