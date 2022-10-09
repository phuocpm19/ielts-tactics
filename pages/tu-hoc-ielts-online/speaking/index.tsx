import { NextPage } from 'next';

import HeadSeo from '@/components/HeadSeo';
import Layout from '@/components/Layout';
import TuHocIeltsSpeaking from '@/screens/TuHocIeltsOnline/Speaking';

const TuHocIeltsSpeakingPage: NextPage = () => {
  return (
    <>
      <HeadSeo title="IELTS Speaking, tự học IELTS Speaking online miễn phí" />

      <Layout>
        <TuHocIeltsSpeaking />
      </Layout>
    </>
  );
};

export default TuHocIeltsSpeakingPage;
