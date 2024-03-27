<template>
  <div class="menu_list">
    <div class="menu_title" :class="collapse ? 'menu_title_fold' : ''">
      <img src="~@/assets/img/logo.png" /> <span>小E商城</span>
    </div>
    <el-menu
      background-color="#0c2135"
      text-color="#b7bdc3"
      active-text-color="#0a60bd"
      :unique-opened="true"
      :collapse="collapse"
      :default-active="defaultActive"
    >
      <template v-for="item in getMenu" :key="item.id">
        <template v-if="item.children.length != 0">
          <el-sub-menu :index="item.id + ''">
            <template #title>
              <el-icon v-html="item.icon"> </el-icon>
              <span>{{ item.text }}</span>
            </template>
            <el-menu-item-group
              v-for="children in item.children"
              :key="children.id"
              class="menu_children"
            >
              <el-menu-item
                @click="hanleMenuItemClick(children)"
                :index="children.id + ''"
                >{{ children.text }}</el-menu-item
              >
            </el-menu-item-group>
          </el-sub-menu>
        </template>
        <template v-else
          ><el-menu-item
            :index="item.id + ''"
            class="other_menu"
            :class="collapse ? 'other_menu_deal' : ''"
            @click="hanleMenuItemClick(item)"
          >
            <el-icon v-html="item.icon"> </el-icon>
            <span>{{ item.text }}</span>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
    <!-- <el-icon v-html="test('edit')"> </el-icon> -->
  </div>
</template>

<script lang="ts">
import { useStore } from '@/store';
import { computed, defineComponent, ref } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { pathMapToMenu } from '@/utils/map-menus';
export default defineComponent({
  props: {
    collapse: {
      type: Boolean,
      default: false
    }
  },
  setup() {
    const router = useRouter();
    const route = useRoute();
    const store = useStore();
    const getMenu = computed(() => store.state.loginModule.getMenu);
    const hanleMenuItemClick = (children: any) => {
      //执行跳转的路由
      router.push({
        path: children.path ?? '/404'
      });
    };
    const currentPath = route.path;
    const menu = pathMapToMenu(getMenu.value, currentPath);
    let defaultActive = ref(menu.id + '');

    return {
      getMenu,
      hanleMenuItemClick,
      defaultActive
    };
  }
});
</script>

<style scoped lang="less">
@paddingRight: 8px;
@foldSvgSize: 1.3em;
.menu_list {
  width: 100%;
  height: 100%;
  background-color: #0c2135;
  .menu_title {
    display: flex;
    height: 28px;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    padding: 20px 0;
    color: white;
    font-size: 18px;
    background-color: #001529 !important;
    text-indent: @paddingRight;
    padding-right: @paddingRight;
    img {
      height: 100%;
    }
  }
  .menu_title_fold {
    padding-right: 0;
    img {
      height: 130%;
    }
    span {
      display: none;
    }
  }
  .el-menu {
    width: 100%;
    border-right: none;
  }

  ::v-deep(.el-sub-menu__title) {
    justify-content: center;
    align-items: center;
    background-color: #001529 !important;
    &:hover {
      color: #fff !important;
    }
  }
  ::v-deep(.el-tooltip__trigger) {
    // justify-content: start !important;
    padding-right: calc(var(--el-menu-base-level-padding));
    svg {
      width: @foldSvgSize;
      height: @foldSvgSize;
    }
  }
  .el-menu-item {
    justify-content: center;
    background-color: #0c2135 !important;
  }
  // hover 高亮
  .el-menu-item:hover {
    color: #fff !important; // 菜单
    background-color: #0a60bd !important;
  }
  .other_menu {
    justify-content: center;
    padding-right: calc(
      var(--el-menu-base-level-padding) + var(--el-menu-icon-width)
    );
    //当没有子菜单的时候
    background-color: #001529 !important;
  }
  .other_menu_deal {
    padding-right: calc(var(--el-menu-base-level-padding));
    ::v-deep(svg) {
      width: @foldSvgSize;
      height: @foldSvgSize;
    }
  }
  .el-menu-item.is-active {
    color: #fff !important;
    background-color: #0a60bd !important;
  }
}

.el-menu-vertical:not(.el-menu--collapse) {
  width: 100%;
  height: calc(100% - 48px);
}
</style>
