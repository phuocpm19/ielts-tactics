import { initializeApp } from "firebase/app";
import 'firebase/database';
import { getFirestore, query, collection, where, getDocs } from 'firebase/firestore';
// import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  // apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  // authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  // projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  // storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  // messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  // appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,

  apiKey: 'AIzaSyCHHdTD38oOi3nH-OHdcDnhJ7Og80IaH0Y',
  authDomain: 'ielts-tactics-2.firebaseapp.com',
  projectId: 'ielts-tactics-2',
  storageBucket: 'ielts-tactics-2.appspot.com',
  messagingSenderId: '936721979139',
  appId: '1:936721979139:web:4d0a3aff3a9a51aeb5bb36',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore();
// const auth = getAuth();

const getPostBySlug = async (collectionName, slug) => {
  const collectionRef = collection(db, collectionName);
  const q = query(collectionRef, where("slug", "==", `${slug}`));
  const querySnapShot = await getDocs(q);
  const post = querySnapShot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
    title: doc.data().title,
    desc: doc.data().desc,
    createAt: doc.data().createAt,
    content: doc.data().content,
    thumbnail: doc.data().thumbnail,
  }));

  return post;
};

export { db, getPostBySlug };