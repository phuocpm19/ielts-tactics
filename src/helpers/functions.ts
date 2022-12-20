export const toAbsoluteUrl = (pathname: string) => process.env.NEXT_PUBLIC_PUBLIC_URL + pathname;

import moment from 'moment';
import { CATEGORY_NAME, DOMAIN_DEFAULT } from './constants';
import { Paths } from './router';

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

export const renderPathArticle = (categoryName: string) => {
  switch (categoryName) {
    case CATEGORY_NAME.GIOI_THIEU:
      return Paths.GioiThieu;
    case CATEGORY_NAME.GIAO_VIEN:
      return Paths.GiaoVien;
    case CATEGORY_NAME.LICH_KHAI_GIANG:
      return Paths.LichKhaiGiang;
    case CATEGORY_NAME.KHOA_HOC:
      return Paths.LichKhaiGiang;
    case CATEGORY_NAME.TAI_LIEU:
      return Paths.TaiLieu;
    case CATEGORY_NAME.HOC_IELTS_ONLINE:
      return Paths.TuhocIeltsOnline;
    case CATEGORY_NAME.TIN_TUC:
      return Paths.TinTuc;

    default:
      return Paths.TrangChu;
  }
};
