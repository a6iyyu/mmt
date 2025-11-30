import { withSentryConfig } from "@sentry/nextjs";
import type { NextConfig } from "next";
import createMDX from "@next/mdx";

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
};

const withMDX = createMDX({
  extension: /\.(md|mdx)$/,
});

export default withSentryConfig(withMDX(nextConfig), {
  org: "a6iyyu",
  project: "mmt",
  silent: !process.env.CI,
  widenClientFileUpload: true,
  disableLogger: true,
  automaticVercelMonitors: true,
});