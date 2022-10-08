import React from 'react';
import { BackTop } from 'antd';

import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Icon from '@/components/Icon';
import { EIconName } from '@/components/Icon/enums';

import styles from './styles.module.scss';

export interface ILayoutProps {
  showBanner?: boolean;
  children: React.ReactNode;
}

export default function Layout({ showBanner, children }: ILayoutProps) {
  return (
    <>
      <Header showBanner={showBanner} />

      {children}

      <Footer />

      <BackTop className={styles.backTop}>
        <div className={styles.icon}>
          <Icon name={EIconName.ICON_UP} />
        </div>
      </BackTop>
    </>
  );
}
