import { Col, Row } from 'antd';
import * as React from 'react';

import SidebarRight from '@/components/SidebarRight';

import styles from './styles.module.scss';

export interface IContainerProps {
  children: React.ReactNode;
  isChild?: boolean;
}

export default function Container({ children, isChild }: IContainerProps) {
  return (
    <div className={styles.wrapper}>
      {!isChild ? (
        <>{children}</>
      ) : (
        <Row gutter={24}>
          <Col xs={24} lg={18}>
            {children}
          </Col>
          <Col lg={6}>
            <SidebarRight />
          </Col>
        </Row>
      )}
    </div>
  );
}
