import { NextPage } from 'next';

import HeadSeo from '@/components/HeadSeo';
import Layout from '@/components/Layout';
import LichKhaiGiang from '@/screens/LichKhaiGiang';

const LichKhaiGiangPage: NextPage = () => {
  return (
    <>
      <HeadSeo title="Lich khai giang list" />

      <Layout>
        <LichKhaiGiang />
      </Layout>
    </>
  );
};

export default LichKhaiGiangPage;
