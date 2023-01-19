/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        formats: ['image/avif', 'image/webp'],
        domains: [],
    },
    reactStrictMode: false,
    swcMinify: true,
};

module.exports = nextConfig;
