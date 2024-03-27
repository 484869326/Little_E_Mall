import { Request1 } from '../../index';
import { IDataType } from '@/service/type';

export function getPageListData(url: string, queryInfo: any) {
  return Request1.post<IDataType>({
    url,
    data: queryInfo
  });
}
export function deletePageData(url: string) {
  return Request1.delete<IDataType>({
    url
  });
}

export function addPageData(url: string, data: any) {
  return Request1.post<IDataType>({
    url,
    data
  });
}

export function editPageData(url: string, data: any) {
  return Request1.patch<IDataType>({
    url,
    data
  });
}

export function uploadFile(url: string, data: any) {
  return Request1.post({
    url,
    data
  });
}
