/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export', // important to produce static export
    images: { unoptimized: true }, // static export doesn't support next/image optimization
};

module.exports = nextConfig;