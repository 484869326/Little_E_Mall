<template>
  <div class="register-panel">
    <ElForm :rules="rulesComputed" :model="account" ref="FormRef">
      <ElFormItem prop="adminName">
        <ElInput v-model="account.adminName" placeholder="账号" class="register-input"></ElInput>
      </ElFormItem>
      <ElFormItem prop="tel">
        <ElInput v-model="account.tel" placeholder="手机号" class="register-input"></ElInput>
      </ElFormItem>
      <ElFormItem prop="gender">
        <el-select v-model="account.gender" placeholder="性别">
          <el-option label="男" value="0" />
          <el-option label="女" value="1" />
        </el-select>
      </ElFormItem>
      <ElFormItem prop="email">
        <ElInput v-model="account.email" placeholder="邮箱" class="register-input"></ElInput>
      </ElFormItem>
      <ElFormItem prop="address">
        <ElInput v-model="account.address" placeholder="地址" class="register-input"></ElInput>
      </ElFormItem>
      <ElFormItem prop="password">
        <ElInput
          :type="isPwd ? 'password' : 'text'"
          v-model="account.password"
          placeholder="密码"
          class="register-input"
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
      <ElFormItem prop="rePassword">
        <ElInput
          :type="isRePwd ? 'password' : 'text'"
          v-model="account.rePassword"
          placeholder="确认密码"
          class="register-input"
          @focus="$emit('changeFocus')"
          @blur="isFocus = false"
        >
          <template #suffix>
            <span @click="isRePwd = !isRePwd" class="pwd-icon">
              <ElIcon>
                <template v-if="isRePwd">
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
      <ElFormItem class="btn-group">
        <ElButton native-type="reset" class="register-btn" @click="Object.assign(account, initObj)"
          >重置</ElButton
        >
        <ElButton type="primary" class="register-btn" @click="handleRegisterClick">注册</ElButton>
      </ElFormItem>
    </ElForm>
  </div>
</template>

<script setup lang="ts">
import type { FormInstance } from "element-plus";
import { rules } from "../config/registerRules";
import { registerRequest } from "@/service/login";
import { useRouter } from "vue-router";

const isPwd = defineModel("isPwd");
const isRePwd = defineModel("isRePwd");
const isFocus = defineModel("isFocus");
const emits = defineEmits(["changeFocus"]);
const router = useRouter();
const initObj = {
  adminName: "",
  tel: "",
  gender: "",
  email: "",
  address: "",
  password: "",
  rePassword: ""
};
const account = reactive(Object.assign({}, initObj));
const FormRef = ref<FormInstance>();
const rulesComputed = computed(() => {
  rules.rePassword = [
    {
      required: true,
      message: "确认密码不能为空",
      trigger: "blur"
    },
    {
      validator: (rule: any, value: string, callback: any) => {
        if (value === account.password) {
          callback();
        } else {
          callback(new Error("两次输入密码不一致"));
        }
      },
      trigger: "blur"
    }
  ];
  return rules;
});
function handleRegisterClick() {
  FormRef.value?.validate(async (valid) => {
    if (valid) {
      const res = await registerRequest({ ...account });
      if (res.code === 200) {
        ElMessage.success("注册成功！，即将跳转到登录页面");
        setTimeout(() => {
          router.push("/login");
        }, 2000);
      }
    }
  });
}
</script>

<style scoped lang="scss">
$left: -50px;
.register-panel {
  .el-form-item {
    margin-bottom: 30px;
    &:last-child {
      margin-bottom: 0;
    }
    .pwd-icon {
      &:hover {
        cursor: pointer;
      }
    }
    .register-input {
      height: 40px;
    }
    :deep(.el-select__wrapper) {
      height: 40px;
      padding: 1px 11px;
    }
    &.btn-group {
      :deep(.el-form-item__content) {
        justify-content: space-between;
        .register-btn {
          width: 48%;
          height: 45px;
        }
      }
    }
  }
  @include responseTo("phone") {
    width: 90%;
    padding: 30px 20px 0;
    box-sizing: border-box;
    .title {
      font-size: 28px;
    }
  }
}
</style>
