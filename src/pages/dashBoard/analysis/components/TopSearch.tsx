import { Card, Table} from 'antd';
import {TinyArea} from '@ant-design/charts';
import React from 'react';
import type { DataItem } from '../data.d';

import styles from '../style.less';

const columns = [
  {
    title: '时间',
    dataIndex: 'index',
    key: 'index',
  },
  {
    title: '分项工程编号',
    dataIndex: 'keyword',
    key: 'keyword',
    render: (text: React.ReactNode) => <a href="/">{text}</a>,
  },
  {
    title: '计量金额(万元)',
    dataIndex: 'count',
    key: 'count',
    sorter: (a: { count: number }, b: { count: number }) => a.count - b.count,
    className: styles.alignRight,
  },
  {
    title: '工程量占比',
    dataIndex: 'range',
    key: 'range',
    sorter: (a: { range: number }, b: { range: number }) => a.range - b.range,
    render: (text: React.ReactNode, record: { status: number }) => (
      // <Trend flag={record.status === 1 ? 'down' : 'up'}>
      //   <span style={{ marginRight: 4 }}>{text}%</span>
      // </Trend>
      <span style={{ marginRight: 4 }}>{text}%</span>
    ),
  },
];


const TopSearch = ({
  loading,
  visitData2,
  searchData,
  dropdownGroup,
}: {
  loading: boolean;
  visitData2: DataItem[];
  dropdownGroup: React.ReactNode;
  searchData: DataItem[];
}) => (
  <Card
    loading={loading}
    bordered={false}
    title="分项工程计量明细"
    extra={dropdownGroup}
    style={{
      height: '100%',
    }}
  >
    {/*<Row gutter={68}>*/}
      {/*<Col sm={12} xs={24} style={{ marginBottom: 24 }}>*/}
        {/*<NumberInfo*/}
        {/*  subTitle={*/}
        {/*    <span>*/}
        {/*      搜索用户数*/}
        {/*      <Tooltip title="指标说明">*/}
        {/*        <InfoCircleOutlined style={{ marginLeft: 8 }} />*/}
        {/*      </Tooltip>*/}
        {/*    </span>*/}
        {/*  }*/}
        {/*  gap={8}*/}
        {/*  total={numeral(12321).format('0,0')}*/}
        {/*  status="up"*/}
        {/*  subTotal={17.1}*/}
        {/*/>*/}
      {/*  <TinyArea xField="x" height={45} forceFit yField="y" smooth data={visitData2} />*/}
      {/*</Col>*/}
      {/*<Col sm={12} xs={24} style={{ marginBottom: 24 }}>*/}
        {/*<NumberInfo*/}
        {/*  subTitle={*/}
        {/*    <span>*/}
        {/*      人均搜索次数*/}
        {/*      <Tooltip title="指标说明">*/}
        {/*        <InfoCircleOutlined style={{ marginLeft: 8 }} />*/}
        {/*      </Tooltip>*/}
        {/*    </span>*/}
        {/*  }*/}
        {/*  total={2.7}*/}
        {/*  status="down"*/}
        {/*  subTotal={26.2}*/}
        {/*  gap={8}*/}
        {/*/>*/}
      {/*  <TinyArea xField="x" height={45} forceFit yField="y" smooth data={visitData2} />*/}
      {/*</Col>*/}
    {/*</Row>*/}
    {/*<TinyColumn xField="x" height={45} forceFit yField="y"  data={visitData2} />*/}
      <TinyArea
        height={75}
        forceFit
        xField="x"
        yField="y"
        smooth
        data={visitData2}
        tooltip={{
          visible:true,
          fields:['y'],
        }}
      />
    <Table<any>
      rowKey={(record) => record.index}
      size="small"
      columns={columns}
      dataSource={searchData}
      pagination={{
        style: { marginBottom: 0 },
        pageSize: 5,
      }}
    />
  </Card>
);

export default TopSearch;
