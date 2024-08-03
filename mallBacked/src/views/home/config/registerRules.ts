import { validateAdminName } from "@/service/login";

export const rules = {
  adminName: [
    { required: true, message: "请输入用户名", trigger: "blur" },
    {
      pattern: /^[a-z0-9]{5,10}$/,
      message: "账号为5-10个数字或者英文",
      trigger: "blur"
    },
    {
      validator: (rule: any, value: string, callback: any) => {
        const res = validateAdminName(value).then((res) => {
          if (res.data) {
            callback();
            return;
          }
          callback(new Error("此账号已注册，请更换别的账号"));
        });
      },
      trigger: "blur"
    }
  ],
  tel: [
    {
      required: true,
      message: "手机号不能为空",
      trigger: "blur"
    },
    {
      pattern: /^1[0-9]{10}$/,
      message: "请输入正确的手机号",
      trigger: "blur"
    }
  ],
  gender: [
    {
      required: true,
      message: "性别不能为空",
      trigger: "blur"
    }
  ],
  email: [
    {
      required: true,
      message: "邮箱不能为空",
      trigger: "blur"
    },
    {
      pattern: /^\S+@\S+\.\S+$/i,
      message: "请输入正确的邮箱",
      trigger: "blur"
    }
  ],
  address: [
    {
      required: true,
      message: "地址不能为空",
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
  ],
  rePassword: [] as any[]
};
