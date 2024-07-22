declare namespace IRequest {
  type IRes<T> = {
    code: number;
    data?: T;
    msg?: string;
  };
  interface ICategory {
    cid: number;
    cName: string;
    parentId: number;
    level: number;
    cImg: string;
    createdAt: string;
    updatedAt: string;
    children?: ICategory[];
  }
  interface IGood {
    goodId: number;
    goodName: string;
    cid: number;
    explain: string | string[];
    advertise: string;
    price: string | string[];
    color: string | string[];
    goodImg: string;
    type: string | string[];
    swiper: string | string[];
    detail: string | string[];
    createdAt: string;
    updatedAt: string;
    isBuy?: boolean;
    shoppingId?: number;
    num?: number;
    userId?: number;
    goodType?: string[];
    goodColor?: string[];
  }
  interface IAddShop {
    goodId: number;
    userId: number;
    type: number;
    color: number;
    num: number;
    isBuy: boolean;
  }
  interface IBuy {
    shoppingId: string;
    goodId: string;
    color: string;
    type: string;
    num: string;
    userId: number;
    totalPrice: number;
    name: string;
    address: string;
    phone: string;
  }
  interface IOrder {
    orderId: number;
    userId: number;
    goodId: string;
    num: string;
    type: string;
    color: string;
    totalPrice: string;
    name: string;
    address: string;
    phone: string;
    condition: string;
    createdAt: string;
    updatedAt: string;
    goods: IGood[];
    totalNum?: number;
  }
  interface IOrderManage {
    condition: string;
    limit: number;
    page: number;
    userId: number;
  }
  interface IReceive {
    userId: number;
    orderId: number;
  }
}
