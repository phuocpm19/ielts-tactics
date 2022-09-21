import * as React from 'react';
import Link from 'next/link';

import { Paths } from '@/helpers/router';
import styles from './styles.module.scss';

export interface IHeaderProps {}

export default function Header(props: IHeaderProps) {
  return (
    <div className={styles.container}>
      <Link href={Paths.TrangChu}>
        <a>trang chu</a>
      </Link>
      <Link href={Paths.GioiThieu}>
        <a>gioi thieu</a>
      </Link>
      <Link href={Paths.LichKhaiGiang}>
        <a>lich khai giang</a>
      </Link>
      <Link href={Paths.KhoaHoc}>
        <a>khoa hoc</a>
      </Link>
      <Link href={Paths.TaiLieu}>
        <a>tai lieu</a>
      </Link>
      <Link href={Paths.TuhocIeltsOnline}>
        <a>tu hoc ielts online</a>
      </Link>
      <Link href={Paths.TinTuc}>
        <a>tin tuc</a>
      </Link>
      <Link href={Paths.TuVan}>
        <a>tu van</a>
      </Link>
    </div>
  );
}
