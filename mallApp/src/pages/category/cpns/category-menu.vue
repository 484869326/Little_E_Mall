<template>
  <view class="category-menu">
    <scroll-view :scroll-y="true" class="category-menu-scroll">
      <template v-for="item in categories" :key="item.cid">
        <view
          :class="['scroll-view-item', currentIndex === item.cid ? 'active' : '']"
          @click="$emit('update:currentIndex', item.cid)"
        >
          {{ item.cName }}
        </view>
      </template>
    </scroll-view>
  </view>
</template>

<script setup lang="ts">
defineProps(["categories", "currentIndex"]);
defineEmits(["update:currentIndex"]);
</script>

<style lang="scss" scoped>
.category-menu {
  height: 100%;
  width: 200rpx;
  overflow: hidden;
  .category-menu-scroll {
    height: 100%;
  }
  .scroll-view-item {
    width: 100%;
    height: 90rpx;
    line-height: 90rpx;
    text-align: center;
    font-size: $gFontSize;
    color: #757575;
    &.active {
      border-left: 6rpx solid $gPriceColor;
      color: #323232;
      font-weight: 700;
    }
  }
}
</style>
