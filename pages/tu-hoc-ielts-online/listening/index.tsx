import * as React from 'react';
import { NextPage } from 'next';

import HeadSeo from '@/components/HeadSeo';
import Layout from '@/components/Layout';
import TuHocIeltsListening from '@/screens/TuHocIeltsOnline/Listening';

export interface ITuHocIeltsListeningPageProps {}

const TuHocIeltsListeningPage: NextPage = (props: ITuHocIeltsListeningPageProps) => {
  return (
    <div className="container">
      <HeadSeo title="Listening" />

      <Layout>
        <TuHocIeltsListening />
      </Layout>
    </div>
  );
};

export default TuHocIeltsListeningPage;
