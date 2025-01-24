/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'blackmotiv.myshopify.com',
            port: '', // Leave empty if no specific port is needed
            pathname: '/**', // Matches all paths
          },
          {
            protocol: 'https',
            hostname: 'cdn.shopify.com',
            port: '', // Leave empty if no specific port is needed
            pathname: '/**', // Matches all paths
          },
        ],
      },
};

export default nextConfig;
