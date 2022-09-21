import * as React from 'react';
import { NextPage } from 'next';

import HeadSeo from '@/components/HeadSeo';
import Layout from '@/components/Layout';
import KhoaHoc from '@/screens/KhoaHoc';

export interface IKhoaHocPageProps {}

const KhoaHocPage: NextPage = (props: IKhoaHocPageProps) => {
  return (
    <div className="container">
      <HeadSeo title="Khoa hoc" />

      <Layout>
        <KhoaHoc />
      </Layout>
    </div>
  );
};

export default KhoaHocPage;
