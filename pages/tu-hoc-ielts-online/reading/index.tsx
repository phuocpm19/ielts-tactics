import { NextPage } from 'next';

import HeadSeo from '@/components/HeadSeo';
import Layout from '@/components/Layout';
import TuHocIeltsReading from '@/screens/TuHocIeltsOnline/Reading';

const TuHocIeltsReadingPage: NextPage = () => {
  return (
    <>
      <HeadSeo title="Reading" />

      <Layout>
        <TuHocIeltsReading />
      </Layout>
    </>
  );
};

export default TuHocIeltsReadingPage;
