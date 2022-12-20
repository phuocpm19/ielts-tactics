import { useState, useEffect } from 'react';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '@/config/firebase';

export interface IUseQueryChildrenCategory {
  childrenCategoryCollection: string;
  categoryId: string;
}

export const useQueryChildrenCategory = ({ childrenCategoryCollection, categoryId }: IUseQueryChildrenCategory) => {
  const [documentQueryData, setDocumentQueryData] = useState<any>([]);

  const collectionRef = collection(db, childrenCategoryCollection);
  const getDocumentQuery = async () => {
    const queryFunction = query(collectionRef, where('parentId', '==', categoryId));
    let docData: any[] = [];
    try {
      const querySnapshot = await getDocs(queryFunction);
      querySnapshot.forEach((doc) => {
        //gọi về lấy data, gắn ID và KEY
        docData.push({ ...doc.data(), id: doc.id, key: doc.id });
        setDocumentQueryData(docData);
      });
    } catch (error) {
      console.log('error', error);
    }
  };

  useEffect(() => {
    if (!categoryId) return;
    getDocumentQuery().then();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categoryId]);

  return {
    getDocumentQuery,
    documentQueryData,
  };
};
export default useQueryChildrenCategory;
