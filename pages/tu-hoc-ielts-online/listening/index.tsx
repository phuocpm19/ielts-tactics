import { NextPage } from 'next';

import HeadSeo from '@/components/HeadSeo';
import Layout from '@/components/Layout';
import TuHocIeltsListening from '@/screens/TuHocIeltsOnline/Listening';
import { Paths } from '@/helpers/router';

const TuHocIeltsListeningPage: NextPage = () => {
  const titleSeo = 'IELTS Listening, luyện nghe tiếng Anh hiệu quả';

  return (
    <>
      <HeadSeo title={titleSeo} desc={titleSeo} srcSeo={Paths.TuhocIeltsOnlineListening} />

      <Layout>
        <TuHocIeltsListening />
      </Layout>
    </>
  );
};

export default TuHocIeltsListeningPage;
