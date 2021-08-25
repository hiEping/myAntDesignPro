import {
  QueryFilter,
  ProFormText,
  ProFormDateRangePicker,
  ProFormSelect,
} from '@ant-design/pro-form';
import ProCard from '@ant-design/pro-card';

const GysQueryFilterCard = () => {
  return (
    <ProCard direction="column"  style={{marginTop:16}}>
      <QueryFilter<{
        name: string;
        company: string;
      }>
        onFinish={
          async (values) => {
            console.log(values.name);
          }
        }
      >
        <ProFormText name="name" label="供应商名称" />
        <ProFormSelect
          mode="multiple"
          allowClear
          name="category"
          label="分类"
          showSearch
          valueEnum={{
            category1: '机械材料',
            category2: '土建施工',
            category3: '机电施工',
            category4: '系统集成'
          }}
        />
        <ProFormText name="creater" label="联系人" />
        <ProFormText name="status" label="联系电话" />
        <ProFormDateRangePicker name="create" label="入库时间" colSize={2} />
      </QueryFilter>
    </ProCard>
  );
};

export default GysQueryFilterCard;
