import { NextPage } from 'next';

import HeadSeo from '@/components/HeadSeo';
import Layout from '@/components/Layout';
import GiaoVien from '@/screens/GiaoVien';

interface IGiaoVienPageProps {}

export const GiaoVienPage: NextPage = (props: IGiaoVienPageProps) => {
  return (
    <>
      <HeadSeo title="Giao vien" />

      <Layout>
        <GiaoVien />
      </Layout>
    </>
  );
};

export default GiaoVienPage;
