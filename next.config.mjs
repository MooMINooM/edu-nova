/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com', // <-- อนุญาต Hostname นี้
      },
      {
        protocol: 'https',
        hostname: 'drive.google.com', // <-- อนุญาตเผื่อไว้ด้วย
      }
    ],
  },
};

export default nextConfig;