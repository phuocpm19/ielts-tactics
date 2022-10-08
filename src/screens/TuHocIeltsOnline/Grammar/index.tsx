import React from 'react';

import useFetchDataFirebase from '@/helpers/hooks/useFetchDataFirebase';
import { Paths } from '@/helpers/router';
import { CATEGORY_NAME } from '@/helpers/constants';
import PostList from '@/containers/PostList';

export default function TuHocIeltsGrammar() {
  const categoryName = CATEGORY_NAME.HOC_IELTS_ONLINE_GRAMMAR;
  const isSingleCategory = true;
  const postList = useFetchDataFirebase(categoryName, isSingleCategory);
  const pathList = Paths.TuhocIeltsOnlineGrammar;

  return <PostList pathList={pathList} postList={postList} />;
}
