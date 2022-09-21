import * as React from 'react';
import { NextPage } from 'next';

import HeadSeo from '@/components/HeadSeo';
import Layout from '@/components/Layout';
import TaiLieu from '@/screens/TaiLieu';

export interface ITaiLieuPageProps {}

const TaiLieuPage: NextPage = (props: ITaiLieuPageProps) => {
  return (
    <div className="container">
      <HeadSeo title="Tai lieu" />

      <Layout>
        <TaiLieu />
      </Layout>
    </div>
  );
};

export default TaiLieuPage;
