import React from 'react';

import useFetchDataFirebase from '@/helpers/hooks/useFetchDataFirebase';
import { Paths } from '@/helpers/router';
import { CATEGORY_NAME } from '@/helpers/constants';
import PostList from '@/containers/PostList';

export default function TuHocIeltsOnline() {
  const categoryName = CATEGORY_NAME.HOC_IELTS_ONLINE;
  const postList = useFetchDataFirebase(categoryName);
  const pathList = Paths.TuhocIeltsOnline;

  return <PostList pathList={pathList} postList={postList} />;
}
