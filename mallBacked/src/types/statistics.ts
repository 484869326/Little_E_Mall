interface IAdminSexCount {
  gender: string;
  count: number;
}
interface IOrderCount {
  date: string;
  count: number;
}
interface ICategoryGoodsCount {
  cid: string;
  cName: string;
  count: number;
}
interface IMonthPriceCount {
  month: string;
  price: number;
}

export type { IAdminSexCount, IOrderCount, ICategoryGoodsCount, IMonthPriceCount };
