import type { NextConfig } from 'next';
import bundleAnalyzer from '@next/bundle-analyzer';

const isAnalyzerEnabled = process.env.ANALYZE === 'true';

const withBundleAnalyzer = bundleAnalyzer({
  enabled: isAnalyzerEnabled,
});

const nextConfig: NextConfig = {};

export default withBundleAnalyzer(nextConfig);
