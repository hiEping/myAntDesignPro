import { InfoCircleOutlined } from '@ant-design/icons';
import { Progress, TinyArea, RingProgress} from '@ant-design/charts';
import { Col, Row, Tooltip } from 'antd';

import numeral from 'numeral';
import { ChartCard, Field } from './Charts';
import type { DataItem } from '../data.d';
import Trend from './Trend';
import Yuan from '../utils/Yuan';
import styles from '../style.less';

const topColResponsiveProps = {
  xs: 24,
  sm: 12,
  md: 12,
  lg: 12,
  xl: 6,
  style: { marginBottom: 24 },
};

const otherConfigs = {
  height:46,
  width:200,
  // autoFit:true,
  forceFit:true,
  percent:0.8,
  barWidthRatio:0.5,
  color: ['#04f42b', '#E8EDF3'],
  annotations: [
    {
      type: 'line',
      start: ['95%', '0%'],
      end: ['95%', '100%'],
      style: {
        stroke: '#ffcc00',
        lineWidth: 2,
      },
    },
  ],
};

const ringConfigs ={
  height:46,
  forceFit:true,
  percent:0.98,
  color: ['#F4664A', '#E8EDF3'],
  innerRadius: 0.85,
  radius: 0.98,
  statistic: {
    title: {
      style: {
        color: '#363636',
        fontSize: '12px',
        lineHeight: '14px',
      },
      formatter: function formatter() {
        return '进度';
      },
    },
  },
}

const IntroduceRow = ({ loading, visitData }: { loading: boolean; visitData: DataItem[] }) => (
  <Row gutter={24}>
    <Col {...topColResponsiveProps}>
      <ChartCard
        bordered={false}
        title="项目投资预算"
        action={
          <Tooltip title="完成项目全部工程量的预算金额">
            <InfoCircleOutlined />
          </Tooltip>
        }
        loading={loading}
        total={() => <Yuan>2656954230</Yuan>}
        footer={
          <Trend flag="up">
            项目成本偏差 : {2659599416-2656954230}
          </Trend>
        }
        contentHeight={46}
      >
        <Field label="项目实际计量支付金额" value={`￥${numeral(2659599416).format('0,0')}`} />
      </ChartCard>
    </Col>

    <Col {...topColResponsiveProps}>
      <ChartCard
        bordered={false}
        loading={loading}
        title="计划施工周期"
        action={
          <Tooltip title="计划完成项目全部工程量所需的时间">
            <InfoCircleOutlined />
          </Tooltip>
        }
        // total={numeral(1103).format('0,0')}
        total="1103天"
        footer={
          <Trend flag="down">
            项目进度偏差 : {1103-1040}天
          </Trend>
        }
        contentHeight={46}
      >
        <Progress
          {...otherConfigs}
        />
      </ChartCard>
    </Col>
    <Col {...topColResponsiveProps}>
      <ChartCard
        bordered={false}
        loading={loading}
        title="总共计量次数"
        action={
          <Tooltip title="一个计量单元对应一个中间计量表">
            <InfoCircleOutlined />
          </Tooltip>
        }
        // total={numeral(6560).format('0,0')}
        total = "656次"
        footer={<Field label="平均每月" value="20单" />}
        contentHeight={46}
      >
        <TinyArea
          color="#ffcc00"
          xField="x"
          height={46}
          forceFit
          yField="y"
          smooth
          data={visitData}
        />
      </ChartCard>
    </Col>
    <Col {...topColResponsiveProps}>
      <ChartCard
        loading={loading}
        bordered={false}
        title="计量检验合格率"
        action={
          <Tooltip title="指标说明">
            <InfoCircleOutlined />
          </Tooltip>
        }
        total="98.7%"
        footer={
          <div style={{ whiteSpace: 'nowrap', overflow: 'hidden' }}>
            <Trend flag="down" style={{ marginRight: 16 }}>
              <span className={styles.trendText}>检验通过648次</span>
            </Trend>
            <Trend flag="up">
              <span className={styles.trendText}>检验不通过9次</span>
            </Trend>
          </div>
        }
        contentHeight={46}
      >
        {/*<RingProgress*/}
        {/*  forceFit*/}
        {/*  height={46}*/}
        {/*  percent={0.98}*/}
        {/*  />*/}
        <RingProgress {...ringConfigs}/>
      </ChartCard>
    </Col>
  </Row>
);

export default IntroduceRow;
