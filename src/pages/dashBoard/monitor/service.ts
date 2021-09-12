import { request } from 'umi';
import type { TagType, zzData } from './data';

export async function queryTags(): Promise<{data: {list: TagType[],}}> {
  return request('/api/tags');
}

export async function fakeChartData(): Promise<{ data: zzData }> {
  return request('/api/fake_analysis_chart_data');
}
