import { NextPage } from 'next';

import HeadSeo from '@/components/HeadSeo';
import Layout from '@/components/Layout';
import GiaoVien from '@/screens/GiaoVien';

export const GiaoVienPage: NextPage = () => {
  return (
    <>
      <HeadSeo title="Đội ngũ giáo viên chuyên môn giỏi nhiệt huyết và sáng tạo của IELTS Tactics" />

      <Layout>
        <GiaoVien />
      </Layout>
    </>
  );
};

export default GiaoVienPage;
