import { useEffect, useState } from 'react';
import { collection, onSnapshot, query, where } from 'firebase/firestore';

import { db } from '@/config/firebase';

const useFetchDataFirebase = (categoryName: string, isSingleCategory?: boolean) => {
  const [news, setNews] = useState<any>([]);

  const fetchData = () => {
    const collectionRef = collection(db, 'posts');
    const q = isSingleCategory
      ? query(collectionRef, where('singleCategory', '==', categoryName))
      : query(collectionRef, where('category', '==', categoryName));

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const newData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
        timestamp: doc.data().timestamp?.toDate().getTime(),
      }));

      setNews(newData);
    });

    return unsubscribe;
  };

  useEffect(() => {
    fetchData();
  }, []);

  return news;
};

export default useFetchDataFirebase;
