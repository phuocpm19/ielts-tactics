import { NextPage } from 'next';

import HeadSeo from '@/components/HeadSeo';
import Layout from '@/components/Layout';
import TaiLieu from '@/screens/TaiLieu';

const TaiLieuPage: NextPage = () => {
  return (
    <>
      <HeadSeo title="Tổng hợp liệu các khóa học IELTS từ 0 - 8.5+ tại IELTS Tactics" />

      <Layout>
        <TaiLieu />
      </Layout>
    </>
  );
};

export default TaiLieuPage;
