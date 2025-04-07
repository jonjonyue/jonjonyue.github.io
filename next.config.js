/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === 'production' ? '/jonjonyue.github.io' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/jonjonyue.github.io/' : '',
};

module.exports = nextConfig; 