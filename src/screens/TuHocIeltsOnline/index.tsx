import React from 'react';

import { CATEGORY_NAME } from '@/helpers/constants';
import useFakeLoading from '@/helpers/hooks/useFakeLoading';
import useFetchDataFirebase from '@/helpers/hooks/useFetchDataFirebase';
import { Paths } from '@/helpers/router';
import Container from '@/components/Container';
import PostItem from '@/components/PostItem';

export interface ITuHocIeltsOnlineProps {}

export default function TuHocIeltsOnline(props: ITuHocIeltsOnlineProps) {
  const loading = useFakeLoading();
  const categoryName = CATEGORY_NAME.HOC_IELTS_ONLINE;
  const postList = useFetchDataFirebase(categoryName);
  const showPostList = postList && postList.length > 0;

  return (
    <div className="HocIeltsOnline padding-common">
      <Container isChild>
        <div className="Post__list">
          {showPostList &&
            postList.map((item: any) => (
              <div className="Post__item" key={item.id}>
                <PostItem
                  loading={loading}
                  hrefPost={`${Paths.TuhocIeltsOnline}/${item.slug}`}
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
