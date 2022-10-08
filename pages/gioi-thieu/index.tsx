import { NextPage } from 'next';

import HeadSeo from '@/components/HeadSeo';
import Layout from '@/components/Layout';
import GioiThieu from '@/screens/GioiThieu';

const GioiThieuPage: NextPage = () => {
  return (
    <>
      <HeadSeo title="Gioi thieu list" />

      <Layout>
        <GioiThieu />
      </Layout>
    </>
  );
};

export default GioiThieuPage;
