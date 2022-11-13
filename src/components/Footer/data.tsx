import { Paths } from '@/helpers/router';
import { MENU } from '@/components/Header/data';

const branchList = [
  {
    id: 1,
    name: (
      <>
        Cơ sở 1: 435 Quang Trung, Q. Hà Đông, TP. Hà Nội <br />
        Hotline: 097 958 0154 - 090 322 4269
      </>
    ),
  },
  {
    id: 2,
    name: (
      <>
        Cơ sở 2: 31 Hồ Đắc Di, Q. Đống Đa, TP. Hà Nội <br />
        Hotline: 097 958 0154 - 090 322 4269
      </>
    ),
  },
  {
    id: 3,
    name: (
      <>
        Cơ sở 3: 115 Ngô Gia Tự - Q. Long Biên - TP. Hà Nội <br />
        Hotline: 097 958 0154
      </>
    ),
  },
];

const serviceList = [
  {
    id: 1,
    name: 'Khóa học IELTS Tactics',
    href: Paths.KhoaHoc,
    isInternal: true,
  },
  {
    id: 2,
    name: 'Thi thử IELTS Online',
    href: 'https://docs.google.com/forms/d/e/1FAIpQLSf2G9LdAEHOZChMzEJqS0GmHUqBs5xgsEvAZVCcqidYyvvaYQ/viewform',
    isInternal: false,
  },
  {
    id: 3,
    name: 'Tư vấn lộ trình IELTS miễn phí',
    href: 'https://docs.google.com/forms/d/e/1FAIpQLSdjySwmAj2vltm6roTaEj-k-GnGLH-UijT4UeONzL34TPmY6w/viewform',
    isInternal: false,
  },
  {
    id: 4,
    name: MENU.GioiThieuChinhSach.name,
    href: MENU.GioiThieuChinhSach.href,
    isInternal: false,
  },
];

export { branchList, serviceList };
