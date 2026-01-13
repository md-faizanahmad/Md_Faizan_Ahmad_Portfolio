// /** @type {import('next').NextConfig} */
const nextConfig = {
  // images: {
  //   domains: ["res.cloudinary.com", "heroui.com"],
  // },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "/**", // This allows all images from this host
      },
      {
        protocol: "https",
        hostname: "heroui.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
