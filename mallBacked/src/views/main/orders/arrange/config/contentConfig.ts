export const contentTableConfig = {
  title: "订单列表",
  showIndexColumn: true,
  propList: [
    { prop: "userId", label: "用户id", minWidth: "60px" },
    { prop: "totalPrice", label: "总价格", minWidth: "100px" },
    { prop: "createdAt", label: "下单日期", minWidth: "100px" },
    { prop: "name", label: "收货人姓名", minWidth: "100px" },
    { prop: "address", label: "地址", minWidth: "100px" },
    { prop: "phone", label: "手机号", minWidth: "100px" },
    {
      prop: "condition",
      label: "状态",
      minWidth: "60px"
    },
    {
      prop: "option",
      label: "操作",
      minWidth: "120px",
      slotName: "option"
    }
  ],
  showSelectColumn: false
};
