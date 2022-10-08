import { NextPage } from 'next';

import HeadSeo from '@/components/HeadSeo';
import Layout from '@/components/Layout';
import TuHocIeltsOnline from '@/screens/TuHocIeltsOnline';

const TuHocIeltsOnlinePage: NextPage = () => {
  return (
    <>
      <HeadSeo title="Tu hoc Ielts Online list" />

      <Layout>
        <TuHocIeltsOnline />
      </Layout>
    </>
  );
};

export default TuHocIeltsOnlinePage;
