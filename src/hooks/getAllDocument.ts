import { useState, useEffect } from 'react';
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
import { TRecordCommon } from '@/common-definition/types';

export interface IUseGetAllDocument {
  categoryName: string;
  isSingleCategory?: boolean;
  show?: boolean;
}

const useGetAllDocument = ({ categoryName, isSingleCategory, show = true }: IUseGetAllDocument) => {
  const [documentList, setDocumentList] = useState<TRecordCommon[]>([]);
  const [firstDocument, setFirstDocument] = useState<TRecordCommon[]>([]);
  const [lastDocument, setLastDocument] = useState<any>(null);
  const [totalData, setTotalData] = useState<any>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [page, setPage] = useState<any>(null);
  const [indexFirstItem, setIndexFirstItem] = useState<number>(1);
  const [indexLastItem, setIndexLastItem] = useState<number>(20);

  const collectionRef = collection(db, 'posts');
  const setOrder = orderBy('createAt', 'desc');
  const documentLimit = 8;

  let dataFromFirebase: any[] = [];
  let nextData: any[] = [];
  let previousData: any[] = [];
  let currentData: any[] = [];

  //count data
  const countAllData = async () => {
    try {
      const snapshot = await getCountFromServer(collectionRef);
      const totalPostDocument = snapshot.data().count;
      const calcPage = Math.ceil(totalPostDocument / documentLimit);
      totalPostDocument && setTotalData(Number(totalPostDocument));
      calcPage && setPage(calcPage);
    } catch (error) {
      console.log('error', error);
    }
  };

  const getFirstPage = async () => {
    const documentRef = query(
      collection(db, 'posts'),
      limit(documentLimit),
      where('category', '==', categoryName),
      where('show', '==', true),
    );
    try {
      const queryData = await getDocs(documentRef);
      const lastVisible = queryData.docs[queryData.docs.length - 1];
      const firstVisible = queryData.docs[0];

      setFirstDocument((prevState: any) => [...prevState, firstVisible]);
      setLastDocument(lastVisible);

      if (queryData) {
        queryData.forEach((doc) => {
          dataFromFirebase.push({ ...doc.data(), key: doc.id, id: doc.id });
        });
        setDocumentList(dataFromFirebase);
      }
    } catch (error) {
      console.log('error', error);
    }
  };

  const nextPage = async () => {
    const next = query(collectionRef, setOrder, startAfter(lastDocument), limit(documentLimit));
    try {
      const queryData = await getDocs(next);

      const lastVisible = queryData.docs[queryData.docs.length - 1];
      const firstVisible = queryData.docs[0];

      setFirstDocument((prevState: any) => [...prevState, firstVisible]);
      setLastDocument(lastVisible);
      //count page
      setCurrentPage((prevState) => prevState + 1);
      queryData.forEach((doc) => {
        nextData.push({ ...doc.data(), key: doc.id, id: doc.id });
      });
      setIndexFirstItem((prevState) => prevState + nextData.length);
      setIndexLastItem((prevState) => prevState + nextData.length);
      setDocumentList(nextData);
    } catch (error) {
      console.log('error', error);
    }
  };

  const previousPage = async () => {
    firstDocument.pop();
    let prevDoc;
    if (!firstDocument.length) return;
    prevDoc = firstDocument[firstDocument.length - 1];
    const back = query(collectionRef, setOrder, startAt(prevDoc), limit(documentLimit));
    try {
      const queryData = await getDocs(back);
      const lastVisible = queryData.docs[queryData.docs.length - 1];

      setLastDocument(lastVisible);
      //count page
      setCurrentPage((prevState) => prevState - 1);

      queryData.forEach((doc) => {
        previousData.push({ ...doc.data(), key: doc.id, id: doc.id });
      });
      setDocumentList(previousData);
      setIndexFirstItem((prevState) => prevState - previousData.length);
      setIndexLastItem((prevState) => prevState - previousData.length);
    } catch (error) {
      console.log('error', error);
    }
  };

  useEffect(() => {
    getFirstPage().then();
    countAllData().then();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    getFirstPage,
    nextPage,
    previousPage,
    currentPage,
    totalData,
    documentList, //data trả về từ firebase
    page,
    indexFirstItem,
    indexLastItem,
  };
};

export default useGetAllDocument;
