import { withSentryConfig } from "@sentry/nextjs";
import type { NextConfig } from "next";
import { Configuration as WebpackConfig } from "webpack";
import nextMDX from "@next/mdx";

const nextConfig: NextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
  webpack: (config: WebpackConfig) => {
    if (config.infrastructureLogging) config.infrastructureLogging.level = "error";
    return config;
  },
};

const withMDX = nextMDX({ extension: /\.(md|mdx)$/ });

export default withSentryConfig(withMDX(nextConfig), {
  org: "a6iyyu",
  project: "mmt",
  silent: !process.env.CI,
  widenClientFileUpload: true,
});