import React, { useEffect, useState } from 'react';

import {
  collection,
  getDocs,
  limit,
  orderBy,
  query,
  startAfter,
  startAt,
  getCountFromServer,
  where,
} from 'firebase/firestore';
import { db } from '@/config/firebase';

import useFetchDataFirebase from '@/helpers/hooks/useFetchDataFirebase';
import { Paths } from '@/helpers/router';
import { CATEGORY_NAME } from '@/helpers/constants';
import PostList from '@/containers/PostList';

import useGetAllDocument from '@/hooks/getAllDocument';

export default function TinTuc() {
  const categoryName = CATEGORY_NAME.TIN_TUC;
  const postList = useFetchDataFirebase(categoryName);
  const pathList = Paths.TinTuc;
  const collectionName = 'tin-tuc';
  // console.log('postList', postList);

  const { documentList } = useGetAllDocument({ categoryName: collectionName });
  // console.log('documentList', documentList);'
  const [dataTest, setDataTest] = useState<any[]>([]);

  let arr: any = [];
  const getData = async () => {
    // const documentRef = query(
    //   collection(db, 'posts'),
    //   limit(8),
    //   where('category', '==', 'tin-tuc'),
    //   where('show', '==', true),
    // );

    // const queryData = await getDocs(documentRef);

    // queryData.forEach((doc) => {
    //   arr.push({ ...doc.data(), key: doc.id, id: doc.id });
    // });

    // const q = query(collection(db, 'posts'), where('category', '==', 'tin-tuc'), limit(4));

    // const querySnapshot = await getDocs(q);
    // querySnapshot.forEach((doc) => {
    //   // doc.data() is never undefined for query doc snapshots
    //   console.log(doc.id, ' => ', doc.data());
    // });

    // console.log('arr', arr);

    try {
      const q = query(collection(db, 'posts'), where('category', '==', 'tin-tuc'), limit(4));

      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, ' => ', doc.data());
      });
    } catch (error) {
      console.log('error', error);
    }

    // console.log('arr', arr);
  };

  const deleteDuplicateObject = Array.from(new Set(documentList.map((item) => item.id))).map((postId) => {
    return documentList.find((item) => item.id === postId);
  });

  console.log('deleteDuplicateObject', deleteDuplicateObject);
  console.log('documentList', documentList);

  useEffect(() => {
    getData().then();
  }, []);

  // useEffect(() => {
  //   setDataTest(deleteDuplicateObject);
  // }, [documentList]);

  return <PostList pathList={pathList} postList={postList} />;
  // return <PostList pathList={pathList} postList={dataTest} />;
}
