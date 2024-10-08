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
            <el-skeleton animated>
              <template #template>
                <el-skeleton-item variant="p" />
              </template>
            </el-skeleton>
          </template>
          <el-skeleton animated>
            <template #template>
              <el-skeleton-item variant="image" style="height: 300px" />
            </template>
          </el-skeleton>
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
  }
});
const complete: any = inject("complete");
const isShow: any = inject("isShow");
function isComplete() {
  let timer: any = null;
  return new Promise((resolve, reject) => {
    timer = setInterval(() => {
      if (complete.value) {
        resolve(true);
        clearInterval(timer);
        timer = null;
      }
    }, 1000);
  });
}
let DiyCard: any = null;
watchEffect(() => {
  if (!isShow.value) {
    DiyCard = null;
    return;
  }
  DiyCard = defineAsyncComponent(() => {
    return (async () => {
      await isComplete();
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
