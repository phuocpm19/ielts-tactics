import * as React from 'react';
import { NextPage } from 'next';

import HeadSeo from '@/components/HeadSeo';
import Layout from '@/components/Layout';
import ChinhSach from '@/screens/GioiThieu/ChinhSach';

interface IChinhSachPageProps {}

export const ChinhSachPage: NextPage = (props: IChinhSachPageProps) => {
  return (
    <div className="container">
      <HeadSeo title="Gioi thieu ve chinh sach va quyen rieng tu" />

      <Layout>
        <ChinhSach />
      </Layout>
    </div>
  );
};

export default ChinhSachPage;
