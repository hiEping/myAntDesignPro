import ProCard, {StatisticCard} from '@ant-design/pro-card';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import {Dropdown, Menu} from "antd";

const { Statistic } = StatisticCard;

const menu=(
  <Menu>
    <Menu.Item key="0">
      <a href="https://www.antgroup.com">1st menu item</a>
    </Menu.Item>
  </Menu>
)

const GysProCard = (props: any) => {
  const innerCardStyle = {marginTop:16};
  return(
    <ProCard ghost wrap style={{marginTop:16}} gutter={24} >
      <ProCard
        title="北京字节跳动科技有限公司" headerBordered hoverable
        //layout="center"
        colSpan={props.responsive ? 24 : 8} style={innerCardStyle}
        actions={[
          // <SettingOutlined key="setting" />,
          <Dropdown overlay={menu} trigger={['click']}>
            <SettingOutlined key="setting" />
          </Dropdown>,
          <EditOutlined key="edit" />,
          <EllipsisOutlined key="ellipsis" />,
        ]}
        split={props.responsive ? 'horizontal':'vertical'}
      >
        <ProCard split='horizontal'>
          <StatisticCard
            statistic={{
              title: '历史合同数',
              value: 34,
              description: <Statistic title="正在进行中的合同数" value="2" />,
            }}
          />
          <StatisticCard
            statistic={{
              title: '历史总支付金额',
              prefix:'¥',
              suffix:'元',
              precision: 2,
              value: 2358136.85,
              description: <Statistic title="较去年同比" value="8.04%" trend="up" />,
            }}
          />
        </ProCard>
        {/*<img*/}
        {/*  alt="image"*/}
        {/*  width="128"*/}
        {/*  height="128"*/}
        {/*  src="https://i-1-lanrentuku.qqxzb-img.com/2020/11/20/eba2b14b-6fff-4a6f-b3ab-724bebca27ab.png?imageView2/2/w/1024/"*/}
        {/*/>*/}
        <ProCard split='horizontal'>
          <StatisticCard
            statistic={{
              title: '项目平均得分',
              value: 8.6,
              description: <Statistic title="较2020" value="8.04%" trend="down" />,
            }}
          />
          <StatisticCard
            statistic={{
              title: '合同预计完成时间',
              value: 288,
              suffix:'天后',
              description: <Statistic title="较计划完成时间" value="0天" trend="up" />,
            }}
          />
        </ProCard>
      </ProCard>
      <ProCard
        title="深圳市腾讯计算机系统有限公司" headerBordered hoverable
        colSpan={props.responsive ? 24 : 8} style={innerCardStyle}
        actions={[
          <SettingOutlined key="setting" />,
          <EditOutlined key="edit" />,
          <EllipsisOutlined key="ellipsis" />,
        ]}
      >
      </ProCard>
      <ProCard
        title="华为技术有限公司" headerBordered hoverable
        colSpan={props.responsive ? 24 : 8} style={innerCardStyle}
        actions={[
          <SettingOutlined key="setting" />,
          <EditOutlined key="edit" />,
          <EllipsisOutlined key="ellipsis" />,
        ]}
      >
      </ProCard>
      <ProCard
        title="北京百度网讯科技有限公司" headerBordered hoverable
        colSpan={props.responsive ? 24 : 8} style={innerCardStyle}
        actions={[
          <SettingOutlined key="setting" />,
          <EditOutlined key="edit" />,
          <EllipsisOutlined key="ellipsis" />,
        ]}
      >
      </ProCard>
    </ProCard>
  )
}
export default GysProCard;
