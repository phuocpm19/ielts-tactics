import * as React from 'react';
import { NextPage } from 'next';

import HeadSeo from '@/components/HeadSeo';
import Layout from '@/components/Layout';
import TuVan from '@/screens/TuVan';

export interface ITuVanPageProps {}

const TuVanPage: NextPage = (props: ITuVanPageProps) => {
  return (
    <div className="container">
      <HeadSeo title="Tu Van" />

      <Layout>
        <TuVan />
      </Layout>
    </div>
  );
};

export default TuVanPage;
