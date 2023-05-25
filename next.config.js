/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["image.tmdb.org", "www.themoviedb.org", "cdn.myanimelist.net"],
  },
  output: "export",
};

module.exports = nextConfig;
