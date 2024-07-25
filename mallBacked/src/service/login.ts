import { Request1 } from "./index";
import type { IDataType } from "@/types/service";
import type { IAccount, IMenu } from "@/types/login";
import type { IAdmin } from "@/types/main";
enum LoginApi {
  AccountLogin = "/admin/login",
  getRoleMenu = "/admin/getRoleMenu"
}
export function loginRequest(account: IAccount) {
  return Request1.post<IDataType<IAdmin>>({
    url: LoginApi.AccountLogin,
    data: account
  });
}
export function menuRequest(roleId: number) {
  return Request1.post<IDataType<IMenu[]>>({
    url: LoginApi.getRoleMenu,
    data: {
      roleId
    }
  });
}
