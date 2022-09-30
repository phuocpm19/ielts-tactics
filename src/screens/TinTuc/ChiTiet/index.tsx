import React from 'react';
import Link from 'next/link';

import { TPostCommon } from '@/common-definition/types';
import { Paths } from '@/helpers/router';

import styles from './styles.module.scss';

const TinTucChiTiet: React.FC<TPostCommon> = ({ title, desc, createAt, content }) => {
  return (
    <div className={styles.container}>
      <div>
        <Link href={Paths.TinTuc}>
          <a>Back to list</a>
        </Link>
      </div>
      <hr />
      <h1>{title}</h1>
      <h3>{desc}</h3>
      <div>{createAt}</div>
      {content && <p dangerouslySetInnerHTML={{ __html: content }}></p>}
    </div>
  );
};

export default TinTucChiTiet;
