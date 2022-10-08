import React from 'react';

import useFetchDataFirebase from '@/helpers/hooks/useFetchDataFirebase';
import { Paths } from '@/helpers/router';
import { CATEGORY_NAME } from '@/helpers/constants';
import PostList from '@/containers/PostList';

export default function TuHocIeltsReading() {
  const categoryName = CATEGORY_NAME.HOC_IELTS_ONLINE_READING;
  const isSingleCategory = true;
  const postList = useFetchDataFirebase(categoryName, isSingleCategory);
  const pathList = Paths.TuhocIeltsOnlineReading;

  return <PostList pathList={pathList} postList={postList} />;
}
