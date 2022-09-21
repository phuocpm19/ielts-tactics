import * as React from 'react';
import { NextPage } from 'next';

import HeadSeo from '@/components/HeadSeo';
import Layout from '@/components/Layout';
import GioiThieu from '@/screens/GioiThieu';

interface IGioiThieuPageProps {}

export const GioiThieuPage: NextPage = (props: IGioiThieuPageProps) => {
  return (
    <div className="container">
      <HeadSeo title="Gioi thieu" />

      <Layout>
        <GioiThieu />
      </Layout>
    </div>
  );
};

export default GioiThieuPage;
