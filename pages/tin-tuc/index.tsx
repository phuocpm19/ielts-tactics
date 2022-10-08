import { NextPage } from 'next';

import HeadSeo from '@/components/HeadSeo';
import Layout from '@/components/Layout';
import TinTuc from '@/screens/TinTuc';

const TinTucPage: NextPage = () => {
  return (
    <>
      <HeadSeo title="Tin tuc list" />

      <Layout>
        <TinTuc />
      </Layout>
    </>
  );
};

export default TinTucPage;
