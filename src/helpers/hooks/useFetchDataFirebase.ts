import { useEffect, useState } from 'react';
import { collection, onSnapshot, query, where } from 'firebase/firestore';

import { db } from '@/config/firebase';

const useFetchDataFirebase = () => {
  const [news, setNews] = useState<any>([]);

  const fetchData = () => {
    const collectionRef = collection(db, 'posts');
    const q = query(collectionRef, where('category', '==', 'Tin Tức'));

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
