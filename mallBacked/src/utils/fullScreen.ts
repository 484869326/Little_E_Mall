// 进入全屏
function enter(ele: Element): void {
  if (ele.requestFullscreen) {
    ele.requestFullscreen();
  } else if ((ele as any).mozRequestFullScreen) {
    (ele as any).mozRequestFullScreen();
  } else if ((ele as any).webkitRequestFullScreen) {
    (ele as any).webkitRequestFullScreen();
  } else if ((ele as any).msRequestFullscreen) {
    (ele as any).msRequestFullscreen();
  }
}
// 退出全屏
function exit(): void {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if ((document as any).mozCancelFullScreen) {
    (document as any).mozCancelFullScreen();
  } else if ((document as any).webkitExitFullscreen) {
    (document as any).webkitExitFullscreen();
  } else if ((document as any).msExitFullscreen) {
    (document as any).msExitFullscreen();
  }
}
function fullEle(): Element | null {
  return (
    document.fullscreenElement ||
    (document as any).webkitFullscreenElement ||
    (document as any).mozFullScreenElement ||
    (document as any).msFullscreenElement ||
    null
  );
}

// 判断是否全屏
function isFull(): boolean {
  return !!fullEle();
}
//切换全屏
function toggleFullScreen(ele: Element): void {
  isFull() ? exit() : enter(ele);
}

export default toggleFullScreen;
