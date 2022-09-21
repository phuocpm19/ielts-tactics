import * as React from 'react';
import { NextPage } from 'next';

import HeadSeo from '@/components/HeadSeo';
import Layout from '@/components/Layout';
import LichKhaiGiang from '@/screens/LichKhaiGiang';

export interface ILichKhaiGiangPageProps {}

const LichKhaiGiangPage: NextPage = (props: ILichKhaiGiangPageProps) => {
  return (
    <div className="container">
      <HeadSeo title="Lich khai giang" />

      <Layout>
        <LichKhaiGiang />
      </Layout>
    </div>
  );
};

export default LichKhaiGiangPage;
