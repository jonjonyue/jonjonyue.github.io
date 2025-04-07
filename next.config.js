/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === 'production' ? '/jonjonyue.github.io' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/jonjonyue.github.io/' : '',
  // Ensure static assets are properly handled
  trailingSlash: true,
  // Disable image optimization for static export
  images: {
    unoptimized: true,
    domains: [],
  },
};

module.exports = nextConfig; 