import { NextPage } from 'next';

import HeadSeo from '@/components/HeadSeo';
import Layout from '@/components/Layout';
import GioiThieu from '@/screens/GioiThieu';

const GioiThieuPage: NextPage = () => {
  return (
    <>
      <HeadSeo title="Giới thiệu về IELTS Tactics" />

      <Layout>
        <GioiThieu />
      </Layout>
    </>
  );
};

export default GioiThieuPage;
