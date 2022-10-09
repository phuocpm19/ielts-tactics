import { NextPage } from 'next';

import HeadSeo from '@/components/HeadSeo';
import Layout from '@/components/Layout';
import TuHocIeltsOnline from '@/screens/TuHocIeltsOnline';

const TuHocIeltsOnlinePage: NextPage = () => {
  return (
    <>
      <HeadSeo title="Tự học IELTS Online, luyện thi IELTS online miễn phí" />

      <Layout>
        <TuHocIeltsOnline />
      </Layout>
    </>
  );
};

export default TuHocIeltsOnlinePage;
