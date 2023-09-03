type IFormType =
  | 'input'
  | 'password'
  | 'select'
  | 'datapicker'
  | 'switch'
  | 'checkbox'
  | 'radio'
  | 'upload';
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
}
export interface IForm {
  formItems: IFormItem[];
  labelWidth?: string;
  colLayout?: any;
  itemLayout?: any;
  itemStyle?: any;
}
