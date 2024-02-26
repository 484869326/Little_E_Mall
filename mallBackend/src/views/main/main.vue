<template>
  <div class="main">
    <el-container class="bigContainer">
      <el-aside :width="isCollapse ? '80px' : '210px'" class="aside"
        ><nav-menu :collapse="isCollapse"></nav-menu
      ></el-aside>
      <el-container>
        <el-header class="header"
          ><nav-header @fold-change="handleFoldChange"></nav-header
        ></el-header>
        <el-main>
          <RouterView></RouterView>
        </el-main>
        <el-footer class="footer"
          >Copyright ©2020-2023 小E商城 All Rights Reserved</el-footer
        >
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import NavMenu from '@/components/nav-menu/index';
import NavHeader from '@/components/nav-header/index';
import { RouterView } from 'vue-router';
export default defineComponent({
  components: {
    NavMenu,
    NavHeader,
    RouterView
  },
  setup() {
    const isCollapse = ref(false);
    const handleFoldChange = (isFold: boolean) => {
      isCollapse.value = isFold;
    };
    return { handleFoldChange, isCollapse };
  }
});
</script>

<style scoped lang="less">
@height: 45px;
.main {
  width: 100%;
  height: 100%;
  .bigContainer {
    width: 100%;
    height: 100%;
    .header,
    .footer {
      display: flex;
      height: @height;
      align-items: center;
      justify-content: center;
      width: 100%;
      background-color: white;
      color: black;
      box-sizing: border-box;
    }
    .container {
      height: calc(100% - (2 * @height));
      .aside {
        height: 100%;
        // background-color: #eeeeee;
        background-color: #0c2135;
      }
    }

    .footer {
      border-top: 1px solid rgba(255, 255, 255, 0.1);
    }
  }
}
</style>
