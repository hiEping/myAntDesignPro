import React, { useState, useEffect } from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import RcResizeObserver from 'rc-resize-observer';
import ProCard, { StatisticCard } from '@ant-design/pro-card';
import { DownOutlined } from '@ant-design/icons';
import { Space, Button, Dropdown, Menu, Modal, Skeleton, Timeline, Typography, Anchor } from 'antd';

const { Statistic, Divider } = StatisticCard;

const AnchorExample: React.FC = () => {
  const [targetOffset, setTargetOffset] = useState<number | undefined>(undefined);
  useEffect(() => {
    setTargetOffset(window.innerHeight / 2);
  }, []);
  return (
    <Anchor offsetTop={200} targetOffset={targetOffset}>
      <Anchor.Link href="#projectInfo" title="项目信息" />
      <Anchor.Link href="#milestone" title="大纪事" />
      <Anchor.Link href="#docs" title="相关材料" />
      <Anchor.Link href="#otherInfo" title="其他信息" />
    </Anchor>
  );
};

export default () => {
  const [responsive, setResponsive] = useState(false);
  const { Title, Paragraph } = Typography;
  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="1">同意</Menu.Item>
      <Menu.Item key="2">不同意</Menu.Item>
    </Menu>
  );
  const [visible, setVisible] = useState(false);

  function handleMenuClick(e: any) {
    console.log('click', e);
  }

  // @ts-ignore
  return (
    <PageContainer>
      <RcResizeObserver
        key="resize-observer"
        onResize={(offset) => {
          setResponsive(offset.width < 596);
        }}
      >
        <ProCard split={responsive ? 'horizontal' : 'vertical'} ghost gutter={16} title='进度指标'>
          <StatisticCard
            colSpan={responsive ? 24 : 6}
            title="财年业绩目标"
            statistic={{
              value: 82.6,
              suffix: '亿',
              description: <Statistic title="日同比" value="6.47%" trend="up" />,
            }}
            chart={
              <img
                src="https://gw.alipayobjects.com/zos/alicdn/PmKfn4qvD/mubiaowancheng-lan.svg"
                alt="进度条"
                width="100%"
              />
            }
            footer={
              <>
                <Statistic value="70.98%" title="财年业绩完成率" layout="horizontal" />
                <Statistic value="86.98%" title="去年同期业绩完成率" layout="horizontal" />
                <Statistic value="88.98%" title="前年同期业绩完成率" layout="horizontal" />
              </>
            }
          />
          <StatisticCard
            statistic={{
              title: '财年总收入',
              value: 601987768,
              description: <Statistic title="日同比" value="6.15%" trend="up" />,
            }}
            chart={
              <img
                src="https://gw.alipayobjects.com/zos/alicdn/zevpN7Nv_/xiaozhexiantu.svg"
                alt="折线图"
                width="100%"
              />
            }
          >
            <Statistic
              title="大盘总收入"
              value={1982312}
              layout="vertical"
              description={<Statistic title="日同比" value="6.15%" trend="down" />}
            />
          </StatisticCard>
          <StatisticCard
            statistic={{
              title: '当日排名',
              value: 6,
              description: <Statistic title="日同比" value="3.85%" trend="down" />,
            }}
            chart={
              <img
                src="https://gw.alipayobjects.com/zos/alicdn/zevpN7Nv_/xiaozhexiantu.svg"
                alt="折线图"
                width="100%"
              />
            }
          >
            <Statistic
              title="近7日收入"
              value={17458}
              layout="vertical"
              description={<Statistic title="日同比" value="6.47%" trend="up" />}
            />
          </StatisticCard>
          <StatisticCard
            statistic={{
              title: '财年业绩收入排名',
              value: 2,
              description: <Statistic title="日同比" value="6.47%" trend="up" />,
            }}
            chart={
              <img
                src="https://gw.alipayobjects.com/zos/alicdn/zevpN7Nv_/xiaozhexiantu.svg"
                alt="折线图"
                width="100%"
              />
            }
          >
            <Statistic
              title="月付费个数"
              value={601}
              layout="vertical"
              description={<Statistic title="日同比" value="6.47%" trend="down" />}
            />
          </StatisticCard>
        </ProCard>
      </RcResizeObserver>
      <RcResizeObserver
        key="resize-observer"
        onResize={(offset) => {
          setResponsive(offset.width < 596);
        }}
      >
        <ProCard split={responsive ? 'horizontal' : 'vertical'} ghost gutter={8} title='质量指标' style={{marginTop:16}}>
          <StatisticCard
            statistic={{
              title: '总流量(人次)',
              value: 601986875,
            }}
          />
          <Divider type={responsive ? 'horizontal' : 'vertical'} />
          <StatisticCard
            statistic={{
              title: '付费流量',
              value: 3701928,
              description: <Statistic title="占比" value="61.5%" />,
            }}
            chart={
              <img
                src="https://gw.alipayobjects.com/zos/alicdn/ShNDpDTik/huan.svg"
                alt="百分比"
                width="100%"
              />
            }
            chartPlacement="left"
          />
          <StatisticCard
            statistic={{
              title: '免费流量',
              value: 1806062,
              description: <Statistic title="占比" value="38.5%" />,
            }}
            chart={
              <img
                src="https://gw.alipayobjects.com/zos/alicdn/6YR18tCxJ/huanlv.svg"
                alt="百分比"
                width="100%"
              />
            }
            chartPlacement="left"
          />
        </ProCard>
      </RcResizeObserver>
      <ProCard style={{marginTop:16}} gutter={8} title="待审批" ghost>
        <ProCard title="支付审批" extra="XX项目" style={{ maxWidth: 300 }} headerBordered hoverable
          actions={[
            <Button type="text" key="detail" onClick={() => setVisible(true)}>详情</Button>,
            <Dropdown overlay={menu}>
              <Button type="text">
                操作 <DownOutlined />
              </Button>
            </Dropdown>
          ]}
        >
          <StatisticCard
            statistic={{
              value: 1102893,
              prefix: '¥',
              description: (
                <Space>
                  <Statistic title="实际完成度" value="82.3%" />
                  <Statistic title="当前目标" value="¥6000" />
                </Space>
              ),
            }}
            chart={
              <>
                <img
                  src="https://gw.alipayobjects.com/zos/alicdn/BA_R9SIAV/charts.svg"
                  alt="chart"
                  width="100%"
                />
              </>
            }
            style={{ width: 268 }}
          />
        </ProCard>
        <ProCard title="支付审批" extra="XX项目" style={{ maxWidth: 300 }} headerBordered hoverable
          actions={[
            <Button type="text" key="detail" onClick={() => setVisible(true)}>详情</Button>,
            <Dropdown overlay={menu}>
              <Button type="text">
                操作 <DownOutlined />
              </Button>
            </Dropdown>
          ]}
        >
          <StatisticCard
            statistic={{
              value: 1102893,
              prefix: '¥',
              description: (
                <Space>
                  <Statistic title="实际完成度" value="82.3%" />
                  <Statistic title="当前目标" value="¥6000" />
                </Space>
              ),
            }}
            chart={
              <>
                <img
                  src="https://gw.alipayobjects.com/zos/alicdn/BA_R9SIAV/charts.svg"
                  alt="chart"
                  width="100%"
                />
              </>
            }
            style={{ width: 268 }}
          />
        </ProCard>
        <ProCard title="支付审批" extra="XX项目" style={{ maxWidth: 300 }} headerBordered hoverable
          actions={[
            <Button type="text" key="detail" onClick={() => setVisible(true)}>详情</Button>,
            <Dropdown overlay={menu}>
              <Button type="text">
                操作 <DownOutlined />
              </Button>
            </Dropdown>
          ]}
        >
          <StatisticCard
            statistic={{
              value: 1102893,
              prefix: '¥',
              description: (
                <Space>
                  <Statistic title="实际完成度" value="82.3%" />
                  <Statistic title="当前目标" value="¥6000" />
                </Space>
              ),
            }}
            chart={
              <>
                <img
                  src="https://gw.alipayobjects.com/zos/alicdn/BA_R9SIAV/charts.svg"
                  alt="chart"
                  width="100%"
                />
              </>
            }
            style={{ width: 268 }}
          />
        </ProCard>
        <ProCard title="支付审批" extra="XX项目" style={{ maxWidth: 300 }} headerBordered hoverable
          actions={[
            <Button type="text" key="detail" onClick={() => setVisible(true)}>详情</Button>,
            <Dropdown overlay={menu}>
              <Button type="text">
                操作 <DownOutlined />
              </Button>
            </Dropdown>
          ]}
        >
          <StatisticCard
            statistic={{
              value: 1102893,
              prefix: '¥',
              description: (
                <Space>
                  <Statistic title="实际完成度" value="82.3%" />
                  <Statistic title="当前目标" value="¥6000" />
                </Space>
              ),
            }}
            chart={
              <>
                <img
                  src="https://gw.alipayobjects.com/zos/alicdn/BA_R9SIAV/charts.svg"
                  alt="chart"
                  width="100%"
                />
              </>
            }
            style={{ width: 268 }}
          />
        </ProCard>
      </ProCard>
      <Modal
        style={{ top: 20 }}
        visible={visible}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
        width={window.innerWidth*0.75}
        footer={null}
      >
        <ProCard ghost>
          <ProCard>
            <Typography>
              <Title id="projectInfo" level={3}>项目信息</Title>
              <Paragraph>
                <Skeleton active />
                <Skeleton active />
                <Skeleton active />
              </Paragraph>
              <Title id="milestone" level={3}>大纪事</Title>
              <Paragraph>
                <Skeleton active />
                <Timeline mode="left">
                  <Timeline.Item color="green" label="2015-09-01">
                    <p>Create a services</p>
                    <Skeleton.Image />
                  </Timeline.Item>
                  <Timeline.Item color="blue" label="2015-09-01 09:12:11">
                    <p>Solve initial network problems</p>
                    <Skeleton.Image />
                    <Skeleton.Image />
                  </Timeline.Item>
                  <Timeline.Item color="red">Technical testing</Timeline.Item>
                  <Timeline.Item color="pink" label="2015-09-01 09:12:11">Network problems being solved</Timeline.Item>
                </Timeline>
                <Skeleton active />
                <Timeline mode="left">
                  <Timeline.Item color="green" label="2015-09-01">Create a services</Timeline.Item>
                  <Timeline.Item color="blue" label="2015-09-01 09:12:11">Solve initial network problems</Timeline.Item>
                  <Timeline.Item color="red">Technical testing</Timeline.Item>
                  <Timeline.Item color="pink" label="2015-09-01 09:12:11">Network problems being solved</Timeline.Item>
                </Timeline>
              </Paragraph>
              <Title id="docs" level={3}>相关材料</Title>
              <Paragraph>
                <Skeleton active />
                <Skeleton.Image />
                <Skeleton.Image />
                <Skeleton.Image />
              </Paragraph>
              <Title id="otherInfo" level={3}>其他信息</Title>
              <Paragraph>
                <Skeleton active />
                <Skeleton active />
              </Paragraph>
            </Typography>
          </ProCard>
          <ProCard colSpan="200px">
            <AnchorExample/>
          </ProCard>
        </ProCard>
      </Modal>
    </PageContainer>
  );
};
