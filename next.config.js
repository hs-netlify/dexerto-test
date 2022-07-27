/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async rewrites() {
    return [
      {
        source: "/:category(.*sitemap.*\\.xml)",
        destination:
          "https://rs-test-odb-ttl.netlify.app/.netlify/builders/sitemap/:category",
      },
    ];
  },
};

module.exports = nextConfig;
