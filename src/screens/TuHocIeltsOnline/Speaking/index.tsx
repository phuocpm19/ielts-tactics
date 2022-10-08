import React from 'react';

import useFetchDataFirebase from '@/helpers/hooks/useFetchDataFirebase';
import { Paths } from '@/helpers/router';
import { CATEGORY_NAME } from '@/helpers/constants';
import PostList from '@/containers/PostList';

export default function TuHocIeltsSpeaking() {
  const categoryName = CATEGORY_NAME.HOC_IELTS_ONLINE_SPEAKING;
  const isSingleCategory = true;
  const postList = useFetchDataFirebase(categoryName, isSingleCategory);
  const pathList = Paths.TuhocIeltsOnlineSpeaking;

  return <PostList pathList={pathList} postList={postList} />;
}
