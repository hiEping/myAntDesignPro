import { PageContainer } from '@ant-design/pro-layout';
import RcResizeObserver from 'rc-resize-observer';
import Gantt from 'react-gantt-antd';
import 'react-gantt-antd/lib/css/style.css';

export default () =>{
const tasks_a = [
    {
      id: "title1",
      title: "任务名称",
      start: new Date('2020-06-01'),
      end: new Date('2020-08-02'),
    }
  ]

  const tasks_b = [
    {
      id: "title1",
      title: "任务名称",
      start: new Date('2020-07-01'),
      end: new Date('2020-09-02'),
    }
  ]

  const sub_projects = [
    {
      id: "sub_project1",
      title: "子项目",
      tasks: tasks_b,
    }
  ]

  const projects = [
    {
      id: "project1",
      title: "项目1",
      tasks: tasks_a,
      projects: sub_projects,
      isOpen: false,
    }
  ]

  return (
    <PageContainer>
      <RcResizeObserver>
        <Gantt
          start={new Date('2020-06-01')}
          end={new Date('2020-10-01')}
          now={new Date('2020-7-01')}
          zoom={1}
          projects={projects}
          enableSticky
          scrollToNow
        />
      </RcResizeObserver>
    </PageContainer>
  )
}
