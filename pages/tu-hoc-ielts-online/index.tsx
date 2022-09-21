import * as React from 'react';
import { NextPage } from 'next';

import HeadSeo from '@/components/HeadSeo';
import Layout from '@/components/Layout';
import TuHocIeltsOnline from '@/screens/TuHocIeltsOnline';

export interface ITuHocIeltsOnlinePageProps {}

const TuHocIeltsOnlinePage: NextPage = (props: ITuHocIeltsOnlinePageProps) => {
  return (
    <div className="container">
      <HeadSeo title="Tu hoc Ielts Online" />

      <Layout>
        <TuHocIeltsOnline />
      </Layout>
    </div>
  );
};

export default TuHocIeltsOnlinePage;
