import { NextPage } from 'next';

import HeadSeo from '@/components/HeadSeo';
import Layout from '@/components/Layout';
import KhoaHoc from '@/screens/KhoaHoc';

const KhoaHocPage: NextPage = () => {
  return (
    <>
      <HeadSeo title="Tổng hợp Lộ trình các khóa học IELTS từ 0 - 8.5+ tại IELTS Tactics. Trung tâm luyện thi IELTS Tactics cam kết đầu ra bằng văn bản - Học lại miễn phí đến khi đạt mục tiêu." />

      <Layout>
        <KhoaHoc />
      </Layout>
    </>
  );
};

export default KhoaHocPage;
