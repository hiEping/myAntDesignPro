import ProCard, { StatisticCard } from '@ant-design/pro-card';
import type { StatisticProps } from '@ant-design/pro-card';
import {Button, Tag} from "antd";
import ProList from "@ant-design/pro-list";

const { Statistic } = StatisticCard;

const data = [
  {projname:'鄂咸高速',news:'路面C2标试验段开工',newstime:'2019-08-08'},
  {projname:'红莲湖大数据云产业园',news:'园区展厅区域启用',newstime:'2021-05-31'},
].map((item) => ({
  title: item.projname,
  subTitle: <Tag color="#5BD8A6">正常</Tag>,
  avatar: 'https://gw.alipayobjects.com/zos/antfincdn/UCSiy1j6jx/xingzhuang.svg',
  description:<div>{item.news} {item.newstime}</div>,
}));

export const ProjectList = () => {
  return(
    <ProList<any>
      size="small"
      split={true}
      toolBarRender={() => {
        return [
          <Button key="3" type="primary">
            新建
          </Button>,
        ];
      }}
      search={{
        filterType: 'light',
      }}
      rowKey="name"
      headerTitle="项目清单"
      showActions="hover"
      dataSource={data}
      metas={{
        title:{search:false},
        subTitle:{search:false},
        avatar:{search:false},
        description:{search:false},
        actions: {
          render: (text, row) => [
            <a href={row.url} target="_blank" rel="noopener noreferrer" key="view">
              查看
            </a>,
          ],
          search: false,
        },
        status: {
          // 自己扩展的字段，主要用于筛选，不在列表中显示
          title: '状态',
          valueType: 'select',
          valueEnum: {
            all: {
              text: '全部',
              status: 'Default'
            },
            preparing: {
              text: '准备阶段',
              status: 'Processing',
            },
            designing: {
              text: '设计阶段',
              status: 'Processing',
            },
            building: {
              text: '建设阶段',
              status: 'Processing',
            },
            end: {
              text: '收尾阶段',
              status: 'Processing',
            },
            finished: {
              text: '已结束',
              status: 'Success',
            },
          },
        },
      }}
    />
  )
}

const items = [
  // { key: '1', title: '全部', value: 10, total: true },
  { key: '2', status: 'default', title: '概况', value: 5 },
  { key: '3', status: 'processing', title: '设计', value: 3 },
  { key: '4', status: 'error', title: '合同', value: 1 },
  { key: '5', status: 'success', title: '进度', value: 1 },
  { key: '6', status: 'success', title: '质量', value: 1 },
  { key: '7', status: 'success', title: '安全', value: 1 },
  { key: '8', status: 'success', title: '防疫', value: 1 },
];

export const ProjectDetailCard = () => {
  return(
    <ProCard
      tabs={{
        onChange: (key) => {
          console.log('key', key);
        },
      }}
    >
      {items.map((item) => (
        <ProCard.TabPane
          style={{ width: '100%' }}
          key={item.key}
          tab={
            <Statistic
              layout="vertical"
              title={item.title}
              value={item.value}
              status={item.status as StatisticProps['status']}
              style={{ width: 120, borderRight: item.total ? '1px solid #f0f0f0' : undefined }}
            />
          }
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#fafafa',
              height: 100,
            }}
          >
            关联展示内容 {item.title}
          </div>
        </ProCard.TabPane>
      ))}
    </ProCard>
  )
}

