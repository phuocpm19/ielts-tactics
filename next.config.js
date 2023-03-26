/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ['vi', 'sr', 'es', 'pseudo'],
    defaultLocale: 'vi'
  }
};

module.exports = nextConfig;
