export const toAbsoluteUrl = (pathname: string) => process.env.NEXT_PUBLIC_PUBLIC_URL + pathname;

import moment from 'moment';
import { DOMAIN_DEFAULT } from './constants';

export const convertFullDateTime = (timeISO: string): string => {
  const date = new Date(timeISO);
  const timestamp = date.getTime();
  return moment.unix(timestamp / 1000).format('DD/MM/YYYY');
};

export const renderSrcSeo = (slug?: string | null) => {
  const srcSeo = slug ? `${DOMAIN_DEFAULT}${slug}` : DOMAIN_DEFAULT;

  return srcSeo;
};

export const sortList = (list: any[]) => {
  const newList = list.sort((a, b) => {
    const keyA = a.createAt;
    const keyB = b.createAt;

    if (keyA < keyB) {
      return 1;
    } else {
      return -1;
    }

    return 0;
  });

  return newList;
};
