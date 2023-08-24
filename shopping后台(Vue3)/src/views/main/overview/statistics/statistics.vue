<template>
  <div class="statistics">
    <DiyCard title="关于"></DiyCard>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import DiyCard from '@/base-ui/card';
export default defineComponent({
  name: 'statistics',
  components: {
    DiyCard
  },
  setup() {
    return {};
  }
});
</script>

<style scoped></style>
