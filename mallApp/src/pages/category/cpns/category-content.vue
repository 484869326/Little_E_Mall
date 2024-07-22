<!-- 相当于树组件(微信小程序不支持)得去支持递归调用的组件，需要在 globalStyle->usingComponents 中声明。 -->
<template>
  <view class="category-content">
    <template v-for="(item, index) in subCategory" :key="item.cid">
      <template v-if="item.level !== 1 || item.parentId === Number(parentId)">
        <template v-if="item.cImg">
          <view class="content-item" @click="handleItemClick(item.cName)">
            <!-- #ifndef H5  -->
            <image
              class="image"
              :src="item.cImg"
              :lazy-load="true"
              mode="widthFix"
            ></image>
            <!-- #endif  -->
            <!-- #ifdef H5  -->
            <img class="image" v-lazy="item.cImg" />
            <!-- #endif  -->
            <text class="title">{{ item.cName }}</text>
          </view>
        </template>
        <template v-else-if="item.cName">
          <view class="content-item-title">--{{ item.cName }}--</view>
        </template>
        <template v-if="item.children && item.children.length !== 0">
          <categoryContent :subCategory="item.children"></categoryContent>
        </template>
      </template>
    </template>
  </view>
</template>

<script setup lang="ts">
defineProps(["subCategory", "parentId"]);
const handleItemClick = (searchValue: string) => {
  uni.navigateTo({
    url: "/pages/search/search?searchValue=" + searchValue,
  });
};
</script>

<style lang="scss" scoped>
.category-content {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  & > .content-item {
    width: 80%;
    // padding: 15rpx;
    margin: 20rpx auto;
    display: flex;
    align-items: center;
    background-color: $gBgLightColor;
    border-radius: 10rpx;
    & > .image {
      width: 160rpx;
      mix-blend-mode: darken;
    }
    & > .title {
      text-align: center;
      font-size: $gFontSize;
    }
  }
  & > .content-item-title {
    width: 100%;
    margin-top: 40rpx;
    font-weight: 700;
    font-size: 36rpx;
    text-align: center;
  }
}
</style>
