const admin = () => import('@/views/main/system/admin/admin.vue');
export default {
  path: '/main/system/admin',
  name: 'admin',
  component: admin,
  children: []
};
