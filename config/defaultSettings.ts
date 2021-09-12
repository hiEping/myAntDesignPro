import { Settings as LayoutSettings } from '@ant-design/pro-layout';

const Settings: LayoutSettings & {
  pwa?: boolean;
  logo?: string;
} = {
/*
  navTheme: 'light',
  // 拂晓蓝
  primaryColor: '#1890ff',
  layout: 'mix',
  contentWidth: 'Fluid',
  fixedHeader: false,
  fixSiderbar: true,
  colorWeak: false,
  title: 'Ant Design Pro',
  pwa: false,
  logo: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg',
  iconfontUrl: '',
*/
  // 明青
  primaryColor: "#07dcbc",
  layout: "mix",
  contentWidth: "Fluid",
  navTheme: "light",
  splitMenus: false,
  fixedHeader: false,
  title:"项目决策信息平台",
  logo:"/logo_jt.png",
};

export default Settings;
