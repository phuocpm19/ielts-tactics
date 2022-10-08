import React from 'react';

import useFakeLoading from '@/helpers/hooks/useFakeLoading';
import useFetchDataFirebase from '@/helpers/hooks/useFetchDataFirebase';
import { Paths } from '@/helpers/router';
import { CATEGORY_NAME } from '@/helpers/constants';
import Container from '@/components/Container';
import PostItem from '@/components/PostItem';

const TinTuc: React.FC = () => {
  const loading = useFakeLoading();
  const categoryName = CATEGORY_NAME.TIN_TUC;
  const postList = useFetchDataFirebase(categoryName);
  const showPostList = postList && postList.length > 0;

  return (
    <div className="TinTuc padding-common">
      <Container isChild>
        <div className="Post__list">
          {showPostList &&
            postList.map((item: any) => (
              <div className="Post__item" key={item.id}>
                <PostItem
                  loading={loading}
                  hrefPost={`${Paths.TinTuc}/${item.slug}`}
                  srcThumbnail={item.thumbnail}
                  title={item.title}
                  desc={item.desc}
                />
              </div>
            ))}
        </div>
      </Container>
    </div>
  );
};

export default TinTuc;
