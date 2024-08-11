import { useTabsStore } from "@/store/tabs";
import { ElButton, ElDialog, ElFormItem, ElInput, type FormInstance } from "element-plus";
import md5 from "md5";
import { createApp, defineComponent, h, type App } from "vue";
import { type NavigationGuardNext, type RouteLocationNormalized } from "vue-router";
import LocalCache from "@/utils/cache";

const secondaryPwdBox = defineComponent({
  name: "secondaryPwd",
  props: {
    pwd: {
      type: String,
      required: true
    },
    next: {
      type: Function,
      default: () => {}
    },
    from: {
      type: Object,
      default: () => {}
    }
  },
  setup(props) {
    const tabsStore = useTabsStore();
    const pwdValue = ref("admin");
    const pass = ref(false);
    const ruleFormRef = ref<FormInstance>();
    const visable = ref(true);
    function validateData() {
      return new Promise((resolve) => {
        ruleFormRef.value?.validate((valid: boolean) => {
          resolve(valid);
        });
      });
    }
    async function handleFormClick() {
      await validateData();
      if (md5(pwdValue.value) === props.pwd) {
        visable.value = false;
        pass.value = true;
        LocalCache.setCache("pass", true);
        props.next();
      } else {
        ElMessage.error("密码不对,请重新输入");
      }
    }
    watch(
      () => visable.value,
      (newVal) => {
        if (!newVal && !pass.value) {
          tabsStore.currentPath = props.from.fullPath;
          props.next(false);
        }
      }
    );
    return () =>
      h(
        ElDialog,
        {
          modelValue: visable.value,
          "onUpdate:modelValue": (newVal) => {
            visable.value = newVal;
          },
          title: "二次密码验证",
          width: "500",
          style: {
            "text-align": "center"
          }
        },
        () => {
          return h(
            ElForm,
            {
              "onSubmit.prevent": () => {},
              model: { password: pwdValue.value },
              ref: ruleFormRef
            },
            () => {
              return [
                h(
                  ElFormItem,
                  {
                    label: "密码",
                    prop: "password",
                    rules: [{ required: true, message: "密码不能为空", trigger: "blur" }]
                  },
                  () => {
                    return h(ElInput, {
                      type: "password",
                      showPassword: true,
                      modelValue: pwdValue.value,
                      "onUpdate:modelValue": (val) => {
                        pwdValue.value = val;
                      }
                    });
                  }
                ),
                h(
                  ElButton,
                  {
                    type: "primary",
                    "native-type": "submit",
                    onClick: handleFormClick,
                    style: {
                      display: "flex",
                      margin: "auto"
                    }
                  },
                  () => "确认"
                )
              ];
            }
          );
        }
      );
  }
});
let app: App<Element>;
export function secondaryPwd(
  pwd: string,
  next: NavigationGuardNext,
  from: RouteLocationNormalized
) {
  let div = document.querySelector("#secondary-pwd");
  if (div) {
    div.remove();
    app.unmount();
  }
  app = createApp(secondaryPwdBox, { pwd, next, from });
  div = document.createElement("div");
  div.id = "secondary-pwd";
  document.body.appendChild(div);
  app.mount(div);
}
