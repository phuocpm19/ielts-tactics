import * as React from 'react';
import { NextPage } from 'next';

import HeadSeo from '@/components/HeadSeo';
import Layout from '@/components/Layout';
import TuHocIeltsGrammar from '@/screens/TuHocIeltsOnline/Grammar';

export interface ITuHocIeltsGrammarPageProps {}

const TuHocIeltsGrammarPage: NextPage = (props: ITuHocIeltsGrammarPageProps) => {
  return (
    <div className="container">
      <HeadSeo title="Grammar" />

      <Layout>
        <TuHocIeltsGrammar />
      </Layout>
    </div>
  );
};

export default TuHocIeltsGrammarPage;
