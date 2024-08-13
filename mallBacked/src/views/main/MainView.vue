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
          <MenuTabs
            @refresh="handleRefresh"
            @closeOther="handleCloseOther"
            @closeLeftRight="handleCloseLeftRight"
          ></MenuTabs>
          <RouterView #="{ Component }">
            <keep-alive :exclude="keepAliveData.exclude" :include="keepAliveData.include">
              <component :is="keepAliveData.showCompoent ? Component : 'div'"></component>
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
import { RouterView, useRoute, useRouter } from "vue-router";
import { storeToRefs } from "pinia";
import { useMediaStore } from "@/store/media";

const mediaStore = useMediaStore();
const { collapse } = storeToRefs(mediaStore);
mediaStore.init();
mediaStore.onResize();
const initData = {
  exclude: "",
  showCompoent: true,
  include: undefined
};
const keepAliveData = reactive(Object.assign({}, initData));
const router = useRouter();
const route = useRoute();
function handleRefresh() {
  const data = {
    exclude: "",
    showCompoent: false
  };
  data.exclude = useRouterMatch(route.fullPath);
  Object.assign(keepAliveData, data);
  nextTick(() => {
    Object.assign(keepAliveData, initData);
  });
}
function handleCloseOther(path: string) {
  const data = { include: "", showCompoent: false };
  data.include = useRouterMatch(path);
  Object.assign(keepAliveData, data);
  nextTick(() => {
    Object.assign(keepAliveData, initData);
  });
}
function handleCloseLeftRight(pathArr: string[]) {
  const data = { include: [] as string[], showCompoent: false };
  data.include = pathArr.map((item) => {
    return useRouterMatch(item);
  });
  Object.assign(keepAliveData, data);
  nextTick(() => {
    Object.assign(keepAliveData, initData);
  });
}

function useRouterMatch(path: string) {
  const matchRouteArr = router.resolve(path).matched;
  const matchRoute: any = matchRouteArr.find((item) => item.path === path);
  const comName = (matchRoute.components?.default as any)["__name"];
  return comName;
}
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
