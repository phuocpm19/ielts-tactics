import { NextPage } from 'next';

import HeadSeo from '@/components/HeadSeo';
import Layout from '@/components/Layout';
import TuHocIeltsOnline from '@/screens/TuHocIeltsOnline';
import { Paths } from '@/helpers/router';

const TuHocIeltsOnlinePage: NextPage = () => {
  const titleSeo = 'Tự học IELTS Online, luyện thi IELTS online miễn phí';

  return (
    <>
      <HeadSeo title={titleSeo} desc={titleSeo} srcSeo={Paths.TuhocIeltsOnline} />

      <Layout>
        <TuHocIeltsOnline />
      </Layout>
    </>
  );
};

export default TuHocIeltsOnlinePage;
