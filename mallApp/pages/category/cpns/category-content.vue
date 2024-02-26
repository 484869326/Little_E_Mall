<!-- 相当于树组件(微信小程序不支持)得去支持递归调用的组件，需要在 globalStyle->usingComponents 中声明。 -->
<template>
  <view class="category-content">
    <template v-for="(item, index) in subCategory" :key="item.Cid">
      <template v-if="item.level !== 1 || item.parentID === Number(parentID)">
        <template v-if="item.Cimg">
          <view class="content-item">
            <!-- #ifndef H5  -->
            <image
              class="image"
              :src="item.Cimg"
              :lazy-load="true"
              mode="widthFix"
            ></image>
            <!-- #endif  -->
            <!-- #ifdef H5  -->
            <img class="image" v-lazy="item.Cimg" />
            <!-- #endif  -->
            <text class="title">{{ item.Cname }}</text>
          </view>
        </template>
        <template v-else-if="item.Cname">
          <view class="content-item-title">--{{ item.Cname }}--</view>
        </template>
        <template v-if="item.children && item.children.length !== 0">
          <categoryContent :subCategory="item.children"></categoryContent>
        </template>
      </template>
    </template>
  </view>
</template>

<script setup>
defineProps(["subCategory", "parentID"]);
const itemClick = (item) => {
  uni.navigateTo({
    url: "/pages/webview/index?link=" + item.link,
    fail: (err) => {
      console.log(err);
    },
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
