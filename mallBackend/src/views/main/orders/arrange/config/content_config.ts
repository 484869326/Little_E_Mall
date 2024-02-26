export const contentTableConfig = {
  title: '订单列表',
  propList: [
    { prop: 'Userid', label: '用户id', minWidth: '60px' },
    { prop: 'Goodid', label: '商品id', minWidth: '40px' },
    { prop: 'Num', label: '数量', minWidth: '100px' },
    { prop: 'totalPrice', label: '总价格', minWidth: '100px' },
    { prop: 'OrderDate', label: '下单日期', minWidth: '100px' },
    { prop: 'Name', label: '收货人姓名', minWidth: '100px' },
    { prop: 'Address', label: '地址', minWidth: '100px' },
    { prop: 'Phone', label: '手机号', minWidth: '100px' },
    {
      prop: 'condition',
      label: '状态',
      minWidth: '60px'
    },
    {
      prop: 'sendOut',
      label: '发货',
      minWidth: '60px',
      slotName: 'sendOut'
    },
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
    }
  ],
  showSelectColumn: false
};
