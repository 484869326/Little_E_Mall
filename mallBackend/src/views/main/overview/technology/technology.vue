<template>
  <div class="statistics">
    <DiyCard title="关于">
      <div class="c-left">
        这是基于 Vue3、Vuex、VueRouter、 ElementPlus 、TypeScript、Echart5、Yarn
        后台管理系统。
      </div>
    </DiyCard>
    <DiyCard title="技术栈">
      <DiyLink :textArrays="textArrays"></DiyLink>
      <DiyDesc
        title="生产环境依赖"
        :column="2"
        :table-datas="dependencies"
      ></DiyDesc>
      <DiyDesc
        title="开发环境依赖"
        :column="2"
        :table-datas="devDependencies"
      ></DiyDesc>
    </DiyCard>
    <DiyCard title="项目结构">
      <DiyCode language="bash" :code="projectTree"></DiyCode>
    </DiyCard>
    <DiyCard title="项目规范">
      <DiyDesc title="文件命名规范" :column="1" :table-datas="file"></DiyDesc>
      <DiyDesc
        title="编写组件规范"
        :column="1"
        :table-datas="component"
      ></DiyDesc>
    </DiyCard>
    <DiyCard title="Git提交规范">
      <DiyDesc :column="1" :table-datas="git"></DiyDesc>
    </DiyCard>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import DiyCard from '@/base-ui/card';
import DiyLink from '@/base-ui/link';
import DiyDesc from '@/base-ui/descriptions';
import DiyCode from '@/base-ui/code';
import {
  dependencies,
  devDependencies,
  projectTree,
  textArrays,
  file,
  component,
  git
} from './config';
export default defineComponent({
  name: 'statistics',
  components: {
    DiyCard,
    DiyLink,
    DiyDesc,
    DiyCode
  },
  setup() {
    return {
      textArrays,
      dependencies,
      devDependencies,
      projectTree,
      component,
      file,
      git
    };
  }
});
</script>

<style scoped lang="less">
.statistics {
  .el-card {
    margin-bottom: 25px;
  }
}
</style>
