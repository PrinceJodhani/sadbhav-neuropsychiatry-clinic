/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "localhost",
      "fbcdn.net",
      "instagram.com",
      "scontent.cdninstagram.com",
      "scontent-iad3-1.cdninstagram.com",
      "psychiatristinsurat.in",
      "instagram.com",
      "instagram.famd1-2.fna.fbcdn.net",
      'instagram.fcdn.net',
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
      },
      {
        protocol: "http",
        hostname: "res.cloudinary.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "scontent*.cdninstagram.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "**.cdninstagram.com",
      },
      {
        protocol: "https",
        hostname: "**.fbcdn.net",
      },
      {
        protocol: "https",
        hostname: "instagram.famd1-2.fna.fbcdn.net",
      },
      {
        protocol: "https",
        hostname: "instagram.fcdn.net",
      },
    ],
  },
 
};

module.exports = nextConfig;