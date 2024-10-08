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

interface IPie {
  name: string;
  value: any;
}
interface ILine {
  xLabels: string[];
  values: any[];
}

export type { IAdminSexCount, IOrderCount, ICategoryGoodsCount, IMonthPriceCount, IPie, ILine };
