export default {
  title: "订单详情",
  detailList: [
    { label: "订单号:", field: "orderId" },
    { label: "购买总数量:", field: "num", slotName: "num" },
    { label: "总价格:", field: "totalPrice" },
    { label: "下单时间:", field: "createdAt" },
    { label: "收货人:", field: "name" },
    { label: "收货地址:", field: "address" },
    { label: "收货手机号:", field: "phone" },
    {
      label: "商品信息",
      field: "goods",
      children: [
        { field: "goodName", label: "商品名:" },
        {
          field: "price",
          label: "价格:",
          slotName: "price"
        },
        {
          field: "color",
          label: "颜色:",
          slotName: "Color"
        },
        {
          field: "goodImg",
          label: "商品图:"
        }
      ]
    }
  ]
};
