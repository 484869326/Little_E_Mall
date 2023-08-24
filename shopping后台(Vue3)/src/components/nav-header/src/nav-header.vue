<template>
  <div class="nav_header">
    <i class="" @click="handleFoldChange" v-html="svg"> </i>
    <div class="content">
      <Breadcrumb :breadCrumbs="breadCrumbs"></Breadcrumb>
      <Userinfo></Userinfo>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue';
import Userinfo from './userinfo.vue';
import Breadcrumb from '@/base-ui/breadcrumb';
import { pathMenuToBread } from '@/utils/map-menus';
import { useStore } from '@/store';
import { useRoute } from 'vue-router';
export default defineComponent({
  components: { Userinfo, Breadcrumb },
  emits: ['foldChange'],
  setup(props, { emit }) {
    const store = useStore();
    const route = useRoute();
    const svg = ref('');
    let isFold = false;
    const expand =
      '<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" data-v-ea893728=""><path fill="currentColor" d="M128 192h768v128H128V192zm0 256h512v128H128V448zm0 256h768v128H128V704zm576-352 192 160-192 128V352z"></path></svg>';
    const fold =
      '<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" data-v-ea893728=""><path fill="currentColor" d="M896 192H128v128h768V192zm0 256H384v128h512V448zm0 256H128v128h768V704zM320 384 128 512l192 128V384z"></path></svg>';
    svg.value = expand;
    const handleFoldChange = () => {
      isFold = !isFold;
      isFold ? (svg.value = fold) : (svg.value = expand);
      emit('foldChange', isFold);
    };
    const breadCrumbs = computed(() =>
      pathMenuToBread(store.state.loginModule.getMenu, route.path)
    );
    return { handleFoldChange, svg, breadCrumbs };
  }
});
</script>

<style scoped lang="less">
.nav_header {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  i {
    display: block;
    width: 25px;
    height: 25px;
    cursor: pointer;
  }
  .content {
    display: flex;
    padding: 0 20px;
    flex: 1;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
