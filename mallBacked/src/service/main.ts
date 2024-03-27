import { Request1 } from "./index";
import type { IDataType } from "@/types/service";

export function getPageListData(url: string, queryInfo: any = {}) {
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
