import React from 'react';

import useFetchDataFirebase from '@/helpers/hooks/useFetchDataFirebase';
import { Paths } from '@/helpers/router';
import { CATEGORY_NAME } from '@/helpers/constants';
import PostList from '@/containers/PostList';

export default function KhoaHoc() {
  const categoryName = CATEGORY_NAME.KHOA_HOC;
  const postList = useFetchDataFirebase(categoryName);
  const pathList = Paths.KhoaHoc;

  return <PostList pathList={pathList} postList={postList} />;
}
