import * as React from 'react';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

export interface ILayoutProps {
  children: React.ReactNode;
}

export default function Layout(props: ILayoutProps) {
  const { children } = props;
  return (
    <div className="layout">
      <Header />
      <div className="content">{children}</div>
      <Footer />
    </div>
  );
}
