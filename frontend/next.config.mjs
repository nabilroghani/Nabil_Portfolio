/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'nabilahmad.site',
          },
        ],
        destination: 'https://www.nabilahmad.site/:path*',
        permanent: true,
      },
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'nabil-tech.vercel.app',
          },
        ],
        destination: 'https://www.nabilahmad.site/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

