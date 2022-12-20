import React from 'react';

import useFetchDataFirebase from '@/helpers/hooks/useFetchDataFirebase';
import { Paths } from '@/helpers/router';
import { CATEGORY_NAME } from '@/helpers/constants';
import PostList from '@/containers/PostList';

import useGetAllDocument from '@/hooks/getAllDocument';

export default function TinTuc() {
  const categoryName = CATEGORY_NAME.TIN_TUC;
  const postList = useFetchDataFirebase(categoryName);
  const pathList = Paths.TinTuc;
  console.log('postList', postList);
  // console.log('categoryName', categoryName);

  const { documentList } = useGetAllDocument({ categoryName });
  // console.log('documentList', documentList);

  return <PostList pathList={pathList} postList={postList} />;
  // return <PostList pathList={pathList} postList={documentList} />;
}
