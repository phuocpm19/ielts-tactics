import { NextPage } from 'next';

import HeadSeo from '@/components/HeadSeo';
import Layout from '@/components/Layout';
import KhoaHoc from '@/screens/KhoaHoc';

const KhoaHocPage: NextPage = () => {
  return (
    <>
      <HeadSeo title="Khoa hoc list" />

      <Layout>
        <KhoaHoc />
      </Layout>
    </>
  );
};

export default KhoaHocPage;
