import { ILoginState } from './login/type';
import { ISystemState } from './system/type';
import { IStatisticsState } from './statistics/type';
interface IRootState {
  entireCategory: any[];
}
interface ILoginResult {
  id: number;
  adminName: string;
  sex: string;
  Email: string;
  Address: string;
  adminPwd: string;
  Tel: string;
}

interface IRootWithModule {
  loginModule: ILoginState;
  systemModule: ISystemState;
  statisticsModule: IStatisticsState;
}
export type IStoreType = IRootState & IRootWithModule;
export { IRootState, ILoginResult };
