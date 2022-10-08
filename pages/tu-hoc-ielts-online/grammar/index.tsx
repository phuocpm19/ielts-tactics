import { NextPage } from 'next';

import HeadSeo from '@/components/HeadSeo';
import Layout from '@/components/Layout';
import TuHocIeltsGrammar from '@/screens/TuHocIeltsOnline/Grammar';

const TuHocIeltsGrammarPage: NextPage = () => {
  return (
    <>
      <HeadSeo title="Grammar list" />

      <Layout>
        <TuHocIeltsGrammar />
      </Layout>
    </>
  );
};

export default TuHocIeltsGrammarPage;
