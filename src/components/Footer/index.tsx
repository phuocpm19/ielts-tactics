import * as React from 'react';
import styles from './styles.module.scss';

export interface IFooterProps {}

export default function Footer(props: IFooterProps) {
  return <div className={styles.container}>footer</div>;
}
