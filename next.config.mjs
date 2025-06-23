/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com', // ✅ Add this line
      },
    ],
  },
};

export default nextConfig;

