/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "apollo2.dl.playstation.net",
      },
    ],
  },
};

export default nextConfig;
