import React from 'react';

import useFetchDataFirebase from '@/helpers/hooks/useFetchDataFirebase';
import { Paths } from '@/helpers/router';
import { CATEGORY_NAME } from '@/helpers/constants';
import PostList from '@/containers/PostList';

export default function TaiLieu() {
  const categoryName = CATEGORY_NAME.TAI_LIEU;
  const postList = useFetchDataFirebase(categoryName);
  const pathList = Paths.TaiLieu;

  return <PostList pathList={pathList} postList={postList} />;
}
