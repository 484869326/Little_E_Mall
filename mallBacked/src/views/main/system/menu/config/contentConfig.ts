export const contentTableConfig = {
  title: "菜单列表",
  addTitle: "新增菜单",
  propList: [
    { prop: "text", label: "菜单名称", minWidth: "60px" },
    { prop: "icon", label: "icon图标", minWidth: "40px", slotName: "icon" },
    { prop: "path", label: "路径", minWidth: "100px" },
    {
      prop: "createdAt",
      label: "创建时间",
      minWidth: "100px"
    },
    {
      prop: "updatedAt",
      label: "更新时间",
      minWidth: "100px"
    },
    {
      label: "操作",
      minWidth: "80px",
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
