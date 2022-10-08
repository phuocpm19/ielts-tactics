export const toAbsoluteUrl = (pathname: string) => process.env.NEXT_PUBLIC_PUBLIC_URL + pathname;

import moment from 'moment';

export const convertFullDateTime = (timeISO: string): string => {
  const date = new Date(timeISO);
  const timestamp = date.getTime();
  return moment.unix(timestamp / 1000).format('DD/MM/YYYY');
};
