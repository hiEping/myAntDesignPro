import { Card, Col, Row} from 'antd';
// import { useRequest } from 'umi';
import type { FC } from 'react';
import {Gauge, Liquid} from '@ant-design/charts';
// import type { WordCloudData } from '@antv/g2plot/esm/plots/word-cloud/layer';

import { GridContent } from '@ant-design/pro-layout';
import ActiveChart from './components/ActiveChart';
// import {queryTags} from './service';
// import styles from './style.less';
import {Suspense, useState} from "react";
import moment from "moment";
import { DataItem } from '@antv/g2plot/esm';
import OfflineData from "./components/OfflineData";
import RiskList from './components/RiskList';
import Countdown from "antd/es/statistic/Countdown";

// const { Countdown } = Statistic;
//
const deadline = Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30; // Moment is also OK

const offlineData: { name: string, cvr: number }[] = [];
for (let i = 0; i < 5; i += 1) {
  offlineData.push({
    name: `项目 ${i}`,
    cvr: Math.ceil(Math.random() * 9) / 10,
  });
}

const offlineChartData: DataItem[] = [];
offlineChartData.push({
  date: moment('2019-01','YYYY-MM').format('YYYY-MM'),
  type: '计划值-PV',
  value: 0,
});
offlineChartData.push({
  date: moment('2019-01','YYYY-MM').format('YYYY-MM'),
  type: '实际值-AC',
  value: 0,
});
offlineChartData.push({
  date: moment('2019-01','YYYY-MM').format('YYYY-MM'),
  type: '挣值-EV',
  value: 0,
});

for (let i = 1; i < 33; i += 1) {
  // const date = moment(new Date().getTime() + 1000 * 60 * 30 * i).format('HH:mm');
  const date = moment('2019-01','YYYY-MM').add(i,'M').format('YYYY-MM');
  offlineChartData.push({
    date,
    type: '计划值-PV',
    value: 200 * i +Math.floor(Math.random() * 200) - 100,
  });
  offlineChartData.push({
    date,
    type: '实际值-AC',
    value: 200 * i +Math.floor(Math.random() * 200) - 100,
  });
  offlineChartData.push({
    date,
    type: '挣值-EV',
    value: 200 * i +Math.floor(Math.random() * 200) - 100,
  });
}

const Monitor: FC = () => {
  // const { loading, data } = useRequest(queryTags);
  const [currentTabKey, setCurrentTabKey] = useState<string>('');

  // const wordCloudData: WordCloudData[] = (data?.list || []).map((item) => {
  //   return {
  //     id: +Date.now(),
  //     word: item.name,
  //     weight: item.value,
  //   };
  // });

  const activeKey = currentTabKey || (offlineData[0] && offlineData[0].name) || '';

  const handleTabChange = (key: string) => {
    setCurrentTabKey(key);
  };

  return (
    <GridContent>
      <>
        <Row gutter={24}>
          <Col span={24}>
            <Card bordered={false}>
              <Countdown title="距离项目开通还剩" value={deadline} format="D 天 H 时 m 分 s 秒" />
            </Card>
          </Col>
        </Row>
        <Row gutter={24}>
          <Col span={24} style={{ marginBottom: 24 }}>
            <Suspense fallback={null}>
              <OfflineData
                activeKey={activeKey}
                loading={false}
                offlineData={offlineData}
                offlineChartData={offlineChartData}
                handleTabChange={handleTabChange}
              />
            </Suspense>
          </Col>
        </Row>
        <Row gutter={24}>
          <Col xl={18} lg={24} md={24} sm={24} xs={24} style={{ marginBottom: 24 }}>
          {/*  <Card title="活动实时交易情况" bordered={false}>*/}
          {/*    <Row>*/}
          {/*      <Col md={6} sm={12} xs={24}>*/}
          {/*        <Statistic*/}
          {/*          title="今日交易总额"*/}
          {/*          suffix="元"*/}
          {/*          value={numeral(124543233).format('0,0')}*/}
          {/*        />*/}
          {/*      </Col>*/}
          {/*      <Col md={6} sm={12} xs={24}>*/}
          {/*        <Statistic title="销售目标完成率" value="92%" />*/}
          {/*      </Col>*/}
          {/*      <Col md={6} sm={12} xs={24}>*/}
          {/*        <Countdown title="活动剩余时间" value={deadline} format="HH:mm:ss:SSS" />*/}
          {/*      </Col>*/}
          {/*      <Col md={6} sm={12} xs={24}>*/}
          {/*        <Statistic title="每秒交易总额" suffix="元" value={numeral(234).format('0,0')} />*/}
          {/*      </Col>*/}
          {/*    </Row>*/}
          {/*    <div className={styles.mapChart}>*/}
          {/*      <Map />*/}
          {/*    </div>*/}
          {/*  </Card>*/}
            <RiskList/>
          </Col>
          <Col xl={6} lg={24} md={24} sm={24} xs={24}>
            <Card title="项目情况预测" style={{ marginBottom: 24 }} bordered={false}>
              <ActiveChart />
            </Card>
            <Card
              title="项目整体健康指数"
              style={{ marginBottom: 24 }}
              bodyStyle={{ textAlign: 'center' }}
              bordered={false}
            >
              <Gauge
                height={180}
                min={0}
                max={100}
                forceFit
                value={87}
                range={[0, 25, 50, 75, 100]}
                statistic={{
                  visible: true,
                  text: '优',
                  color: '#30bf78',
                }}
              />
            </Card>
            {/*<Card*/}
            {/*  title="热门搜索" style={{ marginBottom: 24 }}*/}
            {/*  loading={loading}*/}
            {/*  bordered={false}*/}
            {/*  bodyStyle={{ overflow: 'hidden' }}*/}
            {/*>*/}
            {/*  <WordCloud*/}
            {/*    data={wordCloudData}*/}
            {/*    forceFit*/}
            {/*    height={162}*/}
            {/*    wordStyle={{*/}
            {/*      fontSize: [10, 20],*/}
            {/*    }}*/}
            {/*    shape="triangle"*/}
            {/*  />*/}
            {/*  /!* <TagCloud data={data?.list || []} height={161} /> *!/*/}
            {/*</Card>*/}
            <Card
              title="资源剩余" style={{ marginBottom: 24 }}
              bodyStyle={{ textAlign: 'center', fontSize: 0 }}
              bordered={false}
            >
              <Liquid
                height={161}
                min={0}
                max={10000}
                value={5639}
                forceFit
                padding={[0, 0, 0, 0]}
                statistic={{
                  formatter: (value) => `${((100 * value) / 10000).toFixed(1)}%`,
                }}
              />
            </Card>
          </Col>
        </Row>
        {/*<Row gutter={24}>*/}
        {/*  <Col xl={12} lg={24} sm={24} xs={24} style={{ marginBottom: 24 }}>*/}
        {/*    <Card title="各品类占比" bordered={false} className={styles.pieCard}>*/}
        {/*      <Row style={{ padding: '16px 0' }}>*/}
        {/*        <Col span={8}>*/}
        {/*          <RingProgress forceFit height={128} percent={0.28} />*/}
        {/*        </Col>*/}
        {/*        <Col span={8}>*/}
        {/*          <RingProgress color="#5DDECF" forceFit height={128} percent={0.22} />*/}
        {/*        </Col>*/}
        {/*        <Col span={8}>*/}
        {/*          <RingProgress color="#2FC25B" forceFit height={128} percent={0.32} />*/}
        {/*        </Col>*/}
        {/*      </Row>*/}
        {/*    </Card>*/}
        {/*  </Col>*/}
        {/*</Row>*/}
      </>
    </GridContent>
  );
};

export default Monitor;
