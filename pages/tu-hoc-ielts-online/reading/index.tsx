import * as React from 'react';
import { NextPage } from 'next';

import HeadSeo from '@/components/HeadSeo';
import Layout from '@/components/Layout';
import TuHocIeltsReading from '@/screens/TuHocIeltsOnline/Reading';

export interface ITuHocIeltsReadingPageProps {}

const TuHocIeltsReadingPage: NextPage = (props: ITuHocIeltsReadingPageProps) => {
  return (
    <div className="container">
      <HeadSeo title="Reading" />

      <Layout>
        <TuHocIeltsReading />
      </Layout>
    </div>
  );
};

export default TuHocIeltsReadingPage;
