import { Request1 } from "./index";
import type { IDataType } from "@/types/service";
import type { IAccount, IMenu } from "@/types/login";
import type { IAdmin } from "@/types/main";

enum LoginApi {
  login = "/admin/login",
  register = "/admin/register",
  updatePassword = "/admin/updatePassword",
  updateUserInfo = "/admin/updateUserInfo",
  validateAdminName = "/admin/validateAdminName",
  getRoleMenu = "/admin/getRoleMenu",
  logout = "/admin/logout"
}
export function loginRequest(account: IAccount) {
  return Request1.post<IDataType<IAdmin>>({
    url: LoginApi.login,
    data: account
  });
}
export function logout() {
  return Request1.post<IDataType>({
    url: LoginApi.logout
  });
}
export function menuRequest() {
  return Request1.post<IDataType<IMenu[]>>({
    url: LoginApi.getRoleMenu,
    showLoading: false
  });
}

export function validateAdminName(adminName: string) {
  return Request1.post<IDataType<boolean>>({
    url: LoginApi.validateAdminName,
    showLoading: false,
    data: {
      adminName
    }
  });
}

export function registerRequest(data: any) {
  return Request1.post<IDataType>({
    url: LoginApi.register,
    data
  });
}
export function updatePassword(data: any) {
  return Request1.post<IDataType>({
    url: LoginApi.updatePassword,
    data
  });
}

export function updateUserInfo(data: any) {
  return Request1.post<IDataType>({
    url: LoginApi.updateUserInfo,
    data
  });
}
