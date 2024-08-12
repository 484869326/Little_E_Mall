<template>
  <div class="login-panel">
    <ElForm :rules="rules" :model="account" ref="FormRef" @submit.prevent>
      <ElFormItem prop="username">
        <ElInput v-model="account.username" placeholder="账号" class="login-input"></ElInput>
      </ElFormItem>
      <ElFormItem prop="password">
        <ElInput
          :type="isPwd ? 'password' : 'text'"
          v-model="account.password"
          placeholder="密码"
          class="login-input"
          @focus="$emit('changeFocus')"
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
        <ElButton type="primary" native-type="submit" class="login-btn" @click="handleLoginClick"
          >登录</ElButton
        >
      </ElFormItem>
    </ElForm>
  </div>
</template>

<script setup lang="ts">
import { useLoginStore } from "@/store/login";
import type { FormInstance } from "element-plus";
import { rules } from "../config/loginRule";

const isPwd = defineModel("isPwd");
const isFocus = defineModel("isFocus");
const emits = defineEmits(["changeFocus"]);
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
</script>

<style scoped lang="scss">
.login-panel {
  .el-form-item {
    margin-bottom: 30px;
    .pwd-icon {
      &:hover {
        cursor: pointer;
      }
    }
    .login-input {
      height: 40px;
    }
    .login-btn {
      width: 100%;
      height: 45px;
      margin: 0 auto;
    }
  }
}
</style>
