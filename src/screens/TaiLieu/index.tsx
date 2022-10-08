import React from 'react';

import { CATEGORY_NAME } from '@/helpers/constants';
import useFakeLoading from '@/helpers/hooks/useFakeLoading';
import useFetchDataFirebase from '@/helpers/hooks/useFetchDataFirebase';
import { Paths } from '@/helpers/router';
import Container from '@/components/Container';
import PostItem from '@/components/PostItem';

export interface ITaiLieuProps {}

export default function TaiLieu(props: ITaiLieuProps) {
  const loading = useFakeLoading();
  const categoryName = CATEGORY_NAME.TAI_LIEU;
  const postList = useFetchDataFirebase(categoryName);
  const showPostList = postList && postList.length > 0;

  return (
    <div className="TaiLieu padding-common">
      <Container isChild>
        <div className="Post__list">
          {showPostList &&
            postList.map((item: any) => (
              <div className="Post__item" key={item.id}>
                <PostItem
                  loading={loading}
                  hrefPost={`${Paths.TaiLieu}/${item.slug}`}
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
}
