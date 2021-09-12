export type TagType = {
  name: string;
  value: number;
  type: string;
};
import { DataItem } from '@antv/g2plot/esm/interface/config';

export { DataItem };

export type OfflineDataType = {
  name: string;
  cvr: number;
};

export interface OfflineChartData {
  date: number;
  type: number;
  value: number;
}

export interface zzData {
  offlineData: OfflineDataType[];
  offlineChartData: DataItem[];
}
