export const rules = {
  username: [
    {
      required: true,
      message: "账号不能为空",
      trigger: "blur"
    },
    {
      pattern: /^[a-z0-9]{5,10}$/,
      message: "账号为5-10个数字或者英文",
      trigger: "blur"
    }
  ],
  password: [
    {
      required: true,
      message: "密码不能为空",
      trigger: "blur"
    },
    {
      pattern: /^[a-z0-9]{5,10}$/,
      message: "密码为5-10个数字或者英文",
      trigger: "blur"
    }
  ]
};
