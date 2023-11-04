/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['storage.googleapis.com',"t4.ftcdn.net",'www.influencer.in'],
  }
}

module.exports = nextConfig;
