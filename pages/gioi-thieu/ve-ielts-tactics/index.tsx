import * as React from 'react';
import { NextPage } from 'next';

import HeadSeo from '@/components/HeadSeo';
import Layout from '@/components/Layout';
import VeIeltsTactics from '@/screens/GioiThieu/VeIeltsTactics';

interface IVeIeltsTacticsPageProps {}

export const VeIeltsTacticsPage: NextPage = (props: IVeIeltsTacticsPageProps) => {
  return (
    <div className="container">
      <HeadSeo title="Gioi thieu ve ielts tactics" />

      <Layout>
        <VeIeltsTactics />
      </Layout>
    </div>
  );
};

export default VeIeltsTacticsPage;
