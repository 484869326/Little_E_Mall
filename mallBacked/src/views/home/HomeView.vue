<template>
  <div class="home-view">
    <div class="son-box">
      <!-- 猫头鹰盒子 -->
      <div class="owl-box" :class="{ 'owl-active-box': isFocus }">
        <i class="son-owl hand-left hided"></i>
        <i class="son-owl head"></i>
        <i class="son-owl hand-right hided" :class="{ view: !isPwd || !isRePwd || showView }"></i>
      </div>
      <div class="title">小E商城后台管理系统</div>
      <RouterView #="{ Component }">
        <Component
          :is="Component"
          @changeFocus="handleChangeFocus"
          v-model:isRePwd="isRePwd"
          v-model:isPwd="isPwd"
          v-model:isFocus="isFocus"
        />
      </RouterView>
      <div class="other-method">
        <RouterLink :to="isRegister ? '/login' : '/register'">
          {{ isRegister ? "登录" : "注册" }}
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { delay } from "@/utils";
import { bubbleDom } from "@/utils/bubbleDom";
import { useRoute } from "vue-router";

const route = useRoute();
const isPwd = ref(true);
const isRePwd = ref(true);
const showView = ref(false);
const isFocus = ref(false);
const isRegister = computed(() => {
  return route.path.includes("/register");
});
async function handleChangeFocus() {
  isFocus.value = !isFocus.value;
  if (!isPwd.value || !isRePwd.value) return;
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
.home-view {
  position: relative;
  height: 100%;
  @include useTheme {
    background: getVar("loginBgColor");
  }

  .son-box {
    position: relative;
    max-width: 400px;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    padding: 40px 40px 20px;
    border: 1px solid rgba(255, 255, 255, 0.6);
    box-shadow: 2px 1px 19px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    z-index: 2;
    @include responseTo("phone") {
      width: 90%;
      padding: 30px 20px 20px;
      box-sizing: border-box;
      .title {
        font-size: 28px;
      }
    }
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
    .other-method {
      display: flex;
      justify-content: flex-end;
      margin-top: 20px;
      a {
        text-decoration: none;
      }
    }
  }
}
</style>
