/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "herisonpereira.com.br",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
