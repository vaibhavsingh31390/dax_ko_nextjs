/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.annihil.us",
      },
      {
        protocol: "http",
        hostname: "i.annihil.us",
      },
    ],
  },
};

export default nextConfig;
