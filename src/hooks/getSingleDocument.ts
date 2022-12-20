import { useState, useEffect } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '@/config/firebase';

export interface IUseGetSingleDocument {
  id: string;
  collectionName: string;
}

const useGetSingleDocument = ({ id, collectionName }: IUseGetSingleDocument) => {
  const [documentData, setDocumentData] = useState<any>(null);
  const docRef = doc(db, collectionName, id);

  const getDocument = async () => {
    try {
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setDocumentData(docSnap.data());
      } else {
        // doc.data() will be undefined in this case
        console.log('No such document!');
      }
    } catch (error) {
      console.log('error', error);
    }
  };

  useEffect(() => {
    getDocument().then();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    documentData,
  };
};

export default useGetSingleDocument;
