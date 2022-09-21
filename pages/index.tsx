import * as React from 'react';
import type { NextPage } from 'next';

import HeadSeo from '@/components/HeadSeo';
import Layout from '@/components/Layout';
import TrangChu from '@/screens/TrangChu';

const HomePage: NextPage = () => {
  return (
    <div className="container">
      <HeadSeo title="Home page" />

      <Layout>
        <TrangChu />
      </Layout>
    </div>
  );
};

export default HomePage;
