/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.microlink.io", // Microlink Image Preview
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com", // Unsplash
      },
      {
        protocol: "https",
        hostname: "assets.aceternity.com", // Aceternity
      },       
    ],
  },
};

export default nextConfig;
