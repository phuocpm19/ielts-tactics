import React from 'react';

import useFetchDataFirebase from '@/helpers/hooks/useFetchDataFirebase';
import { Paths } from '@/helpers/router';
import { CATEGORY_NAME } from '@/helpers/constants';
import PostList from '@/containers/PostList';

export default function GioiThieu() {
  const categoryName = CATEGORY_NAME.GIOI_THIEU;
  const postList = useFetchDataFirebase(categoryName);
  const pathList = Paths.GioiThieu;

  return <PostList pathList={pathList} postList={postList} />;
}
