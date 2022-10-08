import { NextPage } from 'next';

import HeadSeo from '@/components/HeadSeo';
import Layout from '@/components/Layout';
import TaiLieu from '@/screens/TaiLieu';

const TaiLieuPage: NextPage = () => {
  return (
    <>
      <HeadSeo title="Tai lieu list" />

      <Layout>
        <TaiLieu />
      </Layout>
    </>
  );
};

export default TaiLieuPage;
