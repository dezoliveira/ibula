/** @type {import('next').NextConfig} */
const nextConfig = { pdf: { remotePatterns: [ { protocol: "http", hostname: "localhost", }, ], }, }; 

export default nextConfig;
