import * as React from 'react';
import { NextPage } from 'next';

import HeadSeo from '@/components/HeadSeo';
import Layout from '@/components/Layout';
import TinTuc from '@/screens/TinTuc';

export interface ITinTucPageProps {}

const TinTucPage: NextPage = (props: ITinTucPageProps) => {
  return (
    <div className="container">
      <HeadSeo title="Tin tuc" />

      <Layout>
        <TinTuc />
      </Layout>
    </div>
  );
};

export default TinTucPage;
