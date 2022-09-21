import * as React from 'react';
import { NextPage } from 'next';

import HeadSeo from '@/components/HeadSeo';
import Layout from '@/components/Layout';
import TuHocIeltsVocabulary from '@/screens/TuHocIeltsOnline/Vocabulary';

export interface ITuHocIeltsVocabularyPageProps {}

const TuHocIeltsVocabularyPage: NextPage = (props: ITuHocIeltsVocabularyPageProps) => {
  return (
    <div className="container">
      <HeadSeo title="Vocabulary" />

      <Layout>
        <TuHocIeltsVocabulary />
      </Layout>
    </div>
  );
};

export default TuHocIeltsVocabularyPage;
