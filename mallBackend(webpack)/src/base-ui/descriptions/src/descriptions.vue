<template>
  <div class="description">
    <el-descriptions :title="title" :column="column" border>
      <template v-for="itemData in tableDatas" :key="itemData.name">
        <el-descriptions-item>
          <template #label> {{ itemData.name }} </template>
          <el-tag size="small">{{ itemData.description }}</el-tag>
        </el-descriptions-item>
      </template>
    </el-descriptions>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import type { IDescriptionProp } from '../type';
export default defineComponent({
  components: {},
  props: {
    title: {
      type: String,
      default: ''
    },
    column: {
      type: Number,
      default: 1
    },
    tableDatas: {
      type: Array as PropType<IDescriptionProp[]>,
      default: () => []
    }
  },
  setup() {
    return {};
  }
});
</script>

<style scoped>
.description {
  margin-bottom: 20px;
}
</style>
