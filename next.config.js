/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'gustolaw.ca',
        pathname: '/wp-content/uploads/**',
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
      // Old WordPress article URLs → New blog structure
      {
        source: '/intro-to-canadian-privacy-law-an-essential-guide-for-alberta-businesses',
        destination: '/blog/canadian-privacy-law-guide',
        permanent: true,
      },
      {
        source: '/intro-to-canadian-privacy-law-an-essential-guide-for-alberta-businesses/',
        destination: '/blog/canadian-privacy-law-guide',
        permanent: true,
      },
      {
        source: '/intellectual-property-basics-every-canadian-business-owner-should-know',
        destination: '/blog/intellectual-property-basics-canadian-business',
        permanent: true,
      },
      {
        source: '/intellectual-property-basics-every-canadian-business-owner-should-know/',
        destination: '/blog/intellectual-property-basics-canadian-business',
        permanent: true,
      },
      {
        source: '/business-law-basics-why-your-lawyer-recommends-a-holding-company-and-separate-share-classes',
        destination: '/blog/holding-company-share-classes-canada',
        permanent: true,
      },
      {
        source: '/business-law-basics-why-your-lawyer-recommends-a-holding-company-and-separate-share-classes/',
        destination: '/blog/holding-company-share-classes-canada',
        permanent: true,
      },
      {
        source: '/how-to-negotiate-oil-gas-leases',
        destination: '/blog/negotiate-oil-gas-leases',
        permanent: true,
      },
      {
        source: '/how-to-negotiate-oil-gas-leases/',
        destination: '/blog/negotiate-oil-gas-leases',
        permanent: true,
      },
      {
        source: '/understanding-software-licensing-agreements-a-legal-guide-for-canadian-businesses',
        destination: '/blog/software-licensing-agreements-guide',
        permanent: true,
      },
      {
        source: '/understanding-software-licensing-agreements-a-legal-guide-for-canadian-businesses/',
        destination: '/blog/software-licensing-agreements-guide',
        permanent: true,
      },
      {
        source: '/reseller-and-distributor-software-licensing-what-software-companies-need-to-know',
        destination: '/blog/reseller-distributor-software-licensing',
        permanent: true,
      },
      {
        source: '/reseller-and-distributor-software-licensing-what-software-companies-need-to-know/',
        destination: '/blog/reseller-distributor-software-licensing',
        permanent: true,
      },
      {
        source: '/outsourcing-vs-in-house-legal-counsel-whats-best-for-your-oil-gas-business',
        destination: '/blog/outsourcing-vs-inhouse-legal-counsel-oil-gas',
        permanent: true,
      },
      {
        source: '/outsourcing-vs-in-house-legal-counsel-whats-best-for-your-oil-gas-business/',
        destination: '/blog/outsourcing-vs-inhouse-legal-counsel-oil-gas',
        permanent: true,
      },
      {
        source: '/7-must-have-elements-in-your-saas-agreement-for-canadian-businesses',
        destination: '/blog/saas-agreement-must-have-elements',
        permanent: true,
      },
      {
        source: '/7-must-have-elements-in-your-saas-agreement-for-canadian-businesses/',
        destination: '/blog/saas-agreement-must-have-elements',
        permanent: true,
      },
      {
        source: '/saas-agreements-a-framework-for-success',
        destination: '/blog/saas-agreements-framework-success',
        permanent: true,
      },
      {
        source: '/saas-agreements-a-framework-for-success/',
        destination: '/blog/saas-agreements-framework-success',
        permanent: true,
      },
      // Old articles listing page
      {
        source: '/articles',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/articles/',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/articles/page/:page',
        destination: '/blog',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
