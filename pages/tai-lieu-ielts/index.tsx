import { NextPage } from 'next';

import HeadSeo from '@/components/HeadSeo';
import Layout from '@/components/Layout';
import TaiLieu from '@/screens/TaiLieu';
import { Paths } from '@/helpers/router';

const TaiLieuPage: NextPage = () => {
  const titleSeo = 'Tổng hợp tài liệu các khóa học IELTS từ 0 - 8.5+ tại IELTS Tactics';

  return (
    <>
      <HeadSeo title={titleSeo} desc={titleSeo} srcSeo={Paths.TaiLieu} />

      <Layout>
        <TaiLieu />
      </Layout>
    </>
  );
};

export default TaiLieuPage;
