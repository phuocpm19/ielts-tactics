import * as React from 'react';
import { NextPage } from 'next';

import HeadSeo from '@/components/HeadSeo';
import Layout from '@/components/Layout';
import TuHocIeltsSpeaking from '@/screens/TuHocIeltsOnline/Speaking';

export interface ITuHocIeltsSpeakingPageProps {}

const TuHocIeltsSpeakingPage: NextPage = (props: ITuHocIeltsSpeakingPageProps) => {
  return (
    <div className="container">
      <HeadSeo title="Speaking" />

      <Layout>
        <TuHocIeltsSpeaking />
      </Layout>
    </div>
  );
};

export default TuHocIeltsSpeakingPage;
