<template>
  <view class="address-list">
    <view class="list">
      <template v-for="(item, index) in list" :key="item">
        <view class="item">
          <view class="msg">
            <view class="userinfo">
              <text class="address-name">{{ item.addressName }}</text>
              <text class="address-phone">{{ item.addressPhone }}</text>
            </view>
            <view class="address-region"> {{ item.addressRegionText }}</view>
            <view class="address-detail"> {{ item.addressDetail }}</view>
          </view>
          <view class="option">
            <view class="default" @click="handleDefaultAddressClick(index)">
              <uni-icons
                :type="index == defaultId ? 'checkbox-filled' : 'circle'"
                size="40rpx"
                :color="index == defaultId ? '#f3402b' : '#7e7e7e'"
              ></uni-icons
              ><text class="text">设为默认地址</text></view
            >
            <view class="edit">
              <text class="text" @click="handleDeleteClick(index)">删除</text>
              <text @click.prevent="$emit('update', index)" class="text">编辑</text>
            </view>
          </view>
        </view>
      </template>
      <template v-if="list.length === 0"><view class="no-list">暂无数据</view></template>
    </view>
    <view class="bottom">
      <button class="button" @click="$emit('create')">
        <uni-icons type="plusempty" color="white" size="30rpx"></uni-icons>
        新建收货地址
      </button>
    </view>
    <tips ref="tipsRef"></tips>
  </view>
</template>

<script setup lang="ts">
import { ref, watchEffect } from "vue";
import { storeToRefs } from "pinia";
import { useMyStore } from "@/store/my";
import { useTips } from "@/utils/tips";
import tips from "@/components/tips.vue";

const tipsRef = ref<InstanceType<typeof tips>>();
const emit = defineEmits(["create", "update"]);
const myStore = useMyStore();
const { userInfo } = storeToRefs(myStore);
const list = ref(
  [] as {
    addressName: string;
    addressPhone: string;
    addressRegionText: string;
    addressDetail: string;
  }[]
);
const defaultId = ref<number | null>(null);
watchEffect(() => {
  const value = userInfo.value;
  if (Object.keys(value).length === 0) return;
  defaultId.value = userInfo.value.defaultId;
  list.value = value.city;
});
function handleDeleteClick(index: number) {
  if (index == defaultId.value) {
    useTips(tipsRef, "默认地址禁止删除");
    return;
  }
  uni.showModal({
    content: "是否删除这项地址？",
    success: function (res) {
      if (res.confirm) {
        list.value.splice(index, 1);
        if (defaultId.value !== null && index < defaultId.value) {
          defaultId.value--;
          userInfo.value.defaultId--;
        }
        myStore.fetchUpdateUserInfo(userInfo.value.id, {
          ...userInfo.value,
          defaultId: defaultId.value,
          city: JSON.stringify(list.value),
        });
      }
    },
  });
}
async function handleDefaultAddressClick(index: number) {
  defaultId.value = index;
  const res = await myStore.fetchUpdateUserInfo(userInfo.value.id, {
    ...userInfo.value,
    defaultId: index,
  });
  if (res !== "更新成功") {
    useTips(tipsRef, "异常错误");
    return;
  }
  userInfo.value.defaultId = index;
}
</script>

<style lang="scss" scoped>
.address-list {
  .list {
    padding-top: 30rpx;
    .no-list {
      padding: 40rpx 0;
      text-align: center;
    }
    .item {
      margin: 0 20rpx 30rpx 20rpx;
      padding: 20rpx;
      border-radius: 20rpx;
      background-color: white;
      .msg {
        padding-bottom: 20rpx;
        border-bottom: 1px solid #eaeaea;
        .userinfo {
          margin-bottom: 10rpx;
          .address-name {
            color: #ec7636;
            margin-right: 30rpx;
          }
        }
        .address-region {
          margin-bottom: 5rpx;
        }
        .address-detail,
        .address-region {
          font-size: $gFontSize;
          color: #858585;
        }
      }
      .option {
        @include normalFlex(row, space-between);
        padding-top: 20rpx;
        padding-right: 20rpx;
        color: #858585;
        font-size: $gFontSize;
        .default {
          .text {
            margin-left: 4rpx;
            vertical-align: top;
          }
        }
        .edit {
          .text {
            font-size: 24rpx;
            &:first-child {
              margin-right: 50rpx;
            }
          }
        }
      }
    }
  }
  .bottom {
    width: 100%;
    padding: 15rpx 30rpx;
    position: fixed;
    bottom: 0;
    background-color: white;
    box-sizing: border-box;
    .button {
      font-size: $gFontSize;
      border-radius: 9999rpx;
      color: white;
      background-color: $gPriceColor;
    }
  }
}
</style>
