import React from 'react';
import { Alert, Spin } from 'antd';

import styles from './styles.module.scss';

export interface ILoadingProps {}

export default function Loading(props: ILoadingProps) {
  return (
    <div className={styles.Loading}>
      <Spin tip="Loading..." />
    </div>
  );
}
