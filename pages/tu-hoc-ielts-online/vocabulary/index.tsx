import { NextPage } from 'next';

import HeadSeo from '@/components/HeadSeo';
import Layout from '@/components/Layout';
import TuHocIeltsVocabulary from '@/screens/TuHocIeltsOnline/Vocabulary';

const TuHocIeltsVocabularyPage: NextPage = () => {
  return (
    <>
      <HeadSeo title="Vocabulary list" />

      <Layout>
        <TuHocIeltsVocabulary />
      </Layout>
    </>
  );
};

export default TuHocIeltsVocabularyPage;
