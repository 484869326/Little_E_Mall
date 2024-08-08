<template>
  <div class="menu-list" :class="{ 'menu-fold-list': collapse }">
    <div class="menu-title">
      <div class="img-box"><img src="@/assets/img/logo.png" alt="logo" /></div>
      <span class="menu-span-title">小E商城</span>
    </div>
    <ElMenu
      background-color="#0c2135"
      text-color="#b7bdc3"
      active-text-color="#0a60bd"
      :unique-opened="true"
      :collapse="collapse"
      :default-active="$route.path"
      :collapse-transition="false"
    >
      <template v-for="item in getMenu" :key="item.id">
        <template v-if="item.children && item.children.length != 0">
          <ElSubMenu :index="item.path || String(item.id)" :teleported="false">
            <template #title>
              <el-icon v-html="item.icon" class="icon-animation"> </el-icon>
              <span>{{ item.text }}</span>
            </template>
            <ElMenuItemGroup
              v-for="children in item.children"
              :key="children.id"
              class="menu-children"
            >
              <ElMenuItem
                @click="handleMenuItemClick(children)"
                :index="children.path || String(item.id)"
                >{{ children.text }}</ElMenuItem
              >
            </ElMenuItemGroup>
          </ElSubMenu>
        </template>
        <template v-else
          ><ElMenuItem
            :index="item.path || String(item.id)"
            :class="collapse ? 'other-menu-deal' : ''"
            @click="handleMenuItemClick(item)"
          >
            <ElIcon v-html="item.icon" class="icon-animation"> </ElIcon>
            <span>{{ item.text }}</span>
          </ElMenuItem>
        </template>
      </template>
    </ElMenu>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref } from "vue";
import { useRouter, useRoute } from "vue-router";
import { useLoginStore } from "@/store/login";
import { pathMapToMenu } from "@/router/mapMenus";
import { useTabsStore } from "@/store/tabs";

const props = defineProps({
  collapse: {
    type: Boolean,
    default: false
  }
});
const router = useRouter();
const route = useRoute();
const loginStore = useLoginStore();
const tabsStore = useTabsStore();
const collapse = ref(props.collapse);
const getMenu = computed(() => loginStore.getMenu);
const handleMenuItemClick = (children: any) => {
  tabsStore.addTabs(children);
  //执行跳转的路由
  router.push({
    path: children.path ?? "/NotFound"
  });
};
const currentPath = route.path;
const menu = pathMapToMenu(getMenu.value, currentPath);
tabsStore.addTabs(menu);
const defaultActive = ref(menu?.path + "");
// watch(
//   () => tabsStore.id,
//   (newVal: number) => {
//     console.log(newVal);
//     defaultActive.value = newVal.toString();
//   }
// );
watchEffect(() => {
  collapse.value = props.collapse;
});
</script>

<style scoped lang="scss">
$foldSvgSize: 1.3em;
.menu-list {
  padding: 0 7px;
  overflow: hidden;
  &.menu-fold-list {
    padding: 0;
    & > .menu-title {
      justify-content: flex-start;
      .menu-span-title {
        visibility: hidden;
      }
    }
  }
  & > .menu-title {
    display: flex;
    height: 28px;
    align-items: center;
    justify-content: center;
    padding: 20px 0;
    color: white;
    font-size: 24px;
    overflow: hidden;
    .img-box {
      img {
        width: 36px;
        padding: 0 14px 0 14px;
        vertical-align: middle;
      }
    }
    .menu-span-title {
      flex-shrink: 0;
    }
  }
  :deep(.el-menu) {
    position: static;
    border-right: none;
    background-color: #21252b !important;
    .el-sub-menu {
      margin-bottom: 10px;
      .el-sub-menu__title {
        color: white !important;
      }
      //折叠出来子菜单
      .el-popper {
        .el-menu {
          padding: 0 7px 14px;
        }
      }
    }
    .el-menu-item {
      color: white;
      &:hover,
      &.is-active {
        border-radius: 5px;
        background-color: #409eff !important;
      }
      &.other-menu {
        padding-right: calc(var(--el-menu-base-level-padding) + var(--el-menu-icon-width));
        &.other-menu-deal {
          padding-right: calc(var(--el-menu-base-level-padding));
          svg {
            width: $foldSvgSize;
            height: $foldSvgSize;
          }
        }
      }
    }
  }
}
</style>
