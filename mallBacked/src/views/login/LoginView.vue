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
  @include useTheme {
    background: getVar("loginBgColor");
  }
}
</style>
