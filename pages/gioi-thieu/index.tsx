import { NextPage } from 'next';

import HeadSeo from '@/components/HeadSeo';
import Layout from '@/components/Layout';
import GioiThieu from '@/screens/GioiThieu';
import { Paths } from '@/helpers/router';

const GioiThieuPage: NextPage = () => {
  const titleSeo = 'Giới thiệu về IELTS Tactics';

  return (
    <>
      <HeadSeo title={titleSeo} desc={titleSeo} srcSeo={Paths.GiaoVien} />

      <Layout>
        <GioiThieu />
      </Layout>
    </>
  );
};

export default GioiThieuPage;
