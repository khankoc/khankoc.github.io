/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'd3njjcbhbojbot.cloudfront.net',
      },
      {
        protocol: 'https',
        hostname: 'coursera-university-assets.s3.amazonaws.com',
      },
      {
        protocol: 'https',
        hostname: 'd1.awsstatic.com',
      },
      {
        protocol: 'https',
        hostname: 'learn.microsoft.com',
      },
      {
        protocol: 'https',
        hostname: 'api.accredible.com',
      },
      {
        protocol: 'https',
        hostname: 'reactnative.dev',
      },
      {
        protocol: 'https',
        hostname: 'nodejs.org',
      },
      {
        protocol: 'https',
        hostname: 'www.cncf.io',
      },
      {
        protocol: 'https',
        hostname: 'university.mongodb.com',
      },
      {
        protocol: 'https',
        hostname: 'www.docker.com',
      },
      {
        protocol: 'https',
        hostname: 'www.scrumalliance.org',
      },
      {
        protocol: 'https',
        hostname: 'cloud.google.com',
      },
      {
        protocol: 'https',
        hostname: 'www.jenkins.io',
      },
      {
        protocol: 'https',
        hostname: 'www.apollographql.com',
      },
      {
        protocol: 'https',
        hostname: 'www.eccouncil.org',
      },
      {
        protocol: 'https',
        hostname: 'www.accessibilityassociation.org',
      },
      {
        protocol: 'https',
        hostname: 'www.typescriptlang.org',
      },
      {
        protocol: 'https',
        hostname: 'vuejs.org',
      },
      {
        protocol: 'https',
        hostname: 'svelte.dev',
      },
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org',
      },
      {
        protocol: 'https',
        hostname: 'www.gstatic.com',
      },
      {
        protocol: 'https',
        hostname: 'www.webtures.com.tr',
      },
    ],
  },
  optimizeFonts: true,
}

module.exports = nextConfig 