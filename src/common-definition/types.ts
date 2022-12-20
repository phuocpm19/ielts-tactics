export type TRecordCommon = {
  category: string;
  content: string;
  createAt: number;
  createBy: string;
  desc: string;
  downloadUrl1: string;
  downloadUrl2: string;
  downloadUrl3: string;
  downloadUrl4: string;
  downloadUrl5: string;
  id: string;
  postType: string;
  show: boolean;
  showOnSlide: boolean;
  singleCategory: string;
  slug: string;
  tags: string[];
  teacherName: string;
  thumbnail: string;
  thumbnailName: string;
  thumbnailPath: string;
  timeServer: {
    nanoseconds: number;
    seconds: number;
  };
  timestamp: string | undefined;
  title: string;
};
