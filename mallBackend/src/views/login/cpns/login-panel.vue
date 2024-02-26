<template>
  <div class="login-panel">
    <div class="title">小E商城后台管理系统</div>
    <div class="darkbannerwrap"></div>
    <el-form :rules="rules" :model="account" ref="FormRef">
      <el-form-item prop="username">
        <el-input
          v-model="account.username"
          placeholder="账号"
          class="login_input"
        ></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          v-model="account.password"
          placeholder="密码"
          class="login_input"
          show-password
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="info" class="login_btn" @click="hanleLoginClick"
          >登录</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue';
import type { FormInstance } from 'element-plus';
import { rules } from '../config/rules';
import { useStore } from 'vuex';
export default defineComponent({
  setup() {
    const store = useStore();
    const account = reactive({
      username: 'admin',
      password: 'admin'
    });
    const FormRef = ref<FormInstance>();
    const hanleLoginClick = () => {
      FormRef.value?.validate((valid) => {
        if (valid) {
          store.dispatch('loginModule/accountLoginAction', { ...account });
        }
      });
    };
    return { account, rules, hanleLoginClick, FormRef };
  }
});
</script>

<style scoped lang="less">
@left: -50px;
.login-panel {
  position: absolute;
  left: 50%;
  top: 40%;
  transform: translate(-50%, -50%);
  z-index: 2;
  background-color: #ffffff;
  width: 350px;
  padding: 30px 30px 10px;
  border-radius: 8px;
  .title {
    margin: 10px 0 0 @left;
    padding: 18px 100px 18px 60px;
    background: #189f92;
    color: #fff;
    font-size: 16px;
  }
  .darkbannerwrap {
    background: url('../../../assets/img/aiwrap.png');
    width: 18px;
    height: 10px;
    margin: 0 0 20px @left;
  }
  .el-form-item {
    margin-bottom: 30px;
    .login_input {
      height: 40px;
    }
    .login_btn {
      margin-bottom: 0px;
      width: 100%;
      height: 45px;
      margin: 0 auto;
    }
  }
}
</style>
