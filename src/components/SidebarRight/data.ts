import { Paths } from '@/helpers/router';
import { EIconName } from '@/components/Icon/enums';

export const courseList = [
  {
    id: 1,
    href: Paths.KhoaHoc55,
    name: 'Giai đoạn 1: 5.5+ IELTS',
  },
  {
    id: 2,
    href: Paths.KhoaHoc65,
    name: 'Giai đoạn 2: 6.5+ IELTS',
  },
  {
    id: 3,
    href: Paths.KhoaHoc7075,
    name: 'Giai đoạn 3: 7.0-7.5+ IELTS',
  },
];

export const ieltsList = [
  {
    id: 1,
    href: Paths.TuhocIeltsOnlineVocabulary,
    name: 'IELTS Vocabulary',
  },
  {
    id: 2,
    href: Paths.TuhocIeltsOnlineGrammar,
    name: 'IELTS Grammar',
  },
  {
    id: 3,
    href: Paths.TuhocIeltsOnlineReading,
    name: 'IELTS Reading',
  },
  {
    id: 4,
    href: Paths.TuhocIeltsOnlineListening,
    name: 'IELTS Listening',
  },
  {
    id: 5,
    href: Paths.TuhocIeltsOnlineSpeaking,
    name: 'IELTS Speaking',
  },
  {
    id: 6,
    href: Paths.TuhocIeltsOnlineWriting,
    name: 'IELTS Writing',
  },
];

export const socialList = [
  {
    id: 1,
    href: 'https://www.m.me//Ieltstactics.band9',
    iconName: EIconName.ICON_SOCIAL_INSTAGRAM,
    name: 'Truy cập Instagram',
  },
  {
    id: 2,
    href: 'https://www.instagram.com/ieltstactics',
    iconName: EIconName.ICON_SOCIAL_TIKTOK,
    name: 'Truy cập Tiktok',
  },
  {
    id: 3,
    href: 'https://www.youtube.com/c/IELTSTactics',
    iconName: EIconName.ICON_SOCIAL_YOUTUBE,
    name: 'Truy cập Youtube',
  },
  {
    id: 4,
    href: 'https://www.facebook.com/Ieltstactics.band9',
    iconName: EIconName.ICON_SOCIAL_FACEBOOK,
    name: 'Fanpage chính thức',
  },
];
