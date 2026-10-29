const basePath = process.env.PAGES_BASE_PATH ?? '';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath,
  assetPrefix: basePath,
  // Static export has no image optimization server.
  images: { unoptimized: true },
  // Exposed so plain string paths (icons, manifest) can be basePath-prefixed.
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
};

export default nextConfig;
