interface IAccount {
  username: string;
  password: string;
}
interface IUser {
  address: string;
  email: string;
  gender: string;
  status: number;
  tel: string;
  adminName: string;
  adminPwd: string;
  id: number;
  createdAt: string;
  updatedAt: string;
}
interface ILoginState {
  userInfo: any;
  getMenu: any;
}
interface IMenu {
  id: number;
  text: string;
  icon: string;
  path: string;
  parentId: number;
  level: number;
  createdAt: string;
  updatedAt: string;
  children?: IMenu[];
}
export type { IAccount, IUser, ILoginState, IMenu };
