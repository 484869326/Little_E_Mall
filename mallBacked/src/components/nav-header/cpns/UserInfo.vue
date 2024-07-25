<template>
  <div class="userinfo">
    <ElSwitch v-model="themeSwitch" :class="{ 'is-checked': themeSwitch }">
      <template #active-action>
        <ElIcon>
          <svg viewBox="0 0 24 24" class="dark-icon">
            <path
              d="M11.01 3.05C6.51 3.54 3 7.36 3 12a9 9 0 0 0 9 9c4.63 0 8.45-3.5 8.95-8c.09-.79-.78-1.42-1.54-.95A5.403 5.403 0 0 1 11.1 7.5c0-1.06.31-2.06.84-2.89c.45-.67-.04-1.63-.93-1.56z"
            ></path>
          </svg>
        </ElIcon>
      </template>
      <template #inactive-action>
        <ElIcon>
          <IEpSunny class="light-icon"></IEpSunny>
        </ElIcon>
      </template>
    </ElSwitch>
    <ElIcon @click="handleClick">
      <IEpFullScreen></IEpFullScreen>
    </ElIcon>
    <ElDropdown class="dropdown">
      <span class="el-dropdown-link">
        <ElAvatar :size="30" :src="circleUrl" />
        <span class="admin-name">{{ adminName }}</span>
        <ElIcon>
          <IEpArrowDown></IEpArrowDown>
        </ElIcon>
      </span>
      <template #dropdown>
        <ElDropdownMenu>
          <!--          <ElDropdownItem>我的资料</ElDropdownItem>-->
          <ElDropdownItem @click="handleLogoutClick">退出登录</ElDropdownItem>
        </ElDropdownMenu>
      </template>
    </ElDropdown>
  </div>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import { useRouter } from "vue-router";
import { useLoginStore } from "@/store/login";
import LocalCache from "@/utils/cache";
import { useThemeStore } from "@/store/theme";
import toggleFullScreen from "@/utils/fullScreen";

const themeStore = useThemeStore();
const themeSwitch = ref(themeStore.isDark);
const loginStore = useLoginStore();
const adminName = computed(() => loginStore.userInfo.adminName);
const router = useRouter();
const circleUrl = "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png";
//退出登录
const handleLogoutClick = () => {
  LocalCache.clearCache();
  router.push("/");
};
//全屏
function handleClick() {
  toggleFullScreen(document.documentElement);
}
//监听 是否夜间模式
watch(
  () => themeSwitch.value,
  (newVal) => {
    themeStore.toggleThemes(newVal);
  }
);
</script>

<style scoped lang="scss">
.userinfo {
  display: flex;
  align-items: center;
  cursor: pointer;
  :deep(.el-switch) {
    .el-switch__core {
      background-color: #f2f2f2;
      .el-switch__action {
        background-color: transparent;
        .light-icon {
          color: #606266;
        }
      }
    }
    &.is-checked {
      .el-switch__core {
        background: #2c2c2c;
        border-color: #2c2c2c;
        .el-switch__action {
          color: #2c2c2c;
          .dark-icon {
            border-radius: 50%;
            color: #cfd3dc;
            background-color: #141414;
          }
        }
      }
    }
  }

  & > .el-icon {
    margin: 0 10px;
    font-size: 20px;
  }
  .dropdown {
    .el-dropdown-link {
      display: flex;
      align-items: center;
      .admin-name {
        padding: 0 10px;
      }
      &:hover,
      i:hover {
        color: var(--el-color-primary);
      }
    }
    :focus-visible {
      outline: none !important;
    }
  }
}
</style>
