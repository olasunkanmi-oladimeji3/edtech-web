/** @type {import('next').NextConfig} */
interface WebpackConfig {
  module: {
    rules: Array<{
      test: RegExp;
      include: RegExp;
      type: string;
    }>;
  };
}

interface NextConfig {
  reactStrictMode: boolean;
  swcMinify: boolean;
  experimental: {
    appDir: boolean;
  };
  webpack: (config: WebpackConfig) => WebpackConfig;
}

const nextConfig: NextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true,
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.mjs$/,
      include: /node_modules/,
      type: "javascript/auto",
    });
    return config;
  },
};

module.exports = nextConfig

