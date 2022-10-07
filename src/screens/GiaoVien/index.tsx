import React from 'react';

import { CATEGORY_NAME } from '@/helpers/constants';
import useFakeLoading from '@/helpers/hooks/useFakeLoading';
import useFetchDataFirebase from '@/helpers/hooks/useFetchDataFirebase';
import { Paths } from '@/helpers/router';
import Container from '@/components/Container';
import PostItem from '@/components/PostItem';

export interface IGiaoVienProps {}

export default function GiaoVien(props: IGiaoVienProps) {
  const loading = useFakeLoading();
  const categoryName = CATEGORY_NAME.LICH_KHAI_GIANG;
  const postList = useFetchDataFirebase(categoryName);
  const showPostList = postList && postList.length > 0;

  return (
    <div className="GiaoVien padding-common">
      <Container isChild>
        <div className="Post__list">
          {showPostList &&
            postList.map((item: any) => (
              <div className="Post__item" key={item.id}>
                <PostItem
                  loading={loading}
                  hrefPost={`${Paths.GiaoVien}/${item.slug}`}
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
