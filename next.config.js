/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async redirects() {
    return [
      {
        source: "/:category(.*sitemap.*\\.xml)",
        destination: "/.netlify/builders/sitemap/:category",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
