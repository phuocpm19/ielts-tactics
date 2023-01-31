export type TArticle = {
  id: number | string | null;
  title: string | null;
  desc: string | null;
  createAt: string | null;
  content: string | null;
  thumbnail: string | null;
  slug: string | null;
  show: boolean;
  authorName: string | null;
  createBy: string | null;
  mucLucList?: any;
};
