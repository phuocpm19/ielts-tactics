import { NextPage } from 'next';

import HeadSeo from '@/components/HeadSeo';
import Layout from '@/components/Layout';
import GioiThieu from '@/screens/GioiThieu';

export const GioiThieuPage: NextPage = () => {
  return (
    <>
      <HeadSeo title="Gioi thieu" />

      <Layout>
        <GioiThieu />
      </Layout>
    </>
  );
};

export default GioiThieuPage;
