/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Remove output: 'export' for Vercel deployment
  images: {
    domains: ['images.unsplash.com', 'source.unsplash.com'],
  },
  // Enable React DevTools in development
  experimental: {
    reactRefresh: true,
  },
  // Optional: Add if you're using styled-components or similar
  compiler: {
    styledComponents: true,
  },
  // Add custom headers
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
