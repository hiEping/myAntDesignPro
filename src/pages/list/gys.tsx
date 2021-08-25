import { PageContainer } from '@ant-design/pro-layout';
import RcResizeObserver from 'rc-resize-observer';
import {useState} from 'react';
import GysQueryFilterCard from './components/gysQueryFilter';
import GysProCard from './components/gysProCard';
import GysCategoryBar from "@/pages/list/components/gysCategoryBar";
import GysEditModalFrom from "@/pages/list/components/gysEditModal";

const gys = () => {
  const [responsive, setResponsive] = useState(false);
  return(
    <PageContainer
      extra={[
        <GysEditModalFrom/>
      ]}
    >
      <RcResizeObserver
        key="resize-observer"
        onResize={(offset) => {
          setResponsive(offset.width < 596);
        }}>
        <GysCategoryBar responsive={responsive}/>
        <GysQueryFilterCard/>
        <GysProCard responsive={responsive}/>
      </RcResizeObserver>
    </PageContainer>
  )
}

export default gys;
