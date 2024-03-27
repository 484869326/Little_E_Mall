import { Request1 } from "./index";
import type { IDataType } from "@/types/service";
import type { IAccount, IUser, IMenu } from "@/types/login";
enum LoginApi {
  AccountLogin = "/admin/login",
  GetMenu = "/menu/likeSelect"
}
export function loginRequest(account: IAccount) {
  return Request1.post<IDataType<IUser>>({
    url: LoginApi.AccountLogin,
    data: account
  });
}
export function menuRequest() {
  return Request1.post<IDataType<IMenu[]>>({
    url: LoginApi.GetMenu,
    data: {}
  });
}
