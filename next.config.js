/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  async redirects() {
    return [
      // One canonical host: www serves the same pages, so send it to the bare domain.
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.psychiatristinsurat.in" }],
        destination: "https://psychiatristinsurat.in/:path*",
        permanent: true,
      },
      // Old template pages that may still be indexed or linked, plus common guesses.
      { source: "/about", destination: "/dr-jash-ajmera", permanent: true },
      { source: "/about-us", destination: "/dr-jash-ajmera", permanent: true },
      { source: "/contact", destination: "/clinics", permanent: true },
      { source: "/contact-us", destination: "/clinics", permanent: true },
      { source: "/services", destination: "/treatments", permanent: true },
      { source: "/blog", destination: "/blogs", permanent: true },
      { source: "/blog-details", destination: "/blogs", permanent: true },
      { source: "/blog-sidebar", destination: "/blogs", permanent: true },
    ];
  },
  images: {
    formats: ["image/avif", "image/webp"],
    domains: [
      "localhost",
      "fbcdn.net",
      "instagram.com",
      "scontent.cdninstagram.com",
      "scontent-iad3-1.cdninstagram.com",
      "psychiatristinsurat.in",
      "instagram.famd1-2.fna.fbcdn.net",
      "instagram.fcdn.net",
      "lh3.googleusercontent.com",
      "googleusercontent.com",
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
        hostname: "res.cloudinary.com",
      },
      {
        protocol: "https",
        hostname: "i.ytimg.com",
      },
      {
        protocol: "https",
        hostname: "yt3.ggpht.com",
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
