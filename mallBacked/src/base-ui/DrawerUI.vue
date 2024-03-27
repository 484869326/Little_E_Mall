<template>
  <div class="drawer-ui">
    <el-drawer
      :direction="direction"
      v-model="visible"
      :with-header="false"
      :destroy-on-close="true"
    >
      <div class="close-icon" @click="visible = false">
        <IEpClose></IEpClose>
      </div>
      <slot name="default"> </slot>
    </el-drawer>
  </div>
</template>

<script setup lang="ts">
type DirectionType = "ltr" | "rtl" | "ttb" | "btt";
defineProps({
  direction: {
    type: String as () => DirectionType,
    default: "rtl",
    validator: (value: string) => {
      // 左右上下
      return ["ltr", "rtl", "ttb", "btt"].includes(value);
    }
  }
});
const visible = defineModel("visible", { default: false });
</script>

<style scoped lang="scss">
.drawer-ui {
  :deep(.el-drawer) {
    @include useTheme {
      background: getVar("bgColor");
    }
    .el-drawer__body {
      position: relative;
      .close-icon {
        position: absolute;
        right: 20px;
        cursor: pointer;
      }
    }
  }
}
</style>
