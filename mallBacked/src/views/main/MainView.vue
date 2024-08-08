<template>
  <div class="main-view">
    <ElContainer>
      <ElAside
        :width="collapse ? '64px' : '240px'"
        class="aside"
        :class="{ 'active-aside': !collapse }"
      >
        <NavMenu :collapse="collapse"></NavMenu>
      </ElAside>
      <div class="mask" @click="collapse = true"></div>
      <ElContainer>
        <ElHeader class="header">
          <NavHeader v-model:collapse="collapse"></NavHeader>
        </ElHeader>
        <ElMain>
          <MenuTabs></MenuTabs>
          <RouterView #="{ Component }">
            <keep-alive>
              <component :is="Component"></component>
            </keep-alive>
          </RouterView>
        </ElMain>
        <ElFooter class="footer">Copyright ©2020-2024 小E商城 All Rights Reserved</ElFooter>
      </ElContainer>
    </ElContainer>
  </div>
</template>

<script setup lang="ts">
import NavMenu from "@/components/NavMenu.vue";
import MenuTabs from "@/components/MenuTabs.vue";
import NavHeader from "@/components/nav-header/NavHeader.vue";
import { RouterView } from "vue-router";
import { storeToRefs } from "pinia";
import { useMediaStore } from "@/store/media";

const mediaStore = useMediaStore();
const { collapse } = storeToRefs(mediaStore);
mediaStore.init();
mediaStore.onResize();
</script>

<style scoped lang="scss">
$height: 45px;
.main-view {
  height: 100%;
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
      @include responseTo("phone") {
        position: fixed;
        z-index: 6;
        visibility: visible;
        transform: translateX(-240px);
        transition: all 0.3s;
        &.active-aside {
          visibility: visible;
          transform: translateX(0px);
          & + .mask {
            content: "";
            position: fixed;
            top: 0;
            width: 100vw;
            height: 100vh;
            background: var(--el-overlay-color-lighter);
            z-index: 5;
          }
        }
      }
    }
    .footer {
      border-top: 1px solid rgba(255, 255, 255, 0.1);
      @include responseTo("phone") {
        line-height: 26px;
        margin: 10px 0;
      }
    }
  }
  :deep(.header),
  :deep(.footer) {
    background: inherit !important;
    color: inherit !important;
  }
}
</style>
