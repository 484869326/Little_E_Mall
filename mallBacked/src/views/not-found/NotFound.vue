<template>
  <div class="container">
    <h1>404</h1>
    <p>您正在查找的页面可能已被删除或暂时不可用。</p>
    <ElButton type="success" size="large" @click="$router.push('/main')">返回首页</ElButton>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped lang="scss">
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
}
</style>
