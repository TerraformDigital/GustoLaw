/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  async redirects() {
    return [
      // Old WordPress URLs → New structure
      {
        source: '/calgary-business-formation-lawyer',
        destination: '/services/business-formation',
        permanent: true,
      },
      {
        source: '/calgary-business-formation-lawyer/',
        destination: '/services/business-formation',
        permanent: true,
      },
      {
        source: '/calgary-mergers-acquisitions-lawyer',
        destination: '/services/mergers-acquisitions',
        permanent: true,
      },
      {
        source: '/calgary-mergers-acquisitions-lawyer/',
        destination: '/services/mergers-acquisitions',
        permanent: true,
      },
      {
        source: '/calgary-corporate-commercial-lawyer',
        destination: '/services/corporate-commercial',
        permanent: true,
      },
      {
        source: '/calgary-corporate-commercial-lawyer/',
        destination: '/services/corporate-commercial',
        permanent: true,
      },
      {
        source: '/calgary-dispute-resolution-lawyer',
        destination: '/services/dispute-resolution',
        permanent: true,
      },
      {
        source: '/calgary-dispute-resolution-lawyer/',
        destination: '/services/dispute-resolution',
        permanent: true,
      },
      {
        source: '/calgary-joint-ventures-lawyer',
        destination: '/services/joint-ventures',
        permanent: true,
      },
      {
        source: '/calgary-joint-ventures-lawyer/',
        destination: '/services/joint-ventures',
        permanent: true,
      },
      {
        source: '/fractional-general-counsel',
        destination: '/services/fractional-general-counsel',
        permanent: true,
      },
      {
        source: '/fractional-general-counsel/',
        destination: '/services/fractional-general-counsel',
        permanent: true,
      },
      {
        source: '/about-us',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/about-us/',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/our-team',
        destination: '/team',
        permanent: true,
      },
      {
        source: '/our-team/',
        destination: '/team',
        permanent: true,
      },
      {
        source: '/contact-us',
        destination: '/contact',
        permanent: true,
      },
      {
        source: '/contact-us/',
        destination: '/contact',
        permanent: true,
      },
      // Industry redirects
      {
        source: '/industries/technology-software',
        destination: '/industries/technology',
        permanent: true,
      },
      {
        source: '/industries/energy-resources',
        destination: '/industries/oil-gas',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
