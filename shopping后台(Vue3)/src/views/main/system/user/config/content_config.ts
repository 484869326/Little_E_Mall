export const contentTableConfig = {
  title: '用户列表',
  propList: [
    { prop: 'nickName', label: '用户名', minWidth: '60px' },
    { prop: 'gender', label: '性别', minWidth: '40px' },
    { prop: 'city', label: '城市', minWidth: '100px' },
    { prop: 'phone', label: '手机号', minWidth: '100px' },
    { prop: 'avatarUrl', label: '头像', minWidth: '100px' },
    { prop: 'Status', label: '状态', minWidth: '60px', slotName: 'status' },
    {
      prop: 'created_at',
      label: '创建时间',
      minWidth: '100px',
      slotName: 'created_at'
    },
    {
      prop: 'updated_at',
      label: '更新时间',
      minWidth: '100px',
      slotName: 'updated_at'
    },
    {
      label: '操作',
      minWidth: '80px',
      slotName: 'operate'
    }
  ]
};
