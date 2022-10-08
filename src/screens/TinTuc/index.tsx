import React from 'react';

import useFetchDataFirebase from '@/helpers/hooks/useFetchDataFirebase';
import { Paths } from '@/helpers/router';
import { CATEGORY_NAME } from '@/helpers/constants';
import PostList from '@/containers/PostList';

export default function TinTuc() {
  const categoryName = CATEGORY_NAME.TIN_TUC;
  const postList = useFetchDataFirebase(categoryName);
  const pathList = Paths.TinTuc;

  return <PostList pathList={pathList} postList={postList} />;
}
