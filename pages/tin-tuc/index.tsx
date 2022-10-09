import { NextPage } from 'next';

import HeadSeo from '@/components/HeadSeo';
import Layout from '@/components/Layout';
import TinTuc from '@/screens/TinTuc';

const TinTucPage: NextPage = () => {
  return (
    <>
      <HeadSeo title="Tổng hợp tin tức về tiếng Anh, học IELTS, IELTS đầy đủ nhất" />

      <Layout>
        <TinTuc />
      </Layout>
    </>
  );
};

export default TinTucPage;
