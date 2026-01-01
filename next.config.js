/**
 * @type {import('next').NextConfig}
 */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
    output: 'export',
    basePath: isProd ? '/PortFolio' : '',
    assetPrefix: isProd ? '/PortFolio/' : '',
    images: {
        unoptimized: true,
    },
}

module.exports = nextConfig