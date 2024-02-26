export const contentTableConfig = {
  title: '商品列表',
  addTitle: '新增商品',
  propList: [
    { prop: 'Goodname', label: '商品名', minWidth: '60px' },
    { prop: 'Cname', label: '类别', minWidth: '40px' },
    { prop: 'Explain', label: '描述', minWidth: '100px' },
    { prop: 'advertise', label: '广告词', minWidth: '100px' },
    { prop: 'price', label: '价格', minWidth: '100px' },
    { prop: 'color', label: '颜色', minWidth: '100px' },
    {
      prop: 'Goodimg',
      label: '商品图',
      minWidth: '100px',
      slotName: 'Goodimg'
    },
    { prop: 'Type', label: '类型', minWidth: '100px' },
    { prop: 'Swiper', label: '轮播图', minWidth: '100px', slotName: 'Swiper' },
    { prop: 'Detail', label: '详细图', minWidth: '100px', slotName: 'Detail' },
    {
      prop: 'created_at',
      label: '创建时间',
      minWidth: '100px'
      // slotName: 'created_at'
    },
    {
      prop: 'updated_at',
      label: '更新时间',
      minWidth: '100px'
      // slotName: 'updated_at'
    },
    {
      label: '操作',
      minWidth: '100px',
      slotName: 'operate'
    }
  ]
};
