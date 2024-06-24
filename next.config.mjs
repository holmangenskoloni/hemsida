/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/hemsida",
  output: "export",
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
