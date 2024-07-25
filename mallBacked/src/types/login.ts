interface IAccount {
  username: string;
  password: string;
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
export type { IAccount, ILoginState, IMenu };
