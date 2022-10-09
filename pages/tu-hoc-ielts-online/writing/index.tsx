import { NextPage } from 'next';

import HeadSeo from '@/components/HeadSeo';
import Layout from '@/components/Layout';
import TuHocIeltsWriting from '@/screens/TuHocIeltsOnline/Writing';

const TuHocIeltsWritingPage: NextPage = () => {
  return (
    <>
      <HeadSeo title="IELTS Writing, tự học IELTS Writing online miễn phí" />

      <Layout>
        <TuHocIeltsWriting />
      </Layout>
    </>
  );
};

export default TuHocIeltsWritingPage;
