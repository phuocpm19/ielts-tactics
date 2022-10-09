import { NextPage } from 'next';

import HeadSeo from '@/components/HeadSeo';
import Layout from '@/components/Layout';
import TuHocIeltsListening from '@/screens/TuHocIeltsOnline/Listening';

const TuHocIeltsListeningPage: NextPage = () => {
  return (
    <>
      <HeadSeo title="IELTS Listening, luyện nghe hiệu quả" />

      <Layout>
        <TuHocIeltsListening />
      </Layout>
    </>
  );
};

export default TuHocIeltsListeningPage;
