export const contentTableConfig = {
  title: "菜单列表",
  addTitle: "新增菜单",
  propList: [
    { prop: "text", label: "菜单名称", minWidth: "120px" },
    { prop: "icon", label: "icon图标", minWidth: "80px", slotName: "icon" },
    { prop: "path", label: "路径", minWidth: "100px" },
    {
      prop: "createdAt",
      label: "提交时间",
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
    rowKey: "id",
    treeProp: {
      children: "children"
    }
  }
};
