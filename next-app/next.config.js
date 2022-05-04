/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "upload.wikimedia.org",
      "images-na.ssl-images-amazon.com",
      "m.media-amazon.com",
      "ia.media-imdb.com",
      "cinerama.qodeinteractive.com",
    ],
  },
};

module.exports = nextConfig;
