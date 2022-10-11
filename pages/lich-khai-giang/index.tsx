import { NextPage } from 'next';

import HeadSeo from '@/components/HeadSeo';
import Layout from '@/components/Layout';
import LichKhaiGiang from '@/screens/LichKhaiGiang';
import { Paths } from '@/helpers/router';

const LichKhaiGiangPage: NextPage = () => {
  const titleSeo = 'Lịch khai giảng các lớp IELTS Tactics mới nhất';

  return (
    <>
      <HeadSeo title={titleSeo} desc={titleSeo} srcSeo={Paths.TinTuc} />

      <Layout>
        <LichKhaiGiang />
      </Layout>
    </>
  );
};

export default LichKhaiGiangPage;
