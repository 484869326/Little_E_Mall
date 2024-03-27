<template>
  <view class="shopping">
    <view v-if="!myStore.isLogin" class="no-login">
      <view class="left">登录后享受更多优惠</view>
      <view class="right" @click="handleGoLoginClick">
        <text class="text">去登录</text>
        <uni-icons type="right" size="30rpx" color="#8F8F8F"></uni-icons>
      </view>
    </view>
    <shoppingContent
      :isAllChecked="isAllChecked"
      :shoppingList="shoppingList"
      @close="handleCloseClick"
      @changeChecked="handleChangeCheckedClick"
      @changeNum="handleChangeNumClick"
      @delete="handleDeleteClick"
    ></shoppingContent>
    <shoppingBalance
      v-if="total !== 0"
      ref="shoppingBalanceRef"
      @checkAll="handleCheckAllClick"
    ></shoppingBalance>
  </view>
</template>

<script setup>
import { onLoad, onReachBottom, onShow, onHide } from "@dcloudio/uni-app";
import { ref, reactive, watchEffect } from "vue";
import { storeToRefs } from "pinia";
import { useShoppingStore } from "@/store/shopping.js";
import { useMyStore } from "@/store/my.js";
import shoppingContent from "./cpns/shopping-content.vue";
import shoppingBalance from "./cpns/shopping-balance.vue";
import { debounce } from "@/utils/index.js";

const isAllChecked = ref(2);
const localShoppingList = reactive([]);
const myStore = useMyStore();
const shoppingStore = useShoppingStore();
const {
  shoppingList,
  isCheckAll,
  totalCheckPrice,
  totalCheck,
  total,
  totalPrice,
} = storeToRefs(shoppingStore);
const { userInfo } = storeToRefs(myStore);
const shoppingBalanceRef = ref();
const paddingBottom = ref("0px");
//防抖配置
const debounceFn = debounce(
  async (fnName, ...args) => {
    const res = await shoppingStore[fnName](...args);
    return res;
  },
  300,
  false
);
let page;
//初始化加载
onLoad(async () => {
  //获取距离底部
  paddingBottom.value = await (shoppingBalanceRef.value &&
    shoppingBalanceRef.value.getBalanceHeight());
});
let watchFn;
//每次都刷新数据(因为会加入购物车)
onShow(() => {
  if (watchFn) {
    watchFn();
  }
  watchFn = watchEffect(async () => {
    shoppingStore.initShoppingStore();
    page = 1;
    if (myStore.isLogin) {
      await shoppingStore.fetchShoppingList(page, userInfo.value.id);
      await shoppingStore.fetchCheckAll(userInfo.value.id);
      localShoppingList.length = 0;
      localShoppingList.push(...shoppingList.value);
    }
  });
});
onHide(() => {
  watchFn();
  watchFn = null;
});
//选中单个
function handleChangeCheckedClick(item) {
  const id = item.shoppingId;
  const checked = item.isChecked;
  const price = parseFloat(item.good.price[item.type]).toFixed(2);
  const totalCheckValue = totalCheck.value;
  totalCheckPrice.value = checked
    ? totalCheckPrice.value + price * item.num
    : totalCheckPrice.value - price * item.num;
  totalCheck.value = checked ? totalCheckValue + 1 : totalCheckValue - 1;
  isAllChecked.value = 2;
  debounceFn("fetchChangeChecked", id, checked, userInfo.value.id).then(
    (res) => {
      isCheckAll.value = res.data;
    }
  );
}
//改变数量
function handleChangeNumClick(event, item, index) {
  const id = item.shoppingId;
  const num = item.num;
  const oldNum = localShoppingList[index].num;
  const price = parseFloat(item.good.price[item.type]).toFixed(2);
  if (item.isChecked) {
    totalCheckPrice.value = totalCheckPrice.value + price * (num - oldNum);
    localShoppingList[index].num = num;
  }
  totalPrice.value = totalPrice.value + price * event;
  debounceFn("fetchChangeShoppingNum", id, num);
}
//全选的
function handleCheckAllClick(checkAll) {
  isAllChecked.value = Number(checkAll);
  debounceFn("fetchChangeAllChecked", userInfo.value.id, checkAll);
}
//删除
function handleDeleteClick(item) {
  const id = item.shoppingId;
  const price = parseFloat(item.good.price[item.type]).toFixed(2) * item.num;
  total.value = total.value - 1;
  totalCheck.value = totalCheck.value - 1;
  totalPrice.value = totalPrice.value - price;
  if (item.isChecked) {
    totalCheckPrice.value = totalCheckPrice.value - price;
  }
  shoppingStore.fetchDeleteShopping(id);
}
// 到达底部
onReachBottom(async () => {
  await shoppingStore.fetchShoppingList(++page, userInfo.value.id);
  localShoppingList.length = 0;
  localShoppingList.push(...shoppingList.value);
});
function handleGoLoginClick() {
  uni.navigateTo({
    url: "/pages/login/login",
  });
}
//关闭筛选类型价格变化
function handleCloseClick(isChecked, price) {
  isChecked && (totalCheckPrice.value += price);
  totalPrice.value += price;
}
</script>

<style lang="scss">
.shopping {
  .shopping-content {
    padding-bottom: v-bind(paddingBottom);
  }
  .no-login {
    @include normalFlex(row, space-between);
    margin: 30rpx;
    padding: 30rpx;
    border-radius: 20rpx;
    background-color: white;
    .right {
      font-size: 0;
      .text {
        margin-right: 6rpx;
        vertical-align: super;
        font-size: $gFontSize;
        color: #8f8f8f;
      }
    }
  }
}
</style>
