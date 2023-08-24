<template>
  <div class="container">
    <h1>404</h1>
    <p>您正在查找的页面可能已被删除或暂时不可用。</p>
    <a href="/">返回首页</a>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  setup() {
    return {};
  }
});
</script>

<style scoped lang="less">
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 0;
  height: 100%;
  h1 {
    margin: 0 0 20px;
    font-size: 48px;
    color: #333;
  }

  p {
    font-size: 18px;
    color: #777;
    margin-bottom: 40px;
  }

  a {
    color: #fff;
    background-color: #4caf50;
    padding: 10px 20px;
    text-decoration: none;
    border-radius: 4px;
    transition: background-color 0.3s ease;
    &:hover {
      background-color: #45a049;
    }
  }
}
</style>
