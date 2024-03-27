export const contentTableConfig = {
  title: "类别列表",
  addTitle: "新增类别",
  propList: [
    { prop: "cName", label: "类别名", minWidth: "60px" },
    { prop: "cImg", label: "图片", minWidth: "40px", slotName: "cImg" },
    {
      prop: "createdAt",
      label: "创建时间",
      minWidth: "60px"
    },
    {
      prop: "updatedAt",
      label: "更新时间",
      minWidth: "60px"
    },
    {
      label: "操作",
      minWidth: "80px",
      slotName: "operate"
    }
  ],
  showSelectColumn: false,
  childrenProps: {
    rowKey: "cid",
    treeProp: {
      children: "children"
    }
  }
};
