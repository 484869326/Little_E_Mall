import type { IMenu } from "./login";

interface IAdmin {
  address: string;
  email: string;
  gender: string;
  status: number;
  tel: string;
  adminName: string;
  adminPwd: string;
  id: number;
  roleId: number;
  createdAt: string;
  updatedAt: string;
  role: IRole;
}

interface IGood {
  cid: number;
  cName: string;
  color: string;
  detail: string[];
  explain: string;
  goodId: number;
  goodImg: string;
  goodName: string;
  swiper: string[];
  type: string;
  advertise: string;
  category: null;
  createdAt: string;
  price: string;
  updatedAt: string;
}

interface ICategory {
  cid: number;
  cImg: string;
  cName: string;
  level: number;
  parentId: number;
  children: ICategory[];
  createdAt: string;
  updatedAt: string;
}

interface IGoodCategory {
  cid: number;
  cName: string;
}

interface IOrder {
  address: string;
  goodId: string;
  name: string;
  num: string;
  Phone: string;
  userId: number;
  color: string;
  condition: string;
  orderId: number;
  totalPrice: string;
  type: string;
  createdAt: string;
  updatedAt: string;
}

interface IUser {
  id: number;
  nickName: string;
  gender: number;
  avatarUrl: string;
  city: string;
  defaultId: number;
  phone: string;
  password: string;
  status: number;
  createdAt: string;
  updatedAt: string;
}

interface IRole {
  id: number;
  name: string;
  intro: string;
  createdAt: string;
  updatedAt: string;
  rolemenus?: IMenu[];
}

export type { IAdmin, IUser, IGood, ICategory, IGoodCategory, IOrder, IRole };
