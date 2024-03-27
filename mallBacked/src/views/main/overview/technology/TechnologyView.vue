<template>
  <div class="technology-view">
    <DiyCard title="关于">
      <div class="c-left">
        这是基于 Vue3、Pinia、VueRouter、 ElementPlus 、TypeScript、Echarts5、Npm 后台管理系统。
      </div>
    </DiyCard>
    <DiyCard title="技术栈">
      <DiyLink :textArrays="textArrays"></DiyLink>
      <DiyDesc title="生产环境依赖" :column="2" :table-data="dependencies"></DiyDesc>
      <DiyDesc title="开发环境依赖" :column="2" :table-data="devDependencies"></DiyDesc>
    </DiyCard>
    <DiyCard title="项目结构">
      <div v-code:[`bash`]="projectTree" class="v-code"></div>
    </DiyCard>
    <DiyCard title="项目规范">
      <DiyDesc title="文件命名规范" :column="1" :table-data="file"></DiyDesc>
      <DiyDesc title="编写组件规范" :column="1" :table-data="component"></DiyDesc>
    </DiyCard>
    <DiyCard title="Git提交规范">
      <DiyDesc :column="1" :table-data="git"></DiyDesc>
    </DiyCard>
  </div>
</template>
<script setup lang="ts">
import DiyCard from "@/base-ui/CardUI.vue";
import DiyLink from "@/base-ui/LinkUI.vue";
import DiyDesc from "@/base-ui/DescriptionsUI.vue";
import {
  dependencies,
  devDependencies,
  projectTree,
  textArrays,
  file,
  component,
  git
} from "./config";
</script>

<style scoped lang="scss">
.technology-view {
  .el-card {
    margin-bottom: 25px;
  }
}
</style>
