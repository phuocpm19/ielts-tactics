import * as React from 'react';
import Head from 'next/head';
import { renderSrcSeo } from '@/helpers/functions';
import { DESCRIPTION_DEFAULT, KEYWORDS_DEFAULT, THUMBNAIL_DEFAULT, TITLE_DEFAULT } from '@/helpers/constants';

export interface IHeadSeoProps {
  title?: string | null;
  srcSeo?: string | null;
  desc?: string | null;
  thumbnail?: string | null;
  keywords?: string | null;
  children?: React.ReactNode;
}

export default function HeadSeo(props: IHeadSeoProps) {
  const { title, srcSeo, keywords, desc, thumbnail, children } = props;

  return (
    <Head>
      <title>{title || TITLE_DEFAULT}</title>
      <link rel="icon" href="/favicon.ico" />
      <link rel="canonical" href={renderSrcSeo(srcSeo)} />
      <meta name="news_keywords" content={keywords || KEYWORDS_DEFAULT} />
      <meta name="keywords" content={KEYWORDS_DEFAULT} />
      <meta name="description" content={desc || DESCRIPTION_DEFAULT} />
      <meta property="og:url" content={renderSrcSeo(srcSeo)} />
      <meta property="og:image" content={thumbnail || THUMBNAIL_DEFAULT} />
      <meta property="og:title" content={title || TITLE_DEFAULT} />
      <meta property="og:title" content={title || TITLE_DEFAULT} itemProp="headline" />
      <meta property="og:description" content={desc || DESCRIPTION_DEFAULT} itemProp="description" />
      {children}
    </Head>
  );
}
