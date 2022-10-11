import { NextPage } from 'next';

import HeadSeo from '@/components/HeadSeo';
import Layout from '@/components/Layout';
import TinTuc from '@/screens/TinTuc';
import { Paths } from '@/helpers/router';

const TinTucPage: NextPage = () => {
  const titleSeo = 'Tổng hợp tin tức về tiếng Anh, học IELTS, IELTS đầy đủ nhất';

  return (
    <>
      <HeadSeo title={titleSeo} desc={titleSeo} srcSeo={Paths.TinTuc} />

      <Layout>
        <TinTuc />
      </Layout>
    </>
  );
};

export default TinTucPage;
