<template>
  <div class="userinfo">
    <el-dropdown class="dropDown">
      <span class="el-dropdown-link">
        <el-avatar :size="30" :src="circleUrl" />
        <span class="adminName">{{ adminName }}</span>
        <i class="el-icon">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
            <path
              fill="currentColor"
              d="M831.872 340.864 512 652.672 192.128 340.864a30.592 30.592 0 0 0-42.752 0 29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728 30.592 30.592 0 0 0-42.752 0z"
            ></path>
          </svg>
        </i>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>我的资料</el-dropdown-item>
          <el-dropdown-item @click="handleLogoutClick"
            >退出登录</el-dropdown-item
          >
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script lang="ts">
import { useStore } from '@/store';
import { computed, defineComponent } from 'vue';
import LocalCache from '@/utils/cache';
import { useRouter } from 'vue-router';
export default defineComponent({
  setup() {
    const store = useStore();
    const adminName = computed(
      () => store.state.loginModule.userInfo.adminName
    );
    const router = useRouter();
    const circleUrl =
      'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png';
    const handleLogoutClick = () => {
      LocalCache.clearCache();
      router.push('/');
    };
    return { circleUrl, adminName, handleLogoutClick };
  }
});
</script>

<style scoped lang="less">
.userinfo {
  .el-dropdown-link {
    cursor: pointer;

    display: flex;
    align-items: center;
    .adminName {
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
</style>
