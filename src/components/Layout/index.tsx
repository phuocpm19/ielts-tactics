import React, { useEffect, useState } from 'react';

import Footer from '@/components/Footer';
import Header from '@/components/Header';

export interface ILayoutProps {
  showBanner?: boolean;
  children: React.ReactNode;
}

export default function Layout({ showBanner, children }: ILayoutProps) {
  return (
    <>
      <Header showBanner={showBanner} />

      {children}

      <Footer />
    </>
  );
}
