export const contentTableConfig = {
  title: '类别列表',
  propList: [
    { prop: 'Cname', label: '类别名', minWidth: '60px' },
    { prop: 'parentID', label: '父亲ID', minWidth: '40px' },
    { prop: 'Clevel', label: '层级', minWidth: '40px' },
    { prop: 'parentimg', label: '父亲图片', minWidth: '40px' },
    { prop: 'Cimg', label: '图片', minWidth: '40px' },
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
