import React from 'react';
import ProCard from "@ant-design/pro-card";
import {ProjectDetailCard, ProjectList} from './projectDetail';

type AdvancedSearchProps = {
  onFilterChange?: (allValues: any) => void;
  onSearch?: (text: string) => void;
  onTypeChange?: (type: string) => void;
  defaultType?: string;
};

const ProjectInfoCard: React.FC<AdvancedSearchProps> = (props) => {
  return (
    <ProCard ghost split='vertical' gutter={8}>
      <ProCard colSpan={8}>
        <ProjectList/>
      </ProCard>
      <ProCard title="项目信息">
        <ProjectDetailCard/>
      </ProCard>
    </ProCard>
  );
};
export default ProjectInfoCard;
