import * as React from 'react';
import { NextPage } from 'next';

import HeadSeo from '@/components/HeadSeo';
import Layout from '@/components/Layout';
import TuHocIeltsWriting from '@/screens/TuHocIeltsOnline/Writing';

export interface ITuHocIeltsWritingPageProps {}

const TuHocIeltsWritingPage: NextPage = (props: ITuHocIeltsWritingPageProps) => {
  return (
    <div className="container">
      <HeadSeo title="Writing" />

      <Layout>
        <TuHocIeltsWriting />
      </Layout>
    </div>
  );
};

export default TuHocIeltsWritingPage;
