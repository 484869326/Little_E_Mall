import { Request1 } from '..';
import { IAccount } from './type';
import { IDataType } from '@/service/type';
import { ILoginResult } from '@/store/type';
enum LoginApi {
  AccountLogin = '/admin/login',
  GetMenu = '/menu/likeSelect'
}
export function accountLoginRequest(account: IAccount) {
  return Request1.post<IDataType<ILoginResult>>({
    url: LoginApi.AccountLogin,
    data: account
  });
}
export function accountMenuRequest() {
  return Request1.post<IDataType<ILoginResult>>({
    url: LoginApi.GetMenu,
	data:{}
  });
}
