import { Paths } from '@/helpers/router';

export const MENU = {
  TrangChu: {
    id: 'menu1',
    href: Paths.TrangChu,
    name: 'Trang chủ',
    isInternal: true,
  },
  GioiThieu: {
    id: 'menu2',
    href: Paths.GioiThieu,
    name: 'Giới thiệu',
    isInternal: true,
  },
  GioiThieuVeIeltsTactics: {
    id: 'menu21',
    href: Paths.GioiThieuVeIeltsTactics,
    name: 'Về IELTS Tactics',
    isInternal: true,
  },
  GiaoVien: {
    id: 'menu22',
    href: Paths.GiaoVien,
    name: 'Giáo viên',
    isInternal: true,
  },
  GioiThieuChinhSach: {
    id: 'menu23',
    href: Paths.GioiThieuChinhSach,
    name: 'Chính sách và quyền riêng tư',
    isInternal: true,
  },
  LichKhaiGiang: {
    id: 'menu3',
    href: Paths.LichKhaiGiang,
    name: 'Lịch khai giảng',
    isInternal: true,
  },
  KhoaHoc: {
    id: 'menu4',
    href: Paths.KhoaHoc,
    name: 'Khoá học',
    isInternal: true,
  },
  KhoaHoc55: {
    id: 'menu41',
    href: Paths.KhoaHoc55,
    name: 'Khoá học 5.5+ IELTS',
    isInternal: true,
  },
  KhoaHoc65: {
    id: 'menu42',
    href: Paths.KhoaHoc65,
    name: 'Khoá học 6.5+ IELTS',
    isInternal: true,
  },
  KhoaHoc7075: {
    id: 'menu43',
    href: Paths.KhoaHoc7075,
    name: 'Khoá học 7.0 - 7.5+ IELTS',
    isInternal: true,
  },
  TaiLieu: {
    id: 'menu5',
    href: Paths.TaiLieu,
    name: 'Tài liệu IELTS',
    isInternal: true,
  },
  TuhocIeltsOnline: {
    id: 'menu6',
    href: Paths.TuhocIeltsOnline,
    name: 'Tự học IELTS online',
    isInternal: true,
  },
  TuhocIeltsOnlineVocabulary: {
    id: 'menu61',
    href: Paths.TuhocIeltsOnlineVocabulary,
    name: 'IELTS Vocabulary',
    isInternal: true,
  },
  TuhocIeltsOnlineGrammar: {
    id: 'menu62',
    href: Paths.TuhocIeltsOnlineGrammar,
    name: 'IELTS Grammar',
    isInternal: true,
  },
  TuhocIeltsOnlineReading: {
    id: 'menu63',
    href: Paths.TuhocIeltsOnlineReading,
    name: 'IELTS Reading',
    isInternal: true,
  },
  TuhocIeltsOnlineListening: {
    id: 'menu64',
    href: Paths.TuhocIeltsOnlineListening,
    name: 'IELTS Listening',
    isInternal: true,
  },
  TuhocIeltsOnlineSpeaking: {
    id: 'menu65',
    href: Paths.TuhocIeltsOnlineSpeaking,
    name: 'IELTS Speaking',
    isInternal: true,
  },
  TuhocIeltsOnlineWriting: {
    id: 'menu66',
    href: Paths.TuhocIeltsOnlineWriting,
    name: 'IELTS Writing',
    isInternal: true,
  },
  TinTuc: {
    id: 'menu7',
    href: Paths.TinTuc,
    name: 'Tin tức',
    isInternal: true,
  },
  TuVan: {
    id: 'menu8',
    href: null,
    name: 'Tư vấn',
    isInternal: true,
  },
  TuVanKhoaHoc: {
    id: 'menu81',
    href: 'https://docs.google.com/forms/d/e/1FAIpQLSdjySwmAj2vltm6roTaEj-k-GnGLH-UijT4UeONzL34TPmY6w/viewform',
    name: 'Đăng ký tư vấn khoá học',
    isInternal: false,
  },
  TuVanThiThu: {
    id: 'menu82',
    href: 'https://docs.google.com/forms/d/e/1FAIpQLSf2G9LdAEHOZChMzEJqS0GmHUqBs5xgsEvAZVCcqidYyvvaYQ/viewform',
    name: 'Đăng ký thi thử IELTS miễn phí',
    isInternal: false,
  },
};

export const navList = [
  {
    id: MENU.TrangChu.id,
    href: MENU.TrangChu.href,
    name: MENU.TrangChu.name,
  },
  {
    id: MENU.GioiThieu.id,
    href: MENU.GioiThieu.href,
    name: MENU.GioiThieu.name,
    subMenu: [
      {
        id: MENU.GioiThieuVeIeltsTactics.id,
        href: MENU.GioiThieuVeIeltsTactics.href,
        name: MENU.GioiThieuVeIeltsTactics.name,
        isInternal: MENU.GioiThieuVeIeltsTactics.isInternal,
      },
      {
        id: MENU.GiaoVien.id,
        href: MENU.GiaoVien.href,
        name: MENU.GiaoVien.name,
        isInternal: MENU.GiaoVien.isInternal,
      },
      {
        id: MENU.GioiThieuChinhSach.id,
        href: MENU.GioiThieuChinhSach.href,
        name: MENU.GioiThieuChinhSach.name,
        isInternal: MENU.GioiThieuChinhSach.isInternal,
      },
    ],
  },
  {
    id: MENU.LichKhaiGiang.id,
    href: MENU.LichKhaiGiang.href,
    name: MENU.LichKhaiGiang.name,
  },
  {
    id: MENU.KhoaHoc.id,
    href: MENU.KhoaHoc.href,
    name: MENU.KhoaHoc.name,
    subMenu: [
      {
        id: MENU.KhoaHoc55.id,
        href: MENU.KhoaHoc55.href,
        name: MENU.KhoaHoc55.name,
        isInternal: MENU.KhoaHoc55.isInternal,
      },
      {
        id: MENU.KhoaHoc65.id,
        href: MENU.KhoaHoc65.href,
        name: MENU.KhoaHoc65.name,
        isInternal: MENU.KhoaHoc65.isInternal,
      },
      {
        id: MENU.KhoaHoc7075.id,
        href: MENU.KhoaHoc7075.href,
        name: MENU.KhoaHoc7075.name,
        isInternal: MENU.KhoaHoc7075.isInternal,
      },
    ],
  },
  {
    id: MENU.TaiLieu.id,
    href: MENU.TaiLieu.href,
    name: MENU.TaiLieu.name,
  },
  {
    id: MENU.TuhocIeltsOnline.id,
    href: MENU.TuhocIeltsOnline.href,
    name: MENU.TuhocIeltsOnline.name,
    subMenu: [
      {
        id: MENU.TuhocIeltsOnlineVocabulary.id,
        href: MENU.TuhocIeltsOnlineVocabulary.href,
        name: MENU.TuhocIeltsOnlineVocabulary.name,
        isInternal: MENU.TuhocIeltsOnlineVocabulary.isInternal,
      },
      {
        id: MENU.TuhocIeltsOnlineGrammar.id,
        href: MENU.TuhocIeltsOnlineGrammar.href,
        name: MENU.TuhocIeltsOnlineGrammar.name,
        isInternal: MENU.TuhocIeltsOnlineGrammar.isInternal,
      },
      {
        id: MENU.TuhocIeltsOnlineReading.id,
        href: MENU.TuhocIeltsOnlineReading.href,
        name: MENU.TuhocIeltsOnlineReading.name,
        isInternal: MENU.TuhocIeltsOnlineReading.isInternal,
      },
      {
        id: MENU.TuhocIeltsOnlineListening.id,
        href: MENU.TuhocIeltsOnlineListening.href,
        name: MENU.TuhocIeltsOnlineListening.name,
        isInternal: MENU.TuhocIeltsOnlineListening.isInternal,
      },
      {
        id: MENU.TuhocIeltsOnlineSpeaking.id,
        href: MENU.TuhocIeltsOnlineSpeaking.href,
        name: MENU.TuhocIeltsOnlineSpeaking.name,
        isInternal: MENU.TuhocIeltsOnlineSpeaking.isInternal,
      },
      {
        id: MENU.TuhocIeltsOnlineWriting.id,
        href: MENU.TuhocIeltsOnlineWriting.href,
        name: MENU.TuhocIeltsOnlineWriting.name,
        isInternal: MENU.TuhocIeltsOnlineWriting.isInternal,
      },
    ],
  },
  {
    id: MENU.TinTuc.id,
    href: MENU.TinTuc.href,
    name: MENU.TinTuc.name,
  },
  {
    id: MENU.TuVan.id,
    href: MENU.TuVan.href,
    name: MENU.TuVan.name,
    subMenu: [
      {
        id: MENU.TuVanKhoaHoc.id,
        href: MENU.TuVanKhoaHoc.href,
        name: MENU.TuVanKhoaHoc.name,
        isInternal: MENU.TuVanKhoaHoc.isInternal,
      },
      {
        id: MENU.TuVanThiThu.id,
        href: MENU.TuVanThiThu.href,
        name: MENU.TuVanThiThu.name,
        isInternal: MENU.TuVanThiThu.isInternal,
      },
    ],
  },
];
