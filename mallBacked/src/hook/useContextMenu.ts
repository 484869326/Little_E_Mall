export function useContextMenu(containerRef: any) {
  const x = ref(0);
  const y = ref(0);
  const showMenu = ref(false);
  const handleContextMenu = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    showMenu.value = true;
    x.value = e.clientX;
    y.value = e.clientY;
  };
  function closeMenu() {
    showMenu.value = false;
  }
  onMounted(() => {
    const div = containerRef.value;
    div && div.addEventListener("contextmenu", handleContextMenu);
    window.addEventListener("click", closeMenu, true);
    window.addEventListener("contextmenu", closeMenu, true);
  });
  onUnmounted(() => {
    const div = containerRef.value;
    div && div.removeEventListener("contextmenu", handleContextMenu);
    window.removeEventListener("click", closeMenu, true);
    window.removeEventListener("contextmenu", closeMenu, true);
  });
  return {
    x,
    y,
    showMenu
  };
}
