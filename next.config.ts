import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Semua halaman di project ini statis (tidak ada fetch runtime / API route),
  // jadi Next akan otomatis mem-prerender semuanya jadi HTML saat build.
  reactStrictMode: true,
};

export default nextConfig;
