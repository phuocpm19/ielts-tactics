import React from 'react';

import useFetchDataFirebase from '@/helpers/hooks/useFetchDataFirebase';
import { Paths } from '@/helpers/router';
import { CATEGORY_NAME } from '@/helpers/constants';
import PostList from '@/containers/PostList';

export default function LichKhaiGiang() {
  const categoryName = CATEGORY_NAME.LICH_KHAI_GIANG;
  const postList = useFetchDataFirebase(categoryName);
  const pathList = Paths.LichKhaiGiang;

  return <PostList pathList={pathList} postList={postList} />;
}
