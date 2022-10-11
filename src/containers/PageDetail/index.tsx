import * as React from 'react';

import useFakeLoading from '@/helpers/hooks/useFakeLoading';
import { TArticle } from '@/components/Article/types';
import Loading from '@/components/Loading';
import Container from '@/components/Container';
import Article from '@/components/Article';

export default function PageDetail({ id, title, desc, createAt, content, thumbnail, slug, show }: TArticle) {
  const loading = useFakeLoading(1500);

  return (
    <div className="padding-common">
      {loading && <Loading />}

      <Container isChild>
        <Article
          id={id}
          title={title}
          desc={desc}
          createAt={createAt}
          content={content}
          thumbnail={thumbnail}
          slug={slug}
          show={show}
        />
      </Container>
    </div>
  );
}
