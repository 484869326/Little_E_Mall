export const contentTableConfig = {
  title: "类别列表",
  addTitle: "新增类别",
  propList: [
    { prop: "cName", label: "类别名", minWidth: "100px" },
    { prop: "cImg", label: "图片", minWidth: "100px", slotName: "cImg" },
    {
      prop: "createdAt",
      label: "录入时间",
      minWidth: "180px"
    },
    {
      prop: "updatedAt",
      label: "变更时间",
      minWidth: "180px"
    },
    {
      label: "操作",
      minWidth: "120px",
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
