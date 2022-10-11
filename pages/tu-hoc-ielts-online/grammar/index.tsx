import { NextPage } from 'next';

import HeadSeo from '@/components/HeadSeo';
import Layout from '@/components/Layout';
import TuHocIeltsGrammar from '@/screens/TuHocIeltsOnline/Grammar';
import { Paths } from '@/helpers/router';

const TuHocIeltsGrammarPage: NextPage = () => {
  const titleSeo = 'IELTS Grammar, tự học IELTS Grammar online';

  return (
    <>
      <HeadSeo title={titleSeo} desc={titleSeo} srcSeo={Paths.TuhocIeltsOnlineGrammar} />

      <Layout>
        <TuHocIeltsGrammar />
      </Layout>
    </>
  );
};

export default TuHocIeltsGrammarPage;
