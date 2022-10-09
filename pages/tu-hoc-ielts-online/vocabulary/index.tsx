import { NextPage } from 'next';

import HeadSeo from '@/components/HeadSeo';
import Layout from '@/components/Layout';
import TuHocIeltsVocabulary from '@/screens/TuHocIeltsOnline/Vocabulary';

const TuHocIeltsVocabularyPage: NextPage = () => {
  return (
    <>
      <HeadSeo title="IELTS Vocabulary, từ vựng IELTS theo chủ đ" />

      <Layout>
        <TuHocIeltsVocabulary />
      </Layout>
    </>
  );
};

export default TuHocIeltsVocabularyPage;
