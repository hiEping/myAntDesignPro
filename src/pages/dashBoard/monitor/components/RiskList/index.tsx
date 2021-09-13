import { Progress, Tag } from 'antd';
import ProList from '@ant-design/pro-list';

const data = [
  '新人比例较多',
  '关键机械缺乏保养',
  '材料不足',
  '安全员人数不够',
  '日常疫情管理宽松',
  '技术方案存在不确定因素',
  '雨季来临',
  '不具备作业界面',
].map((item) => ({
  title: item,
  subTitle: <Tag color="#5BD8A6">分部工程xxx</Tag>,
  actions: [<a>刷新</a>],
  avatar: 'https://gw.alipayobjects.com/zos/antfincdn/UCSiy1j6jx/xingzhuang.svg',
  content: (
    <div
      style={{
        flex: 1,
      }}
    >
      <div
        style={{
          width: 200,
        }}
      >
        <div>威胁指数</div>
        <Progress percent={80} />
      </div>
    </div>
  ),
}));

export default () => {
  return (
    <ProList<any>
      pagination={{
        defaultPageSize: 8,
        showSizeChanger: false,
      }}
      grid={{ gutter: 16, column: 2 }}
      metas={{
        title: {},
        subTitle: {},
        type: {},
        avatar: {},
        content: {},
        actions: {},
      }}
      headerTitle="风险监控"
      dataSource={data}
    />
  );
};
