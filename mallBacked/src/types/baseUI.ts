export interface IBreadCrumb {
  name: string;
  path?: string;
}

export interface IDescriptionProp {
  name: string;
  description: string;
}
type IFormType =
  | "input"
  | "password"
  | "select"
  | "datepicker"
  | "switch"
  | "checkbox"
  | "radio"
  | "upload";
export interface IFormItem {
  field?: string;
  value?: any;
  type: IFormType;
  label: string;
  rules?: any[];
  placeholder?: any;
  options?: any[];
  dataOptions?: any;
  isHidden?: boolean;
  listType?: string;
  isChange?: any;
  disabled?: boolean;
  remote?: boolean;
}
export interface IForm {
  formItems: IFormItem[];
  labelWidth?: string;
  colLayout?: any;
  itemLayout?: any;
  itemStyle?: any;
}
export type ImageItem = "text" | "picture" | "picture-card";

export interface ITable {
  prop?: string;
  label: string;
  minWidth: string;
  slotName?: string;
}

export interface IDetail {
  field: string;
  label: string;
  slotName?: string;
  children?: IDetail[];
}
