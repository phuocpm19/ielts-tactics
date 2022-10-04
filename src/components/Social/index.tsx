import React from 'react';

import { socialList } from './data';
import styles from './styles.module.scss';

export interface ISocialProps {}

export default function Social(props: ISocialProps) {
  return (
    <div className={styles.container}>
      <div className={styles.list}>
        {socialList.map((item) => (
          <div className={styles.item} key={item.id}>
            <a href={item.href} target="_blank" rel="noopener noreferrer">
              <img src={item.src} alt="follow social" />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
