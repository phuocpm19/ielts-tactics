import { NextPage } from 'next';

import HeadSeo from '@/components/HeadSeo';
import Layout from '@/components/Layout';
import LichKhaiGiang from '@/screens/LichKhaiGiang';

const LichKhaiGiangPage: NextPage = () => {
  return (
    <>
      <HeadSeo title="Lịch khai giảng các lớp IELTS Tactics mới nhất" />

      <Layout>
        <LichKhaiGiang />
      </Layout>
    </>
  );
};

export default LichKhaiGiangPage;
