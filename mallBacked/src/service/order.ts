import { Request1 } from "./index";
import type { IDataType } from "@/types/service";

export function getOrderDetail(data: any) {
  return Request1.post<IDataType>({
    url: "/getOrderList",
    data
  });
}
