<template>
  <div class="login-view">
    <LoginPanel></LoginPanel>
  </div>
</template>

<script setup lang="ts">
import LoginPanel from "./cpns/LoginPanel.vue";
</script>

<style scoped lang="scss">
.login-view {
  position: relative;
  height: 100%;
  background: linear-gradient(to right, rgb(191, 227, 241), rgb(170 221 241));
}
</style>
