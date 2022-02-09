/** @type {import('next').NextConfig} */

const API_ENDPOINT = "https://api.themoviedb.org/3";
const { API_KEY } = process.env;

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["image.tmdb.org"],
  },
  async redirects() {
    return [
      {
        source: "/contact",
        destination: "https://nomadcoders.co",
        permanent: false,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: "/api/movies/popular",
        destination: `${API_ENDPOINT}/movie/popular?api_key=${API_KEY}`,
      },
      {
        source: "/api/movies/:id",
        destination: `${API_ENDPOINT}/movie/:id?api_key=${API_KEY}`,
      },
    ];
  },
};

module.exports = nextConfig;
