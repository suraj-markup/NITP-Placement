/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['www.google.com', 'www.pngimg.com','www.apple.com','www.tinyurl.com','www.facebook.com','www.mu-sigma.com','www.cloud.appwrite.io'],
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'cloud.appwrite.io',
            pathname: '**',
          },
        ], // Add allowed image domains here
      },
};

export default nextConfig;
