<template>
  <div class="category">
    <pageContent
      :getFormData="{}"
      :contentTableConfig="contentTableConfig"
      pageName="category"
    ></pageContent>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { contentTableConfig } from './config/content_config';
import pageContent from '@/components/page-content';
export default defineComponent({
  name: 'category',
  components: { pageContent },
  setup() {
    return {
      contentTableConfig
    };
  }
});
</script>

<style scoped lang="less"></style>
