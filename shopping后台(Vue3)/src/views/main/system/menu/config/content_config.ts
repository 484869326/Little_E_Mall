export const contentTableConfig = {
  title: '菜单列表',
  propList: [
    { prop: 'text', label: '菜单名称', minWidth: '60px' },
    { prop: 'icon', label: 'icon图标', minWidth: '40px' },
    { prop: 'path', label: '路径', minWidth: '100px' },
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
  ],
  showSelectColumn: false,
  childrenProps: {
    rowKey: 'id',
    treeProp: {
      children: 'children'
    }
  }
};
