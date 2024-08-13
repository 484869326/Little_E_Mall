<template>
  <div ref="containerRef">
    <slot></slot>
    <Teleport to="body">
      <Transition
        @beforeEnter="handleBeforeEnter"
        @enter="handleEnter"
        @afterEnter="handleAfterEnter"
      >
        <div
          v-if="showMenu"
          class="context-menu"
          :style="{
            left: x + 'px',
            top: y + 'px'
          }"
        >
          <ul class="menu-list">
            <template v-for="item in menu" :key="item.label">
              <li @click="handleClick(item)" :class="{ 'is-disabled': item.disabled }">
                {{ item.label }}
              </li>
            </template>
          </ul>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>

<script setup lang="ts">
import { useContextMenu } from "@/hook/useContextMenu";

const props = defineProps<{
  menu: { label: string; value: string; disabled?: boolean }[];
}>();
const emit = defineEmits(["select"]);
const containerRef = ref(null);
const { x, y, showMenu } = useContextMenu(containerRef);
function handleClick(item: any) {
  showMenu.value = false;
  emit("select", item.value);
}
function handleBeforeEnter(el: Element) {
  const element = el as HTMLElement;
  element.style.height = "0px";
}
function handleEnter(el: Element) {
  const element = el as HTMLElement;
  element.style.height = "auto";
  const h = el.clientHeight;
  element.style.height = "0px";
  requestAnimationFrame(() => {
    element.style.height = h + "px";
    element.style.transition = ".3s";
  });
}
function handleAfterEnter(el: Element) {
  const element = el as HTMLElement;
  element.style.transition = "none";
}
// .v-enter-from {
//   opacity: 0;
// }
// .v-enter-to {
//   transition: 0.5s;
//   opacity: 1;
// }
</script>

<style scoped lang="scss">
.context-menu {
  position: fixed;
  z-index: 999;
  overflow: hidden;
  .menu-list {
    background-color: #ffffff;
    border-radius: 4px;
    box-shadow: 0 6px 18px 0 rgb(60 70 79 / 10%);
    padding: 8px 0;
    margin: 0;
    li {
      display: flex;
      justify-content: center;
      align-items: center;
      white-space: nowrap;
      list-style: none;
      line-height: 22px;
      padding: 5px 16px;
      margin: 0;
      font-size: 14px;
      color: #606266;
      cursor: pointer;
      outline: none;
      &:hover {
        background-color: #ecf5ff;
        color: #409eff;
      }
      &.is-disabled {
        color: #a8abb2;
        cursor: not-allowed;
        pointer-events: none;
      }
    }
  }
}
</style>
