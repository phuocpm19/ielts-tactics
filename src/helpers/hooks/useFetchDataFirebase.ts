import { useEffect, useState } from 'react';
import { collection, onSnapshot, query, where } from 'firebase/firestore';

import { db } from '@/config/firebase';

const useFetchDataFirebase = (categoryName: string, isSingleCategory?: boolean) => {
  const [postList, setPostList] = useState<any>([] || false);

  const fetchData = () => {
    const collectionRef = collection(db, 'posts');
    const q = isSingleCategory
      ? query(collectionRef, where('childrenCategory', 'array-contains', categoryName), where('show', '==', true))
      : query(collectionRef, where('category', '==', categoryName), where('show', '==', true));

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const result = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
        timestamp: doc.data().timestamp?.toDate().getTime(),
      }));

      const newPostList = result && result.length > 0 ? result : false;

      setPostList(newPostList);
    });

    return unsubscribe;
  };

  useEffect(() => {
    fetchData();
  }, []);

  return postList;
};

export default useFetchDataFirebase;
