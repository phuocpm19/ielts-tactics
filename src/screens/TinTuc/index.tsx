import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { onSnapshot, collection, where, query } from 'firebase/firestore';

import { db } from '@/config/firebase';

import styles from './styles.module.scss';
import { Paths } from '@/helpers/router';
import Container from '@/components/Container';
import Loading from '@/components/Loading';

export interface ITinTucProps {}

const TinTuc: React.FC = (props: ITinTucProps) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [news, setNews] = useState<any>([]);
  const showNews = news && news.length > 0;

  const getDataFromFirebase = () => {
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
    getDataFromFirebase();
  }, []);

  return (
    <div className={`${styles.container} padding-common`}>
      <Container isChild>
        <div className={styles.news}>
          {showNews &&
            news.map((item: any) => (
              <div className={styles.newsItem} key={item.id}>
                <div className={styles.newsItem__title}>{item.title}</div>
                <div className={styles.newsItem__desc}>{item.desc}</div>
                <div className={styles.newsItem__link}>
                  <Link href={`${Paths.TinTucChiTiet}${item.slug}`}>
                    <a>show detail</a>
                  </Link>
                </div>
                <hr />
              </div>
            ))}
        </div>
      </Container>
    </div>
  );
};

export default TinTuc;
