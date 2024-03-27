const admin = () => import("@/views/main/system/admin/AdminView.vue");
export default {
  path: "/main/system/admin",
  name: "admin",
  component: admin,
  children: []
};
