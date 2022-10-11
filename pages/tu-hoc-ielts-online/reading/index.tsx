import { NextPage } from 'next';

import HeadSeo from '@/components/HeadSeo';
import Layout from '@/components/Layout';
import TuHocIeltsReading from '@/screens/TuHocIeltsOnline/Reading';
import { Paths } from '@/helpers/router';

const TuHocIeltsReadingPage: NextPage = () => {
  const titleSeo = 'IELTS Reading, tự học IELTS Reading online';

  return (
    <>
      <HeadSeo title={titleSeo} desc={titleSeo} srcSeo={Paths.TinTuc} />

      <Layout>
        <TuHocIeltsReading />
      </Layout>
    </>
  );
};

export default TuHocIeltsReadingPage;
