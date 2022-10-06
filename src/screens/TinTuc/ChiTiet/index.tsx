import React from 'react';

import useFakeLoading from '@/helpers/hooks/useFakeLoading';
import Container from '@/components/Container';
import Loading from '@/components/Loading';
import { TPostCommon } from '@/common-definition/types';

import styles from './styles.module.scss';

const TinTucChiTiet: React.FC<TPostCommon> = ({ title, desc, createAt, content }) => {
  const loading = useFakeLoading();

  return (
    <div className={`${styles.NewsDetail || 'NewsDetail'} padding-common`}>
      {loading && <Loading />}

      <Container isChild>
        <h1>{title}</h1>
        <h3>{desc}</h3>
        <div>{createAt}</div>
        {content && <p dangerouslySetInnerHTML={{ __html: content }}></p>}
      </Container>
    </div>
  );
};

export default TinTucChiTiet;
