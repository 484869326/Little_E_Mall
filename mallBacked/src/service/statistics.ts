import { Request1 } from "./index";
import type { IDataType } from "@/types/service";
import type {
  IAdminSexCount,
  IOrderCount,
  ICategoryGoodsCount,
  IMonthPriceCount
} from "@/types/statistics";

enum StatisticsAPI {
  adminGenderCount = "/statistics/adminGenderCount",
  orderCount = "/statistics/orderCount",
  categoryGoodsCount = "/statistics/categoryGoodsCount",
  monthPriceCount = "/statistics/monthPriceCount"
}

export function getAdminSexCount() {
  return Request1.get<IDataType<IAdminSexCount[]>>({
    url: StatisticsAPI.adminGenderCount
  });
}

export function getOrderCount() {
  return Request1.get<IDataType<IOrderCount[]>>({
    url: StatisticsAPI.orderCount
  });
}
export function getCategoryGoodsCount() {
  return Request1.get<IDataType<ICategoryGoodsCount[]>>({
    url: StatisticsAPI.categoryGoodsCount
  });
}
export function getMonthPriceCount() {
  return Request1.get<IDataType<IMonthPriceCount[]>>({
    url: StatisticsAPI.monthPriceCount
  });
}
