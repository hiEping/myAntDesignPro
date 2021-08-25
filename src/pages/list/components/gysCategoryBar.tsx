import {StatisticCard} from "@ant-design/pro-card";
const {Divider} = StatisticCard;

const GysCategoryBar = (props: any) => {
  return(
    <StatisticCard.Group title="" direction={props.responsive ? 'column' : 'row'}>
      <StatisticCard
        statistic={{
          title: '机械与材料',
          tip: '沥青 水泥 砂石 沥青摊铺机 碎石洒布机 ...',
          value: 79,
          precision: 0,
          suffix: '家',
        }}
      />
      <Divider type={props.responsive ? 'horizontal' : 'vertical'} />
      <StatisticCard
        statistic={{
          title: '土建施工',
          tip: '路基 路面 桥梁 隧道 房建 装潢 养护 ...',
          value: 25,
          suffix: '家',
        }}
      />
      <Divider type={props.responsive ? 'horizontal' : 'vertical'} />
      <StatisticCard
        statistic={{
          title: '机电施工',
          tip: '供配电 照明 通信 机房 机电运维 车道设备 监控 服务器 ...',
          value: 47,
          suffix: '家',
        }}
      />
      <Divider type={props.responsive ? 'horizontal' : 'vertical'} />
      <StatisticCard
        statistic={{
          title: '系统集成',
          value: 58,
          suffix: '家',
        }}
      />
      <Divider type={props.responsive ? 'horizontal' : 'vertical'} />
      <StatisticCard
        statistic={{
          title: '其他',
          value: 256,
          suffix: '家',
        }}
      />
    </StatisticCard.Group>
  )
}
export default GysCategoryBar;
