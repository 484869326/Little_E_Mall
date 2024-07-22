<template>
  <view class="receiving-address">
    <address-create v-if="isCreate" @save="isCreate = false" :index="index" />
    <address-list
      v-else
      @create="
        isCreate = true;
        index = null;
      "
      @update="
        isCreate = true;
        index = String($event);
      "
    />
  </view>
</template>

<script setup lang="ts">
import { ref } from "vue";

import addressCreate from "./cpns/address-create.vue";
import addressList from "./cpns/address-list.vue";
const isCreate = ref(false);
const index = ref<string | null>(null);
</script>
<style lang="scss"></style>
