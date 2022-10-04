import React, { useEffect, useState } from 'react';

import Loading from '@/components/Loading';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

export interface ILayoutProps {
  showLoading?: boolean;
  showBanner?: boolean;
  children: React.ReactNode;
}

export default function Layout({ showBanner, children, showLoading = true }: ILayoutProps) {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (loading) {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
  }, []);

  return (
    <>
      {showLoading && <>{loading && <Loading />}</>}

      <Header showBanner={showBanner} />

      <div className="content">{children}</div>

      <Footer />
    </>
  );
}
