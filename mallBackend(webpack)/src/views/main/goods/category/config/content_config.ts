export const contentTableConfig = {
  title: '类别列表',
  addTitle: '新增类别',
  propList: [
    { prop: 'Cname', label: '类别名', minWidth: '60px' },
    { prop: 'Cimg', label: '图片', minWidth: '40px', slotName: 'Cimg' },
    {
      prop: 'created_at',
      label: '创建时间',
      minWidth: '60px',
      slotName: 'created_at'
    },
    {
      prop: 'updated_at',
      label: '更新时间',
      minWidth: '60px',
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
    rowKey: 'Cid',
    treeProp: {
      children: 'children'
    }
  }
};
