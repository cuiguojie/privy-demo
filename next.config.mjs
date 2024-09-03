/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  experimental: {
    missingSuspenseWithCSRBailout: false
  },
  sassOptions: {},
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
