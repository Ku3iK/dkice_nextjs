/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['www.datocms-assets.com']
  },
  i18n: {
    locales: ['pl-PL', 'de-DE'],
    defaultLocale: 'pl-PL'
  }
};
