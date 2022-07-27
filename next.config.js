/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async rewrites() {
    return [
      {
        source: "/:category(.*sitemap.*\\.xml)",
        destination:
          "https://moonlit-babka-1e1743.netlify.app/.netlify/builders/sitemap/:category",
      },
    ];
  },
};

module.exports = nextConfig;
