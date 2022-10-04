import { NextPage } from 'next';

import HeadSeo from '@/components/HeadSeo';
import Layout from '@/components/Layout';
import TinTuc from '@/screens/TinTuc';

export interface ITinTucPageProps {}

const TinTucPage: NextPage = (props: ITinTucPageProps) => {
  return (
    <>
      <HeadSeo title="Tin tuc" />

      <Layout showLoading={false}>
        <TinTuc />
      </Layout>
    </>
  );
};

export default TinTucPage;
