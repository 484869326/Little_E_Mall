<template>
  <div class="main-view">
    <ElContainer>
      <ElAside :width="isCollapse ? '64px' : '240px'" class="aside">
        <NavMenu :collapse="isCollapse"></NavMenu>
      </ElAside>
      <ElContainer>
        <ElHeader class="header">
          <NavHeader @fold-change="isCollapse = $event"></NavHeader>
        </ElHeader>
        <ElMain>
          <RouterView></RouterView>
        </ElMain>
        <ElFooter class="footer">Copyright ©2020-2024 小E商城 All Rights Reserved</ElFooter>
      </ElContainer>
    </ElContainer>
  </div>
</template>

<script setup lang="ts">
import NavMenu from "@/components/NavMenu.vue";
import NavHeader from "@/components/nav-header/NavHeader.vue";
import { RouterView } from "vue-router";

const isCollapse = ref(false);
</script>

<style scoped lang="scss">
$height: 45px;
.main-view {
  height: 100%;
  @include useTheme {
    background: getVar("bgColor");
    color: getVar("textColor");
  }
  & > .el-container {
    width: 100%;
    height: 100%;
    .header,
    .footer {
      display: flex;
      height: $height;
      align-items: center;
      justify-content: center;
      width: 100%;
      background-color: white;
      color: black;
      box-sizing: border-box;
    }
    .aside {
      height: 100%;
      background-color: #21252b;
      transition: width 0.5s;
    }
    .footer {
      border-top: 1px solid rgba(255, 255, 255, 0.1);
    }
  }
  :deep(.header),
  :deep(.footer) {
    background: inherit !important;
    color: inherit !important;
    .content {
      .el-breadcrumb {
        .el-breadcrumb__item:first-child {
          @include useTheme {
            background: getVar("bgColor");
            color: getVar("textColor");
          }
        }
      }
    }
  }
}
</style>
