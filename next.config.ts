import type { NextConfig } from "next";

const basePathFromEnv = (process.env.NEXT_PUBLIC_BASE_PATH ?? "").trim();
const basePath =
  !basePathFromEnv || basePathFromEnv === "/"
    ? ""
    : `/${basePathFromEnv.replace(/^\/+|\/+$/g, "")}`;

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath,
  assetPrefix: basePath ? `${basePath}/` : undefined,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
