import { Request1 } from '../../index';
import { IDataType } from '@/service/type';
enum StatisticsAPI {
  adminSexCount = '/statistics/adminSexCount',
  orderCount = '/statistics/orderCount',
  categoryGoodsCount = '/statistics/categoryGoodsCount',
  monthPriceCount = '/statistics/monthPriceCount'
}

export function getAdminSexCount() {
  return Request1.get<IDataType>({
    url: StatisticsAPI.adminSexCount
  });
}

export function getOrderCount() {
  return Request1.get<IDataType>({
    url: StatisticsAPI.orderCount
  });
}
export function getCategoryGoodsCount() {
  return Request1.get<IDataType>({
    url: StatisticsAPI.categoryGoodsCount
  });
}
export function getMonthPriceCount() {
  return Request1.get<IDataType>({
    url: StatisticsAPI.monthPriceCount
  });
}
