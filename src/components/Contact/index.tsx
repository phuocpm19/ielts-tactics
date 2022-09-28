import * as React from 'react';
import styles from './styles.module.scss';

export interface IConTactProps {}

export default function ConTact(props: IConTactProps) {
  return (
    <div className={styles.container}>
      <div className={styles.list}>
        <div className={styles.item}>
          <div className={styles.itemIcon}>img</div>
        </div>
      </div>
    </div>
  );
}
