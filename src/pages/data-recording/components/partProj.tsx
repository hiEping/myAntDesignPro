import React, { useRef } from 'react';
import ProForm, {
  StepsForm,
  ProFormText,
  ProFormDatePicker,
  ProFormSelect,
  ProFormTextArea,
  ProFormCheckbox,
  ProFormDateRangePicker,
} from '@ant-design/pro-form';
import ProCard from '@ant-design/pro-card';
import type { FormInstance } from 'antd';
import { message } from 'antd';

const waitTime = (time: number = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};

const PartProjForm = () =>{
  const formRef = useRef<FormInstance>();

  return (
    <ProCard>
      <StepsForm<{ name: string; }>
        formRef={formRef}
        onFinish={async () => {
          await waitTime(1000);
          message.success('提交成功');
        }}
        formProps={{
          validateMessages: {
            required: '此项为必填项',
          },
        }}
      >
        <StepsForm.StepForm<{ name: string; }>
          name="project-contract"
          title="项目与标段"
          stepProps={{
            description: '所在项目与标段',
          }}
          onFinish={async () => {
            console.log(formRef.current?.getFieldsValue());
            //await waitTime(2000);
            return true;
          }}
        >
          <ProFormSelect
            //width="md"
            request={async () => [
              { label: '鄂咸高速建设项目', value: 'exian' },
            ]}
            placeholder="选择项目"
            name="inProject"
            label="所在项目"
          />
          <ProFormSelect
            name="inContract"
            label="所在标段"
            options={[
            { label: '路基', value: 'all' },
            { label: '路面', value: 'open' },
            { label: 'XX桥', value: 'closed' },
            { label: '房建', value: 'processing' },
          ]}
            placeholder="选择标段"
            rules={[
              { required: true, message: 'Please select your favorite colors!', type: 'string' },
            ]}
          />
        </StepsForm.StepForm>
        <StepsForm.StepForm<{ checkbox: string; }>
          name=""
          title="分项工程范围"
          stepProps={{
            description: '这里填入分项工程范围',
          }}
          onFinish={async () => {
            console.log(formRef.current?.getFieldsValue());
            return true;
          }}
        >
        </StepsForm.StepForm>
        <StepsForm.StepForm
          name="partProjectStartTable"
          title="图片上传"
          stepProps={{
            description: '这里上传经批复的分项工程开工申请表格',
          }}
        >

        </StepsForm.StepForm>
      </StepsForm>
    </ProCard>
  );
}
export default PartProjForm;
