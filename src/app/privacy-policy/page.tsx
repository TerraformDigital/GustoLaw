import Link from 'next/link'

export const metadata = {
  title: 'Privacy Policy',
  description: 'Privacy policy for Gusto Law. Learn how we collect, use, and protect your personal information in accordance with Canadian privacy law.',
  openGraph: {
    title: 'Privacy Policy',
    description: 'Privacy policy for Gusto Law. Learn how we collect, use, and protect your personal information in accordance with Canadian privacy law.',
    url: 'https://gustolaw.ca/privacy-policy',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image' as const,
    title: 'Privacy Policy',
    description: 'Privacy policy for Gusto Law. Learn how we collect, use, and protect your personal information in accordance with Canadian privacy law.',
  },
  alternates: {
    canonical: 'https://gustolaw.ca/privacy-policy',
  },
}

export default function PrivacyPolicyPage() {
  return (
    <>
      {/* Hero */}
      <header className="bg-gray-50 pt-32 pb-16 md:pb-24">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Privacy Policy</h1>
          <p className="text-lg text-gray-600">
            Last updated: February 2026
          </p>
        </div>
      </header>

      {/* Content */}
      <section className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-6">
          <div className="prose prose-lg text-gray-600 max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Our Commitment to Privacy</h2>
            <p>
              Gusto Law (Augustine Lu Professional Corporation) is committed to protecting your privacy and ensuring you understand how we collect, use, and safeguard your personal information. This Privacy Policy explains our practices in accordance with applicable Canadian privacy legislation, including the Personal Information Protection and Electronic Documents Act (PIPEDA).
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Information We Collect</h2>
            <p>
              When you contact Gusto Law or interact with our website, we may collect the following types of personal information:
            </p>
            <ul>
              <li><strong>Contact Information:</strong> Name, email address, phone number, and mailing address when you submit a contact form or request legal services.</li>
              <li><strong>Business Information:</strong> Information about your company, industry, and legal needs when you inquire about our services.</li>
              <li><strong>Technical Information:</strong> Information about your website usage, including IP address, browser type, pages visited, and time spent on our site (collected through analytics).</li>
              <li><strong>Communication Records:</strong> Records of correspondence between you and our firm regarding legal services or inquiries.</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">How We Use Your Information</h2>
            <p>
              We use the personal information we collect for the following purposes:
            </p>
            <ul>
              <li><strong>Responding to Inquiries:</strong> To respond to your questions, provide information about our services, and address your concerns.</li>
              <li><strong>Providing Legal Services:</strong> To deliver legal counsel, manage client relationships, and fulfill our obligations under engagement agreements.</li>
              <li><strong>Website Improvement:</strong> To analyze how our website is used, identify trends, and improve the user experience and functionality of our site.</li>
              <li><strong>Communications:</strong> To send you updates, newsletters, or information about our services (only with your consent where required by law).</li>
              <li><strong>Legal Compliance:</strong> To comply with legal obligations, professional regulations, and law society requirements.</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Cookies and Analytics</h2>
            <p>
              Our website uses Google Analytics to help us understand how visitors use our site. Google Analytics collects information such as your IP address, browser type, operating system, referring website, and pages visited. This information is used to generate reports about website usage and trends.
            </p>
            <p>
              Our website may also use cookies—small data files stored on your device—to enhance your browsing experience. You can control cookie settings through your browser preferences. Most browsers allow you to refuse cookies or alert you when a cookie is being sent.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Third-Party Services</h2>
            <p>
              We use the following third-party services to deliver our website and services:
            </p>
            <ul>
              <li><strong>Clio Grow:</strong> We use Clio Grow to manage contact forms and client intake. Information submitted through forms is processed according to Clio Grow's privacy practices.</li>
              <li><strong>Elfsight:</strong> We use Elfsight to display client reviews and testimonials on our website. This service may collect limited information about your interactions with review content.</li>
              <li><strong>Google Analytics:</strong> As noted above, Google Analytics collects website usage data.</li>
            </ul>
            <p>
              We encourage you to review the privacy policies of these third-party services to understand how they handle your information.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Data Security</h2>
            <p>
              Gusto Law takes data security seriously and implements reasonable technical and organizational safeguards to protect your personal information against unauthorized access, alteration, or disclosure. These measures include encryption, secure data storage, and restricted access controls.
            </p>
            <p>
              However, no security system is impenetrable. While we strive to protect your information, we cannot guarantee absolute security. You are responsible for maintaining the confidentiality of any passwords or credentials used to access your account or communications with our firm.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Your Rights Under PIPEDA</h2>
            <p>
              Under the Personal Information Protection and Electronic Documents Act (PIPEDA), you have the following rights:
            </p>
            <ul>
              <li><strong>Right to Access:</strong> You have the right to request access to your personal information held by Gusto Law.</li>
              <li><strong>Right to Correction:</strong> You may request that we correct any inaccurate or incomplete personal information.</li>
              <li><strong>Right to Withdraw Consent:</strong> You may withdraw consent for the collection and use of your personal information (though this may affect our ability to provide services).</li>
              <li><strong>Right to Complaint:</strong> If you believe your privacy rights have been violated, you may file a complaint with the Office of the Privacy Commissioner of Canada.</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Contact for Privacy Inquiries</h2>
            <p>
              If you have questions about this Privacy Policy, wish to access or correct your personal information, or have concerns about how we handle your data, please contact us:
            </p>
            <ul>
              <li><strong>Email:</strong> <a href="mailto:inquiries@gustolaw.ca" className="text-teal-700 hover:text-teal-800">inquiries@gustolaw.ca</a></li>
              <li><strong>Phone:</strong> <a href="tel:+14039888382" className="text-teal-700 hover:text-teal-800">(403) 988-8382</a></li>
              <li><strong>Mailing Address:</strong> Suite 206, 110 11 Avenue SW, Calgary, AB T2R 0B8</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Updates to This Policy</h2>
            <p>
              Gusto Law may update this Privacy Policy periodically to reflect changes in our practices, technology, legal requirements, or other factors. We will notify you of any material changes by posting the updated policy on our website and updating the "Last updated" date at the top of this page.
            </p>
            <p>
              Your continued use of our website and services following the posting of an updated Privacy Policy constitutes your acceptance of the revised policy. We encourage you to review this Privacy Policy regularly to stay informed about how we protect your information.
            </p>
          </div>
        </div>
      </section>

      {/* Back to Home */}
      <section className="py-12 border-t border-gray-200">
        <div className="max-w-3xl mx-auto px-6">
          <Link
            href="/"
            className="text-teal-700 font-medium hover:text-teal-800 transition-colors"
          >
            ← Back to Home
          </Link>
        </div>
      </section>
    </>
  )
}
