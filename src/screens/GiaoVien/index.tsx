import React from 'react';

import useFetchDataFirebase from '@/helpers/hooks/useFetchDataFirebase';
import { Paths } from '@/helpers/router';
import { CATEGORY_NAME } from '@/helpers/constants';
import PostList from '@/containers/PostList';

export default function GiaoVien() {
  const categoryName = CATEGORY_NAME.GIAO_VIEN;
  const isSingleCategory = true;
  const postList = useFetchDataFirebase(categoryName, isSingleCategory);
  const pathList = Paths.GiaoVien;

  return <PostList pathList={pathList} postList={postList} />;
}
