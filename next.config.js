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
      {
        protocol: "https",
        hostname: "lp.idiomus.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
