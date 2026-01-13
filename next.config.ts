// /** @type {import('next').NextConfig} */
const nextConfig = {
  // images: {
  //   domains: ["res.cloudinary.com", "heroui.com"],
  // },
  remotePatterns: [
    {
      protocol: "https",
      hostname: "res.cloudinary.com",
      port: "",
      // This allows all images from this host
    },
    {
      protocol: "https",
      hostname: "heroui.com",
      port: "",
      pathname: "/**",
    },
  ],
};

export default nextConfig;
