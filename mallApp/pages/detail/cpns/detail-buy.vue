<template>
  <!-- 禁止触摸滚动穿透 -->
  <view class="detail-buy">
    <drawer @close="$emit('close')">
      <view class="good-detail">
        <view class="good-image" @click="handlePreviewImage">
          <image :src="detail.goodImg" class="image" mode="widthFix" />
        </view>
        <view class="good-info">
          <view class="good-price"
            >￥{{ (detail.price ?? [])[data.typeIndex] }}</view
          >

          <view class="good-name"> {{ goodNameCom }}</view>
        </view>
      </view>
      <view class="good-type">
        <view class="title">版本</view>
        <view class="item-list">
          <template v-for="(item, index) in detail.type" :key="item">
            <view
              class="item-box"
              :class="{ active: data.typeIndex === index }"
              @click="data.typeIndex = index"
              >{{ item }}</view
            >
          </template>
        </view>
      </view>
      <view class="good-color">
        <view class="title">颜色</view>
        <view class="item-list">
          <template v-for="(item, index) in detail.color" :key="item">
            <view
              class="item-box"
              :class="{ active: data.colorIndex === index }"
              @click="data.colorIndex = index"
              >{{ item }}</view
            >
          </template>
        </view>
      </view>
      <view class="good-num" v-if="!hiddenNum">
        <view class="title">购买数量</view>
        <numEdit v-model="data.num"></numEdit>
      </view>
      <button class="button" @click="handleConfirmClick">确定</button>
    </drawer>
  </view>
</template>

<script setup>
import { reactive, watch, computed, onMounted } from "vue";
import drawer from "@/components/drawer.vue";
import numEdit from "@/components/num-edit.vue";
import { useGoodStore } from "@/store/good.js";
import { useShoppingStore } from "@/store/shopping.js";

const props = defineProps(["detail", "hiddenNum"]);
const goodStore = useGoodStore();
const shoppingStore = useShoppingStore();
const detail = Object.assign({}, props.detail);
const emit = defineEmits(["update", "close", "load"]);
const data = reactive({
  typeIndex: 0,
  colorIndex: 0,
  num: 1,
});
watch(data, (newValue) => {
  emit("update", newValue);
});
const goodNameCom = computed(() => {
  return (
    detail.goodName +
    " " +
    (detail.type ?? [])[data.typeIndex] +
    " " +
    (detail.color ?? [])[data.colorIndex]
  );
});
function handlePreviewImage() {
  uni.previewImage({
    current: 0,
    urls: props.detail.Goodimg,
  });
}
function handleConfirmClick() {
  if (props.detail?.shoppingId) {
    shoppingStore.fetchChangeType({
      shoppingId: props.detail.shoppingId,
      num: data.num,
      color: data.colorIndex,
      type: data.typeIndex,
    });
    emit("close", data);
    return;
  }
  const { isBuy, goodId, userId } = props.detail;
  //购物车加入
  goodStore.fetchAddShop({
    goodId,
    userId,
    type: data.typeIndex,
    color: data.colorIndex,
    num: data.num,
    isBuy,
  });
  if (isBuy) {
    //立即购买要跳转订单页面
    uni.navigateTo({
      url: "/pages/order/order?isBuy=true&goodId=" + goodId,
    });
  }
  emit("close");
}
onMounted(() => {
  emit("load");
});
function loadData(parentValue) {
  Object.assign(data, parentValue);
}
defineExpose({
  loadData,
});
</script>

<style lang="scss">
.detail-buy {
  .good-detail {
    @include normalFlex();
    .good-image {
      width: 30%;
    }
    .good-info {
      flex-grow: 1;
      .good-price {
        font-size: 40rpx;
        color: $gPriceColor;
        font-weight: bold;
      }
      .good-name {
        padding-top: 20rpx;
        font-size: 32rpx;
        font-weight: bold;
      }
    }
  }
  .item-list {
    @include normalFlex(row, flex-start);
    margin-top: 30rpx;
    .item-box {
      margin-right: 20rpx;
      padding: 10rpx 48rpx;
      text-align: center;
      background: #f6f6f6;
      border: 1px solid #f6f6f6;
      // border: 1rpx solid $gPriceColor;
      border-radius: 9999rpx;
      &.active {
        background-color: #fbf2ed;
        border-color: $gPriceColor;
      }
      &:last-child {
        margin-right: 0;
      }
    }
  }
  .good-num {
    @include normalFlex(row, space-between, center);
  }
  .button {
    width: 100%;
    margin-top: 30rpx;
    height: 80rpx;
    line-height: 76rpx;
    font-size: 30rpx;
    color: white;
    background-color: $gPriceColor;
    border-radius: 9999rpx;
  }
  .title {
    font-size: 30rpx;
    padding-left: 0;
  }
  .good-type,
  .good-num,
  .good-color {
    margin-top: 30rpx;
  }
}
</style>
