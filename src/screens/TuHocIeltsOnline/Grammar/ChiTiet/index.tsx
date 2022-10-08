import React from 'react';

import useFakeLoading from '@/helpers/hooks/useFakeLoading';
import Container from '@/components/Container';
import Loading from '@/components/Loading';
import { TPostCommon } from '@/common-definition/types';
import Article from '@/components/Article';

const TuHocIeltsGrammarChiTiet: React.FC<TPostCommon> = ({ id, title, desc, createAt, content, thumbnail }) => {
  const loading = useFakeLoading();

  return (
    <div className="padding-common">
      {loading && <Loading />}

      <Container isChild>
        <Article id={id} title={title} desc={desc} createAt={createAt} content={content} thumbnail={thumbnail} />
      </Container>
    </div>
  );
};

export default TuHocIeltsGrammarChiTiet;
