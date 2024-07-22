<script>
import { useMyStore } from "@/store/my";
export default {
  onLaunch: function () {
    //加载用户信息
    const myStore = useMyStore();
    const isLogin = uni.getStorageSync("isLogin");
    const phone = uni.getStorageSync("phone");
    if (isLogin && phone) {
      myStore.fetchUserInfo({ phone });
    }
    console.log("App Launch");
  },
  onShow: function () {
    console.log("App Show");
  },
  onHide: function () {
    console.log("App Hide");
  },
};
</script>

<style>
/*每个页面公共css */
</style>
