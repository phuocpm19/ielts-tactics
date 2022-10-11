import { NextPage } from 'next';

import HeadSeo from '@/components/HeadSeo';
import Layout from '@/components/Layout';
import TuHocIeltsWriting from '@/screens/TuHocIeltsOnline/Writing';
import { Paths } from '@/helpers/router';

const TuHocIeltsWritingPage: NextPage = () => {
  const titleSeo = 'IELTS Writing, tự học IELTS Writing online miễn phí';

  return (
    <>
      <HeadSeo title={titleSeo} desc={titleSeo} srcSeo={Paths.TuhocIeltsOnlineWriting} />

      <Layout>
        <TuHocIeltsWriting />
      </Layout>
    </>
  );
};

export default TuHocIeltsWritingPage;
