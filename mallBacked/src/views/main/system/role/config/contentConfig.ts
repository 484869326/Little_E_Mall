export const contentTableConfig = {
  title: "角色列表",
  addTitle: "新建角色",
  showIndexColumn: true,
  propList: [
    { prop: "name", label: "角色", minWidth: "100px" },
    { prop: "intro", label: "描述", minWidth: "40px", slotName: "gender" },
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
  ]
};
