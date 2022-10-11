import { NextPage } from 'next';

import HeadSeo from '@/components/HeadSeo';
import Layout from '@/components/Layout';
import TuHocIeltsSpeaking from '@/screens/TuHocIeltsOnline/Speaking';
import { Paths } from '@/helpers/router';

const TuHocIeltsSpeakingPage: NextPage = () => {
  const titleSeo = 'IELTS Speaking, tự học IELTS Speaking online miễn phí';

  return (
    <>
      <HeadSeo title={titleSeo} desc={titleSeo} srcSeo={Paths.TuhocIeltsOnlineSpeaking} />

      <Layout>
        <TuHocIeltsSpeaking />
      </Layout>
    </>
  );
};

export default TuHocIeltsSpeakingPage;
