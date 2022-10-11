import { NextPage } from 'next';

import HeadSeo from '@/components/HeadSeo';
import Layout from '@/components/Layout';
import TuHocIeltsVocabulary from '@/screens/TuHocIeltsOnline/Vocabulary';
import { Paths } from '@/helpers/router';

const TuHocIeltsVocabularyPage: NextPage = () => {
  const titleSeo = 'IELTS Vocabulary, từ vựng IELTS theo chủ đề';
  return (
    <>
      <HeadSeo title={titleSeo} desc={titleSeo} srcSeo={Paths.TuhocIeltsOnlineVocabulary} />

      <Layout>
        <TuHocIeltsVocabulary />
      </Layout>
    </>
  );
};

export default TuHocIeltsVocabularyPage;
