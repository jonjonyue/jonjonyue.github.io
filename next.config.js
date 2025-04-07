/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/jonjonyue.github.io',
  assetPrefix: '/jonjonyue.github.io/',
};

module.exports = nextConfig; 