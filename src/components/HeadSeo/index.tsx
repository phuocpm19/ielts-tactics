import * as React from 'react';
import Head from 'next/head';

export interface IHeadSeoProps {
  title: string;
  children?: React.ReactNode;
}

export default function HeadSeo(props: IHeadSeoProps) {
  const { title, children } = props;
  return (
    <Head>
      <title>{title}</title>
      <link rel="icon" href="/favicon.ico" />
      {children}
    </Head>
  );
}
