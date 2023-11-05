/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "storage.googleapis.com",
      "t4.ftcdn.net",
      "www.influencer.in",
      "utfs.io",
      "instagram.fdel45-1.fna.fbcdn.net",
      "yt3.googleusercontent.com",
    ],
  },
};

module.exports = nextConfig;
