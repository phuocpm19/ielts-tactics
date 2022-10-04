import * as React from 'react';
import Icon from '@/components/Icon';
import { EIconName } from '@/components/Icon/enums';
import styles from './styles.module.scss';
import classNames from 'classnames';

export interface IConTactProps {
  positionFooter?: boolean;
}

export default function ConTact({ positionFooter }: IConTactProps) {
  return (
    <div className={classNames(`${styles.container}`, positionFooter && styles.positionFooter)}>
      <div className={styles.list}>
        <div className={styles.item}>
          <div className={`${styles.item__icon} icon-common`}>
            <Icon name={EIconName.ICON_PHONE} />
          </div>
          <div className={styles.item__info}>0979 580 154</div>
        </div>

        <div className={styles.item}>
          <div className={`${styles.item__icon} icon-common`}>
            <Icon name={EIconName.ICON_MAIL} />
          </div>
          <div className={styles.item__info}>center.ieltstactics@gmail.com</div>
        </div>
      </div>
    </div>
  );
}
