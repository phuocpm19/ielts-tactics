import { useState } from 'react';
import { CATEGORY_NAME } from '@/helpers/constants';
import useFetchDataFirebase from '@/helpers/hooks/useFetchDataFirebase';
import { Paths } from '@/helpers/router';

import { collection, onSnapshot, query, where } from 'firebase/firestore';

import { db } from '@/config/firebase';

import { DOMAIN_DEFAULT } from '@/helpers/constants';

const EXTERNAL_DATA_URL = 'https://jsonplaceholder.typicode.com/posts';
// const EXTERNAL_DATA_URL = 'https://ieltstactics.vn/';

const generateSiteMap = (posts: any) => {
  const urlSite = 'https://ieltstactics.vn';
  const timeLastMod = new Date().toISOString();

  // console.log('posts', posts);

  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <url>
       <loc>${urlSite}</loc>
       <lastmod>${timeLastMod}</lastmod>
     </url>
     <url>
       <loc>${urlSite}${Paths.GioiThieu}</loc>
       <lastmod>${timeLastMod}</lastmod>
     </url>
     <url>
       <loc>${urlSite}${Paths.GioiThieu}/trung-tam-luyen-thi-ielts-uy-tín-tai-viet-nam-ielts-tactics</loc>
       <lastmod>${timeLastMod}</lastmod>
     </url>
     <url>
       <loc>${urlSite}${Paths.GiaoVien}</loc>
       <lastmod>${timeLastMod}</lastmod>
     </url>
     <url>
       <loc>${urlSite}${Paths.GioiThieu}/chinh-sach-quyen-rieng-tu-ielts-tactics</loc>
       <lastmod>${timeLastMod}</lastmod>
     </url>
     <url>
       <loc>${urlSite}${Paths.LichKhaiGiang}</loc>
       <lastmod>${timeLastMod}</lastmod>
     </url>
     <url>
       <loc>${urlSite}${Paths.KhoaHoc}</loc>
       <lastmod>${timeLastMod}</lastmod>
     </url>
     <url>
       <loc>${urlSite}${Paths.KhoaHoc55}</loc>
       <lastmod>${timeLastMod}</lastmod>
     </url>
     <url>
       <loc>${urlSite}${Paths.KhoaHoc65}</loc>
       <lastmod>${timeLastMod}</lastmod>
     </url>
     <url>
       <loc>${urlSite}${Paths.KhoaHoc7075}</loc>
       <lastmod>${timeLastMod}</lastmod>
     </url>
     <url>
       <loc>${urlSite}${Paths.TaiLieu}</loc>
       <lastmod>${timeLastMod}</lastmod>
     </url>
     <url>
       <loc>${urlSite}${Paths.TuhocIeltsOnline}</loc>
       <lastmod>${timeLastMod}</lastmod>
     </url>
     <url>
       <loc>${urlSite}${Paths.TuhocIeltsOnlineGrammar}</loc>
       <lastmod>${timeLastMod}</lastmod>
     </url>
     <url>
       <loc>${urlSite}${Paths.TuhocIeltsOnlineListening}</loc>
       <lastmod>${timeLastMod}</lastmod>
     </url>
     <url>
       <loc>${urlSite}${Paths.TuhocIeltsOnlineReading}</loc>
       <lastmod>${timeLastMod}</lastmod>
     </url>
     <url>
       <loc>${urlSite}${Paths.TuhocIeltsOnlineSpeaking}</loc>
       <lastmod>${timeLastMod}</lastmod>
     </url>
     <url>
       <loc>${urlSite}${Paths.TuhocIeltsOnlineVocabulary}</loc>
       <lastmod>${timeLastMod}</lastmod>
     </url>
     <url>
       <loc>${urlSite}${Paths.TuhocIeltsOnlineWriting}</loc>
       <lastmod>${timeLastMod}</lastmod>
     </url>
     <url>
       <loc>${urlSite}${Paths.TinTuc}</loc>
       <lastmod>${timeLastMod}</lastmod>
     </url>
   </urlset>
 `;
};

const SiteMap = () => {};

export async function getServerSideProps({ res }: any) {
  const request = await fetch(EXTERNAL_DATA_URL);
  const posts = await request.json();

  const fetchData = () => {
    const collectionRef = collection(db, 'posts');
    const q = query(collectionRef, where('category', '==', 'tin-tuc'));

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const result = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
        timestamp: doc.data().timestamp?.toDate().getTime(),
      }));

      const newPostList = result && result.length > 0 ? result : false;
    });

    return unsubscribe;
  };

  fetchData();

  const sitemap = generateSiteMap(posts);
  res.setHeader('Content-Type', 'text/xml');
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default SiteMap;
