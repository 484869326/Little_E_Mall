export const contentTableConfig = {
  title: "管理员列表",
  addTitle: "新增管理员",
  showIndexColumn: true,
  propList: [
    { prop: "adminName", label: "管理员名", minWidth: "100px" },
    { prop: "gender", label: "性别", minWidth: "40px", slotName: "gender" },
    { prop: "email", label: "邮箱", minWidth: "100px" },
    { prop: "address", label: "地址", minWidth: "100px" },
    // { prop: "adminPwd", label: "密码", minWidth: "60px" },
    { prop: "tel", label: "手机号", minWidth: "100px" },
    { prop: "status", label: "状态", minWidth: "60px", slotName: "status" },
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
