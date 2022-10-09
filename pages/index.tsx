import * as React from 'react';
import type { NextPage } from 'next';

import HeadSeo from '@/components/HeadSeo';
import Layout from '@/components/Layout';
import TrangChu from '@/screens/TrangChu';
import { TITLE_DEFAULT } from '@/helpers/constants';

const HomePage: NextPage = () => {
  return (
    <>
      <HeadSeo title={TITLE_DEFAULT} />

      <Layout showBanner>
        <TrangChu />
      </Layout>
    </>
  );
};

export default HomePage;
