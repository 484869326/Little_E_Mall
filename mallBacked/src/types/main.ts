interface IAdmin {
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

export type { IAdmin, IGood, ICategory, IGoodCategory, IOrder };
