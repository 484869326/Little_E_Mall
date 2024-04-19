export const contentTableConfig = {
  title: "商品列表",
  addTitle: "新增商品",
  propList: [
    { prop: "goodName", label: "商品名", minWidth: "60px" },
    { prop: "cName", label: "类别", minWidth: "40px" },
    { prop: "explain", label: "描述", minWidth: "100px" },
    { prop: "advertise", label: "广告词", minWidth: "100px" },
    { prop: "price", label: "价格", minWidth: "100px" },
    { prop: "color", label: "颜色", minWidth: "100px" },
    {
      prop: "goodImg",
      label: "商品图",
      minWidth: "100px",
      slotName: "goodImg"
    },
    { prop: "type", label: "类型", minWidth: "100px" },
    { prop: "swiper", label: "轮播图", minWidth: "100px", slotName: "swiper" },
    { prop: "detail", label: "详细图", minWidth: "100px", slotName: "detail" },
    {
      prop: "createdAt",
      label: "录入时间",
      minWidth: "100px"
      // slotName: 'created_at'
    },
    {
      prop: "updatedAt",
      label: "变更时间",
      minWidth: "100px"
      // slotName: 'updated_at'
    },
    {
      label: "操作",
      minWidth: "100px",
      slotName: "operate"
    }
  ]
};
