import { NextPage } from 'next';

import HeadSeo from '@/components/HeadSeo';
import Layout from '@/components/Layout';
import TuHocIeltsWriting from '@/screens/TuHocIeltsOnline/Writing';

const TuHocIeltsWritingPage: NextPage = () => {
  return (
    <>
      <HeadSeo title="Writing" />

      <Layout>
        <TuHocIeltsWriting />
      </Layout>
    </>
  );
};

export default TuHocIeltsWritingPage;
