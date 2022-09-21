export const Paths = {
  TrangChu: '/',
  GioiThieu: '/gioi-thieu',
  LichKhaiGiang: '/lich-khai-giang',
  KhoaHoc: '/khoa-hoc',
  TaiLieu: '/tai-lieu',
  TuhocIeltsOnline: '/tu-hoc-ielts-online',
  TuhocIeltsOnlineGrammar: '/tu-hoc-ielts-online/grammar',
  TuhocIeltsOnlineListening: '/tu-hoc-ielts-online/listening',
  TuhocIeltsOnlineReading: '/tu-hoc-ielts-online/reading',
  TuhocIeltsOnlineSpeaking: '/tu-hoc-ielts-online/speaking',
  TuhocIeltsOnlineVocabulary: '/tu-hoc-ielts-online/vocabulary',
  TuhocIeltsOnlineWriting: '/tu-hoc-ielts-online/writing',
  TinTuc: '/tin-tuc',
  TinTucChiTiet: (slug?: string): string => `/tin-tuc${slug ? `/${slug}` : ''}`,
  TuVan: '/tu-van',
};
