<template>
  <div class="login-panel">
    <!-- 猫头鹰盒子 -->
    <div class="owl-box" :class="{ 'owl-active-box': isFocus }">
      <i class="son-owl hand-left hided"></i>
      <i class="son-owl head"></i>
      <i class="son-owl hand-right hided" :class="{ view: !isPwd || showView }"></i>
    </div>
    <div class="title">小E商城后台管理系统</div>
    <ElForm :rules="rules" :model="account" ref="FormRef">
      <ElFormItem prop="username">
        <ElInput v-model="account.username" placeholder="账号" class="login_input"></ElInput>
      </ElFormItem>
      <ElFormItem prop="password">
        <ElInput
          :type="isPwd ? 'password' : 'text'"
          v-model="account.password"
          placeholder="密码"
          class="login_input"
          @focus="handleChangeFocus"
          @blur="isFocus = false"
        >
          <template #suffix>
            <span @click="isPwd = !isPwd" class="pwd-icon">
              <ElIcon>
                <template v-if="isPwd">
                  <IEpHide />
                </template>
                <template v-else>
                  <IEpView />
                </template>
              </ElIcon>
            </span>
          </template>
        </ElInput>
      </ElFormItem>
      <ElFormItem>
        <ElButton type="primary" class="login_btn" @click="handleLoginClick">登录</ElButton>
      </ElFormItem>
    </ElForm>
  </div>
</template>

<script setup lang="ts">
import { useLoginStore } from "@/store/login";
import type { FormInstance } from "element-plus";
import { rules } from "../config/rules";
import { delay } from "@/utils";
import { bubbleDom } from "@/utils/bubbleDom";

const isFocus = ref(false);
const isPwd = ref(true);
const showView = ref(false);
const loginStore = useLoginStore();
const account = reactive({
  username: "admin",
  password: "admin"
});
const FormRef = ref<FormInstance>();
function handleLoginClick() {
  FormRef.value?.validate((valid) => {
    if (valid) {
      loginStore.loginAction({ ...account });
    }
  });
}
async function handleChangeFocus() {
  isFocus.value = !isFocus.value;
  if (!isPwd.value) return;
  await delay(500);
  showView.value = true;
  await delay(500);
  showView.value = false;
}
onMounted(() => {
  bubbleDom.mount();
});
onUnmounted(() => {
  bubbleDom.unmount();
});
</script>

<style scoped lang="scss">
$left: -50px;
.login-panel {
  position: relative;
  max-width: 400px;
  left: 50%;
  top: 40%;
  transform: translate(-50%, -50%);
  padding: 40px 40px 20px;
  border: 1px solid rgba(255, 255, 255, 0.6);
  box-shadow: 2px 1px 19px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  z-index: 2;
  //猫头鹰盒子
  .owl-box {
    position: absolute;
    text-align: center;
    top: 0;
    left: 50%;
    transform: translate(-50%, -90%);
    z-index: -1;
    .son-owl {
      position: relative;
      background-image: url(@/assets/img/sprt_eagle.png);
      background-repeat: no-repeat;
      display: inline-block;
      vertical-align: bottom;
      &.head {
        height: 91px;
        width: 97px;
        background-position: -30px 0px;
        z-index: -1;
      }
      &.hand-left,
      &.hand-right {
        width: 30px;
        height: 20px;
        z-index: 200;
        background-position: 0px -71px;
        transition: left 0.5s ease-out;
      }
      &.hand-left {
        left: -30px;
      }
      &.hand-right {
        left: 30px;
      }
    }
    &.owl-active-box {
      .hided {
        height: 37px;
        bottom: 0;
      }
      .hand-left {
        &.hided {
          left: 40px;
          background-position: 2px 0;
        }
      }
      .hand-right {
        &.hided {
          left: -40px;
          background-position: -127px 0px;
        }
        &.view {
          left: -25px;
        }
      }
    }
  }
  .title {
    font-size: 32px;
    font-weight: 700;
    letter-spacing: 2px;
    color: white;
    margin-bottom: 20px;
    text-align: center;
    text-shadow: 4px 4px 3px rgba(0, 0, 0, 0.1);
  }
  .el-form-item {
    margin-bottom: 30px;
    .pwd-icon {
      &:hover {
        cursor: pointer;
      }
    }
    .login_input {
      height: 40px;
    }
    .login_btn {
      width: 100%;
      height: 45px;
      margin: 0 auto;
    }
  }
}
</style>
