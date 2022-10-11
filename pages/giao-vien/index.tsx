import { NextPage } from 'next';

import HeadSeo from '@/components/HeadSeo';
import Layout from '@/components/Layout';
import GiaoVien from '@/screens/GiaoVien';
import { Paths } from '@/helpers/router';

export const GiaoVienPage: NextPage = () => {
  const titleSeo = 'Đội ngũ giáo viên chuyên môn giỏi nhiệt huyết và sáng tạo của IELTS Tactics';

  return (
    <>
      <HeadSeo title={titleSeo} desc={titleSeo} srcSeo={Paths.GiaoVien} />

      <Layout>
        <GiaoVien />
      </Layout>
    </>
  );
};

export default GiaoVienPage;
