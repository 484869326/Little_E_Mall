type IFormType =
  | 'input'
  | 'password'
  | 'select'
  | 'datapicker'
  | 'switch'
  | 'checkbox'
  | 'radio'
  | 'image';
export interface IFormItem {
  field?: string;
  type: IFormType;
  label: string;
  rules?: any[];
  placeholder?: any;
  options?: any[];
  dataOptions?: any;
  isHidden?: boolean;
}
export interface IForm {
  formItems: IFormItem[];
  labelWidth?: string;
  colLayout?: any;
  itemLayout?: any;
  itemStyle?: any;
}
