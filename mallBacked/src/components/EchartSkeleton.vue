<template>
  <div class="echart-skeleton" v-if="isShow">
    <Suspense>
      <template #default>
        <DiyCard :title="title">
          <slot></slot>
        </DiyCard>
      </template>
      <template #fallback>
        <ElCard>
          <template #header>
            <ElSkeleton animated>
              <template #template>
                <ElSkeletonItem variant="p" />
              </template>
            </ElSkeleton>
          </template>
          <ElSkeleton animated>
            <template #template>
              <ElSkeletonItem variant="image" style="height: 300px" />
            </template>
          </ElSkeleton>
        </ElCard>
      </template>
    </Suspense>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    default: ""
  },
  loadFn: {
    type: Function,
    default: () => {}
  }
});
const isShow: any = inject("isShow");
let DiyCard: any = null;
watchEffect(() => {
  if (!isShow.value) {
    DiyCard = null;
    return;
  }
  DiyCard = defineAsyncComponent(() => {
    return (async () => {
      await props.loadFn();
      return import("@/base-ui/CardUI.vue");
    })();
  });
});
</script>

<style scoped lang="scss">
.echart-skeleton {
  .el-row {
    &:first-child {
      margin-bottom: 20px;
    }
    .el-col {
      &:first-child {
        margin-bottom: 20px;
      }
    }
  }
}
</style>
