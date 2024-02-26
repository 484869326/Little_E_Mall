<template>
  <view class="address-create">
    <view class="address-info">
      <text>收货姓名</text>
      <input
        type="text"
        v-model="formData.addressName"
        placeholder="收货人姓名"
        class="input"
      />
    </view>
    <view class="address-info">
      <text>手机号码</text>
      <input
        type="text"
        v-model="formData.addressPhone"
        placeholder="收货人手机号码"
        class="input"
      />
    </view>
    <view class="address-info">
      <text>收货地区</text>
      <uni-data-picker
        :localdata="localdata"
        placeholder="省市区县，乡镇"
        popup-title="省市区县，乡镇"
        v-model="formData.addressRegion"
        @change="handleChange"
      ></uni-data-picker>
    </view>
    <view class="address-info">
      <text>详细地址</text>
      <input
        type="text"
        v-model="formData.addressDetail"
        placeholder="收货人详细地址"
        class="input"
      />
    </view>
    <view class="bottom">
      <button class="button" type="primary" @click="$emit('save')">返回</button>
      <button class="button" @click="handleSavaClick">保存</button>
    </view>
  </view>
</template>

<script setup>
import { reactive, watchEffect } from "vue";
import { storeToRefs } from "pinia";
import { useMyStore } from "@/store/my.js";
import address from "@/static/json/address.json";
import { tips } from "@/utils/tips.js";

const props = defineProps(["index"]);
const phoneReg = /^(?:(?:\+|00)86)?1[3-9]\d{9}$/;
const emit = defineEmits(["save"]);
const myStore = useMyStore();
const { userInfo } = storeToRefs(myStore);
let city;
function handleTree(data, parent_code = null) {
  let res = [];

  let keys = {
    id: "code",
    pid: "parent_code",
    children: "children",

    text: "name",
    value: "code",
  };

  let oneItemDEMO = {
    text: "",
    value: "",
    children: [],
  };
  let oneItem = {};

  // 循环
  for (let index in data) {
    // 判断
    if (parent_code === null) {
      // 顶级菜单 - 省
      if (
        !data[index].hasOwnProperty(keys.pid) ||
        data[index][keys.pid] == parent_code
      ) {
        // 不存在parent_code，或者已匹配
        oneItem = JSON.parse(JSON.stringify(oneItemDEMO));
        oneItem.text = data[index][keys.text];
        oneItem.value = data[index][keys.value];

        // 递归下去
        oneItem.children = handleTree(data, data[index][keys.id]);
        res.push(oneItem);
      } else {
        // 匹配不到，跳过
      }
    } else {
      // 非顶级菜单 - 市、区、街道
      if (
        data[index].hasOwnProperty(keys.pid) &&
        data[index][keys.pid] == parent_code
      ) {
        // 已匹配
        oneItem = JSON.parse(JSON.stringify(oneItemDEMO));
        oneItem.text = data[index][keys.text];
        oneItem.value = data[index][keys.value];

        // 递归下去
        oneItem.children = handleTree(data, data[index][keys.id]);
        res.push(oneItem);
      } else {
        // 匹配不到，跳过
      }
    }
  }

  return res;
}
const localdata = handleTree(address);
const formData = reactive({
  addressName: "",
  addressPhone: "",
  addressRegion: "",
  addressRegionText: "",
  addressDetail: "",
});
watchEffect(() => {
  const index = props.index;
  city = userInfo.value.city;
  if (index) {
    Object.assign(formData, city[index]);
  } else {
    Object.assign(formData, {
      addressName: "",
      addressPhone: "",
      addressRegion: "",
      addressRegionText: "",
      addressDetail: "",
    });
  }
});
async function handleSavaClick() {
  if (!formData.addressName) {
    tips("收货人姓名不能为空");
    return;
  }
  if (!formData.addressPhone) {
    tips("收货人手机号不能为空");
    return;
  }
  if (!phoneReg.test(formData.addressPhone)) {
    tips("收货人手机号格式不对");
    return;
  }
  if (!formData.addressRegion) {
    tips("收货人收货地区不能为空");
    return;
  }
  if (props.index) {
    city.splice(props.index, 1, formData);
  } else {
    city.push(formData);
  }
  const res = await myStore.fetchUpdateUserInfo(userInfo.value.id, {
    ...userInfo.value,
    city,
  });
  if (res !== "更新成功") {
    tips("系统异常,请稍后再试");
    return;
  }
  userInfo.value.city = city;
  emit("save");
}
function handleChange({ detail }) {
  const value = detail.value;
  formData.addressRegionText = value.map((item) => item.text).join("/");
}
</script>

<style lang="scss" scoped>
.address-create {
  padding: 30rpx;
  .address-info {
    @include normalFlex(row, space-between);
    font-size: $gFontSize;
    padding: 40rpx 20rpx 0;
    background-color: white;
    &:first-child {
      border-radius: 20rpx 20rpx 0 0;
    }
    &:nth-last-child(2) {
      padding-bottom: 40rpx;
      border-radius: 0 0 20rpx 20rpx;
    }
    .input {
      padding: 0 40rpx;
      height: 60rpx;
      font-size: $gFontSize;
      flex-grow: 1;
      font-weight: normal;
    }
    :deep(.uni-data-tree) {
      .input-value {
        height: 60rpx;
        padding: 0 40rpx;
        border: none;
        .selected-area {
          font-size: $gFontSize;
        }
      }
    }
  }

  .bottom {
    display: flex;
    width: 100%;
    margin: 0 -30rpx;
    padding: 15rpx 30rpx;
    position: fixed;
    bottom: 0;
    background-color: white;
    box-sizing: border-box;
    .button {
      flex: 1;
      margin-right: 5rpx;
      font-size: $gFontSize;
      border-radius: 9999rpx;
      &:last-child {
        margin-left: 5rpx;
        margin-right: 0;
        color: white;
        background-color: $gPriceColor;
      }
    }
  }
}
</style>
