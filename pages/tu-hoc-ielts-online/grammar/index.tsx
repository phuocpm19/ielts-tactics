import { NextPage } from 'next';

import HeadSeo from '@/components/HeadSeo';
import Layout from '@/components/Layout';
import TuHocIeltsGrammar from '@/screens/TuHocIeltsOnline/Grammar';

const TuHocIeltsGrammarPage: NextPage = () => {
  return (
    <>
      <HeadSeo title="IELTS Grammar, tự học IELTS Grammar online" />

      <Layout>
        <TuHocIeltsGrammar />
      </Layout>
    </>
  );
};

export default TuHocIeltsGrammarPage;
