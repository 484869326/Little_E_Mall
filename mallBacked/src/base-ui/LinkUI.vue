<template>
  <div class="link-ui">
    <template v-for="(item, index) in textArrays" :key="index">
      <div class="item">
        <span class="title">{{ item.title }} : </span>
        <ElLink type="primary">{{ item.desp }}</ElLink>
      </div>
    </template>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    textArrays: {
      type: Array as any,
      default: () => []
    }
  },

  setup() {
    return {};
  }
});
</script>

<style scoped lang="scss">
.link-ui {
  padding: 0 15px;
  margin-bottom: 40px;
  text-align: left;

  .title {
    position: relative;
    display: inline-block;
    margin-right: 20px;
  }

  .item {
    margin: 5px;
  }

  .title::before {
    content: "";
    position: absolute;
    top: 40%;
    left: -15px;
    width: 5px;
    height: 5px;
    border-radius: 100%;
    @include useTheme {
      background: getVar("textColor");
    }
  }
}
</style>
./LinkUI.vue
