import { Paths } from '@/helpers/router';

export const navList = [
  {
    id: 1,
    href: Paths.TrangChu,
    name: 'Trang chủ',
  },
  {
    id: 2,
    href: Paths.GioiThieu,
    name: 'Giới thiệu',
    subMenu: [
      {
        id: 1,
        href: Paths.GioiThieuVeIeltsTactics,
        name: 'Về Ielts Tactics',
        isInternal: true,
      },
      {
        id: 2,
        href: Paths.GiaoVien,
        name: 'Giáo viên',
        isInternal: true,
      },
      {
        id: 3,
        href: Paths.GioiThieuChinhSach,
        name: 'Chính sách và quyền riêng tư',
        isInternal: true,
      },
    ],
  },
  {
    id: 3,
    href: Paths.LichKhaiGiang,
    name: 'Lịch khai giảng',
  },
  {
    id: 4,
    href: Paths.KhoaHoc,
    name: 'Khoá học',
    subMenu: [
      {
        id: 1,
        href: Paths.KhoaHoc55,
        name: 'Khoá học 5.5+ IELTS',
        isInternal: true,
      },
      {
        id: 2,
        href: Paths.KhoaHoc65,
        name: 'Khoá học 6.5+ IELTS',
        isInternal: true,
      },
      {
        id: 3,
        href: Paths.KhoaHoc7075,
        name: 'Khoá học 7.0 - 7.5+ IELTS',
        isInternal: true,
      },
    ],
  },
  {
    id: 5,
    href: Paths.TaiLieu,
    name: 'Tài liệu IELTS',
  },
  {
    id: 6,
    href: Paths.TuhocIeltsOnline,
    name: 'Tự học Ielts online',
    subMenu: [
      {
        id: 1,
        href: Paths.TuhocIeltsOnlineVocabulary,
        name: 'IELTS Vocabulary',
        isInternal: true,
      },
      {
        id: 2,
        href: Paths.TuhocIeltsOnlineGrammar,
        name: 'IELTS Grammar',
        isInternal: true,
      },
      {
        id: 3,
        href: Paths.TuhocIeltsOnlineReading,
        name: 'IELTS Reading',
        isInternal: true,
      },
      {
        id: 4,
        href: Paths.TuhocIeltsOnlineListening,
        name: 'IELTS Listening',
        isInternal: true,
      },
      {
        id: 5,
        href: Paths.TuhocIeltsOnlineSpeaking,
        name: 'IELTS Speaking',
        isInternal: true,
      },
      {
        id: 6,
        href: Paths.TuhocIeltsOnlineWriting,
        name: 'IELTS Writing',
        isInternal: true,
      },
    ],
  },
  {
    id: 7,
    href: Paths.TinTuc,
    name: 'Tin tức',
  },
  {
    id: 1,
    href: null,
    name: 'Tư vấn',
    subMenu: [
      {
        id: 1,
        href: 'https://docs.google.com/forms/d/e/1FAIpQLSdjySwmAj2vltm6roTaEj-k-GnGLH-UijT4UeONzL34TPmY6w/viewform',
        name: 'Đăng ký tư vấn khoá học',
        isInternal: false,
      },
      {
        id: 2,
        href: 'https://docs.google.com/forms/d/e/1FAIpQLSf2G9LdAEHOZChMzEJqS0GmHUqBs5xgsEvAZVCcqidYyvvaYQ/viewform',
        name: 'Đăng ký thi thử IELTS miễn phí',
        isInternal: false,
      },
    ],
  },
];
