/** @type {import('next').NextConfig} */
const path = require("path")
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["res.cloudinary.com", "lh3.googleusercontent.com"],
  },
  compiler: {
    styledComponents: true,
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
}

module.exports = nextConfig
