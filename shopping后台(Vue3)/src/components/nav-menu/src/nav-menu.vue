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
      <template v-for="(item, index) in getMenu" :key="item.id">
        <template v-if="item.children.length != 0">
          <el-sub-menu :index="item.id + ''">
            <template #title>
              <el-icon v-html="iconList[index]"></el-icon>
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
            <el-icon v-html="iconList[index]"></el-icon>
            <span>{{ item.text }}</span>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
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
    const iconList = [
      '<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" data-v-ea893728=""><path fill="currentColor" d="M544 768v128h192a32 32 0 1 1 0 64H288a32 32 0 1 1 0-64h192V768H192A128 128 0 0 1 64 640V256a128 128 0 0 1 128-128h640a128 128 0 0 1 128 128v384a128 128 0 0 1-128 128H544zM192 192a64 64 0 0 0-64 64v384a64 64 0 0 0 64 64h640a64 64 0 0 0 64-64V256a64 64 0 0 0-64-64H192z"></path></svg>',
      '<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" data-v-ea893728=""><path fill="currentColor" d="M600.704 64a32 32 0 0 1 30.464 22.208l35.2 109.376c14.784 7.232 28.928 15.36 42.432 24.512l112.384-24.192a32 32 0 0 1 34.432 15.36L944.32 364.8a32 32 0 0 1-4.032 37.504l-77.12 85.12a357.12 357.12 0 0 1 0 49.024l77.12 85.248a32 32 0 0 1 4.032 37.504l-88.704 153.6a32 32 0 0 1-34.432 15.296L708.8 803.904c-13.44 9.088-27.648 17.28-42.368 24.512l-35.264 109.376A32 32 0 0 1 600.704 960H423.296a32 32 0 0 1-30.464-22.208L357.696 828.48a351.616 351.616 0 0 1-42.56-24.64l-112.32 24.256a32 32 0 0 1-34.432-15.36L79.68 659.2a32 32 0 0 1 4.032-37.504l77.12-85.248a357.12 357.12 0 0 1 0-48.896l-77.12-85.248A32 32 0 0 1 79.68 364.8l88.704-153.6a32 32 0 0 1 34.432-15.296l112.32 24.256c13.568-9.152 27.776-17.408 42.56-24.64l35.2-109.312A32 32 0 0 1 423.232 64H600.64zm-23.424 64H446.72l-36.352 113.088-24.512 11.968a294.113 294.113 0 0 0-34.816 20.096l-22.656 15.36-116.224-25.088-65.28 113.152 79.68 88.192-1.92 27.136a293.12 293.12 0 0 0 0 40.192l1.92 27.136-79.808 88.192 65.344 113.152 116.224-25.024 22.656 15.296a294.113 294.113 0 0 0 34.816 20.096l24.512 11.968L446.72 896h130.688l36.48-113.152 24.448-11.904a288.282 288.282 0 0 0 34.752-20.096l22.592-15.296 116.288 25.024 65.28-113.152-79.744-88.192 1.92-27.136a293.12 293.12 0 0 0 0-40.256l-1.92-27.136 79.808-88.128-65.344-113.152-116.288 24.96-22.592-15.232a287.616 287.616 0 0 0-34.752-20.096l-24.448-11.904L577.344 128zM512 320a192 192 0 1 1 0 384 192 192 0 0 1 0-384zm0 64a128 128 0 1 0 0 256 128 128 0 0 0 0-256z"></path></svg>',
      '<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" data-v-ea893728=""><path fill="currentColor" d="M320 288v-22.336C320 154.688 405.504 64 512 64s192 90.688 192 201.664v22.4h131.072a32 32 0 0 1 31.808 28.8l57.6 576a32 32 0 0 1-31.808 35.2H131.328a32 32 0 0 1-31.808-35.2l57.6-576a32 32 0 0 1 31.808-28.8H320zm64 0h256v-22.336C640 189.248 582.272 128 512 128c-70.272 0-128 61.248-128 137.664v22.4zm-64 64H217.92l-51.2 512h690.56l-51.264-512H704v96a32 32 0 1 1-64 0v-96H384v96a32 32 0 0 1-64 0v-96z"></path></svg>',
      '<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" data-v-ea893728=""><path fill="currentColor" d="M805.504 320 640 154.496V320h165.504zM832 384H576V128H192v768h640V384zM160 64h480l256 256v608a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32zm318.4 582.144 180.992-180.992L704.64 510.4 478.4 736.64 320 578.304l45.248-45.312L478.4 646.144z"></path></svg>'
    ];
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
    return { getMenu, iconList, hanleMenuItemClick, defaultActive };
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
