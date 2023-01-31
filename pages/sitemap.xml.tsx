import { Paths } from '@/helpers/router';

const generateSiteMap = (posts?: any) => {
  const urlSite = 'https://ieltstactics.vn';
  const timeLastMod = new Date().toISOString();

  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <url>
       <loc>${urlSite}/</loc>
       <lastmod>${timeLastMod}</lastmod>
     </url>
     <url>
       <loc>${urlSite}${Paths.GioiThieu}</loc>
       <lastmod>${timeLastMod}</lastmod>
     </url>
     <url>
       <loc>${urlSite}${Paths.GioiThieu}/trung-tam-luyen-thi-ielts-uy-tín-tai-viet-nam-ielts-tactics</loc>
       <lastmod>${timeLastMod}</lastmod>
     </url>
     <url>
       <loc>${urlSite}${Paths.TinTuc}/trung-tam-luyen-thi-ielts-uy-t%C3%ADn-tai-viet-nam-ielts-tactics</loc>
       <lastmod>${timeLastMod}</lastmod>
     </url>
     <url>
       <loc>${urlSite}${Paths.GiaoVien}</loc>
       <lastmod>${timeLastMod}</lastmod>
     </url>
     <url>
       <loc>${urlSite}${Paths.LichKhaiGiang}</loc>
       <lastmod>${timeLastMod}</lastmod>
     </url>
     <url>
       <loc>${urlSite}${Paths.KhoaHoc}</loc>
       <lastmod>${timeLastMod}</lastmod>
     </url>
     <url>
       <loc>${urlSite}${Paths.KhoaHoc}/lo-tr%C3%ACnh-cac-khoa-hoc-ielts-tactics</loc>
       <lastmod>${timeLastMod}</lastmod>
     </url>
     <url>
       <loc>${urlSite}${Paths.KhoaHoc}/Kh%C3%B3a%20h%E1%BB%8Dc%20IELTS%20th%E1%BA%A7n%20t%E1%BB%91c%20m%E1%BB%A5c%20ti%C3%AAu%205.5+%20IELTS%20cam%20k%E1%BA%BFt%20%C4%91%E1%BA%A7u%20ra</loc>
       <lastmod>${timeLastMod}</lastmod>
     </url>
     <url>
       <loc>${urlSite}${Paths.KhoaHoc55}</loc>
       <lastmod>${timeLastMod}</lastmod>
     </url>
     <url>
       <loc>${urlSite}${Paths.KhoaHoc65}</loc>
       <lastmod>${timeLastMod}</lastmod>
     </url>
     <url>
       <loc>${urlSite}${Paths.KhoaHoc7075}</loc>
       <lastmod>${timeLastMod}</lastmod>
     </url>
     <url>
       <loc>${urlSite}${Paths.TaiLieu}</loc>
       <lastmod>${timeLastMod}</lastmod>
     </url>
     <url>
       <loc>${urlSite}${Paths.TuhocIeltsOnline}</loc>
       <lastmod>${timeLastMod}</lastmod>
     </url>
     <url>
       <loc>${urlSite}${Paths.TuhocIeltsOnlineGrammar}</loc>
       <lastmod>${timeLastMod}</lastmod>
     </url>
     <url>
       <loc>${urlSite}${Paths.TuhocIeltsOnlineListening}</loc>
       <lastmod>${timeLastMod}</lastmod>
     </url>
     <url>
       <loc>${urlSite}${Paths.TuhocIeltsOnlineReading}</loc>
       <lastmod>${timeLastMod}</lastmod>
     </url>
     <url>
       <loc>${urlSite}${Paths.TuhocIeltsOnlineSpeaking}</loc>
       <lastmod>${timeLastMod}</lastmod>
     </url>
     <url>
       <loc>${urlSite}${Paths.TuhocIeltsOnlineVocabulary}</loc>
       <lastmod>${timeLastMod}</lastmod>
     </url>
     <url>
       <loc>${urlSite}${Paths.TuhocIeltsOnlineWriting}</loc>
       <lastmod>${timeLastMod}</lastmod>
     </url>
     <url>
       <loc>${urlSite}${Paths.TinTuc}</loc>
       <lastmod>${timeLastMod}</lastmod>
     </url>
   </urlset>
 `;
};

const SiteMap = () => {};

export async function getServerSideProps({ res }: any) {
  const sitemap = generateSiteMap();
  res.setHeader('Content-Type', 'text/xml');
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default SiteMap;
