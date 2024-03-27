<template>
  <div class="login">
    <login-panel></login-panel>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import LoginPanel from './cpns/login-panel.vue';
export default defineComponent({
  components: {
    LoginPanel
  },
  setup() {
    return {};
  }
});
</script>

<style scoped lang="less">
.login {
  width: 100%;
  height: 100%;
  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0px;
    left: 0px;
    background: url(../../assets/img/login_bg.jpg) 0% / 100% 100% no-repeat
      fixed;
    filter: blur(12px);
    z-index: -1;
  }
}
</style>
