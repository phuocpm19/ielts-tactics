import { NextPage } from 'next';

import HeadSeo from '@/components/HeadSeo';
import NotFound from '@/screens/404';

const NotFoundPage: NextPage = () => {
  const titleSeo = '404';

  return (
    <>
      <HeadSeo title={titleSeo} desc={titleSeo} />

      <NotFound />
    </>
  );
};

export default NotFoundPage;
