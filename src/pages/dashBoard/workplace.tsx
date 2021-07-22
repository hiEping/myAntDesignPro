import React, { useState } from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import ProCard, { StatisticCard } from '@ant-design/pro-card';
import RcResizeObserver from 'rc-resize-observer';
import { RightOutlined, EllipsisOutlined } from '@ant-design/icons';
import { Space } from 'antd';

const { Statistic, Divider } = StatisticCard;

export default () => {
  const [responsive, setResponsive] = useState(false);

  return (
    <PageContainer>
      <RcResizeObserver
        key="resize-observer"
        onResize={(offset) => {
          setResponsive(offset.width < 596);
        }}
      >
        <ProCard split={responsive ? 'horizontal' : 'vertical'} ghost gutter={8} title='进度指标'>
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
      <ProCard style={{marginTop:16}} gutter={8} title="待审批">
        <StatisticCard
          title={
            <Space>
              <span>审批申请一</span>
              <RightOutlined style={{ color: 'rgba(0,0,0,0.65)' }} />
            </Space>
          }
          extra={<EllipsisOutlined />}
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
        <StatisticCard
          title={
            <Space>
              <span>审批申请二</span>
              <RightOutlined style={{ color: 'rgba(0,0,0,0.65)' }} />
            </Space>
          }
          extra={<EllipsisOutlined />}
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
        <StatisticCard
          title={
            <Space>
              <span>审批申请三</span>
              <RightOutlined style={{ color: 'rgba(0,0,0,0.65)' }} />
            </Space>
          }
          extra={<EllipsisOutlined />}
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
    </PageContainer>
  );
};
