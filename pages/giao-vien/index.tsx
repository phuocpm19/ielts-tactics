import { NextPage } from 'next';

import HeadSeo from '@/components/HeadSeo';
import Layout from '@/components/Layout';
import GiaoVien from '@/screens/GiaoVien';

export const GiaoVienPage: NextPage = () => {
  return (
    <>
      <HeadSeo title="Giao vien list" />

      <Layout>
        <GiaoVien />
      </Layout>
    </>
  );
};

export default GiaoVienPage;
