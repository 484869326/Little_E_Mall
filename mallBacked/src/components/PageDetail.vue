<template>
  <div class="page-detail">
    <DrawerUI v-model:visible="visible">
      <h1 class="title">{{ title }}</h1>
      <div class="table">
        <template v-for="item in detailList" :key="item.field">
          <template v-if="item?.children">
            <ul>
              <li>{{ item.label }}</li>
            </ul>
            <template v-for="(data, index) in detailData[item.field]" :key="data">
              <div class="children-table">
                <template v-for="sonItem in item.children" :key="sonItem.field">
                  <ul>
                    <li>{{ sonItem.label }}</li>
                    <li>
                      <slot :name="sonItem.slotName" :row="detailData" :data="data" :index="index">
                        <template v-if="data[sonItem.field].includes('http' || 'https')">
                          <img :src="data[sonItem.field]" :alt="data['Goodname']" class="image" />
                        </template>
                        <template v-else>
                          {{ data[sonItem.field] }}
                        </template>
                      </slot>
                    </li>
                  </ul>
                </template>
              </div>
            </template>
          </template>
          <template v-else>
            <ul>
              <li>{{ item.label }}</li>
              <li>
                <slot :name="item.slotName" :data="detailData[item.field]" :row="{}" :index="null">
                  {{ detailData[item.field] }}
                </slot>
              </li>
            </ul>
          </template>
        </template>
      </div>
    </DrawerUI>
  </div>
</template>

<script setup lang="ts">
import type { PropType } from "vue";
import type { IDetail } from "@/types/baseUI";
import DrawerUI from "@/base-ui/DrawerUI.vue";

defineProps({
  title: {
    type: String,
    required: true
  },
  detailList: {
    type: Array as PropType<IDetail[]>,
    required: true
  },
  detailData: {
    type: Object,
    required: true
  }
});
const visible = ref(false);
function setVisible(value: boolean) {
  visible.value = value;
}
defineExpose({
  setVisible
});
</script>

<style scoped lang="scss">
.page-detail {
  .title {
    display: flex;
    align-items: center;
    justify-content: center;
    &::before,
    &::after {
      content: "";
      display: block;
      width: 100px;
      height: 2px;
    }
    &::before {
      margin-right: 10px;
      background: linear-gradient(
        -244deg,
        rgba(219, 219, 219, 0) 0%,
        rgb(219, 219, 219) 50%,
        rgb(161 161 161) 100%
      );
    }
    &::after {
      margin-left: 10px;
      background: linear-gradient(
        244deg,
        rgba(219, 219, 219, 0) 0%,
        rgb(219, 219, 219) 50%,
        rgb(161 161 161) 100%
      );
    }
  }
  .table {
    ul {
      display: flex;
      justify-content: space-between;
      list-style: none;
      margin: 0;
      padding: 0;
      li {
        min-height: 50px;
      }
    }
    .children-table {
      padding-left: 10px;
      &:not(:last-child) {
        position: relative;
        margin-bottom: 40px;
        &::after {
          position: absolute;
          content: "";
          bottom: -6px;
          height: 2px;
          width: 100%;
          background: #e5e5e5;
        }
      }
      li {
        .image {
          width: 100px;
        }
      }
    }
  }
}
</style>
