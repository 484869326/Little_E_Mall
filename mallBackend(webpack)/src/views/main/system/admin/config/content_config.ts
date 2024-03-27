export const contentTableConfig = {
  title: '管理员列表',
  addTitle: '新增管理员',
  propList: [
    { prop: 'adminName', label: '管理员名', minWidth: '60px' },
    { prop: 'Sex', label: '性别', minWidth: '40px' },
    { prop: 'Email', label: '邮箱', minWidth: '100px' },
    { prop: 'Address', label: '地址', minWidth: '100px' },
    { prop: 'adminPwd', label: '密码', minWidth: '60px' },
    { prop: 'Tel', label: '手机号', minWidth: '100px' },
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
