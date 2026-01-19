import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'Fractional General Counsel Calgary | Outsourced GC Services | Gusto Law',
  description: 'Executive-level legal leadership for growing Alberta businesses without the full-time cost. Strategic counsel, contract oversight, and corporate governance from experienced Calgary business lawyers.',
  keywords: 'fractional general counsel Calgary, outsourced general counsel Alberta, part-time GC, virtual general counsel, business lawyer Calgary, corporate counsel services',
}

export default function FractionalGCPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/">
            <Image 
              src="/images/gusto-law-logo.png" 
              alt="Gusto Law" 
              width={180} 
              height={40}
              className="h-10 w-auto"
            />
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/services" className="text-gray-700 hover:text-teal-700 font-medium">Services</Link>
            <Link href="/team" className="text-gray-600 hover:text-teal-700">Team</Link>
            <Link href="/about" className="text-gray-600 hover:text-teal-700">About</Link>
            <Link href="/blog" className="text-gray-600 hover:text-teal-700">Insights</Link>
            <Link href="/contact" className="bg-teal-700 text-white px-5 py-2 rounded hover:bg-teal-800">Contact</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-teal-900 text-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-teal-400 font-medium mb-4">Services</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Fractional General Counsel
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Executive-level legal leadership for growing businesses—without the full-time cost. 
              Get strategic counsel, proactive risk management, and a trusted advisor who understands 
              your business inside and out.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/contact" 
                className="inline-block bg-white text-gray-900 px-8 py-4 rounded font-semibold hover:bg-gray-100 text-center"
              >
                Schedule a Consultation
              </Link>
              <a 
                href="tel:4039888382" 
                className="inline-block border border-white/30 text-white px-8 py-4 rounded font-semibold hover:bg-white/10 text-center"
              >
                (403) 988-8382
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              You've Outgrown Ad-Hoc Legal Support, But You're Not Ready for a Full-Time GC
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Your business has reached a stage where legal issues arise regularly—contracts need review, 
              compliance questions come up, and strategic decisions have legal implications. You need 
              someone who understands your business, not just a lawyer you call when something goes wrong.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="text-center p-6">
              <div className="w-14 h-14 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Reactive Legal Spend</h3>
              <p className="text-gray-600 text-sm">Paying premium hourly rates every time an issue arises, with no one tracking the bigger picture</p>
            </div>
            <div className="text-center p-6">
              <div className="w-14 h-14 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Gaps in Coverage</h3>
              <p className="text-gray-600 text-sm">Legal risks that fall through the cracks because no one is consistently monitoring your operations</p>
            </div>
            <div className="text-center p-6">
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">No Strategic Partner</h3>
              <p className="text-gray-600 text-sm">Making business decisions without legal insight until it's too late to structure them properly</p>
            </div>
          </div>

          <div className="mt-12 bg-teal-50 border border-teal-200 rounded-xl p-8 max-w-3xl mx-auto">
            <p className="text-center text-lg text-teal-900">
              <strong>The math is clear:</strong> A full-time general counsel costs $200,000-$350,000+ in salary and benefits. 
              Most businesses with $2M-$50M in revenue don't need that—but they do need consistent, strategic legal leadership.
            </p>
          </div>
        </div>
      </section>

      {/* What We Provide Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Fractional GC Service Includes</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              All the benefits of an in-house general counsel, structured to fit your actual needs and budget
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Strategic Counsel */}
            <div className="bg-white rounded-xl p-8 border border-gray-200">
              <div className="w-12 h-12 bg-teal-700 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Strategic Legal Counsel</h3>
              <p className="text-gray-600 mb-4">
                Advice on business decisions, growth strategy, risk management, and opportunities—not just legal problems.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-teal-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>M&A and investment guidance</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-teal-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Partnership and JV structuring</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-teal-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Expansion and market entry</span>
                </li>
              </ul>
            </div>

            {/* Contract Management */}
            <div className="bg-white rounded-xl p-8 border border-gray-200">
              <div className="w-12 h-12 bg-teal-700 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Contract Review & Negotiation</h3>
              <p className="text-gray-600 mb-4">
                Ongoing review of commercial agreements so nothing gets signed without proper legal oversight.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-teal-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Customer and vendor agreements</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-teal-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Employment contracts and policies</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-teal-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>NDAs and confidentiality agreements</span>
                </li>
              </ul>
            </div>

            {/* Board Support */}
            <div className="bg-white rounded-xl p-8 border border-gray-200">
              <div className="w-12 h-12 bg-teal-700 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Board & Management Support</h3>
              <p className="text-gray-600 mb-4">
                Attend board meetings, advise on governance matters, and ensure proper corporate formalities.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-teal-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Board meeting attendance</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-teal-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Corporate governance guidance</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-teal-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Shareholder relations</span>
                </li>
              </ul>
            </div>

            {/* Compliance */}
            <div className="bg-white rounded-xl p-8 border border-gray-200">
              <div className="w-12 h-12 bg-teal-700 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Compliance Oversight</h3>
              <p className="text-gray-600 mb-4">
                Proactive monitoring of regulatory requirements and development of internal policies.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-teal-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Regulatory compliance programs</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-teal-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Privacy and data protection</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-teal-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Policy development</span>
                </li>
              </ul>
            </div>

            {/* Outside Counsel */}
            <div className="bg-white rounded-xl p-8 border border-gray-200">
              <div className="w-12 h-12 bg-teal-700 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Outside Counsel Management</h3>
              <p className="text-gray-600 mb-4">
                When specialists are needed, we coordinate and oversee to ensure quality and cost control.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-teal-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Specialist referrals and coordination</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-teal-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Legal budget management</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-teal-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Work product review</span>
                </li>
              </ul>
            </div>

            {/* Risk Management */}
            <div className="bg-white rounded-xl p-8 border border-gray-200">
              <div className="w-12 h-12 bg-teal-700 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Risk Identification</h3>
              <p className="text-gray-600 mb-4">
                Proactive identification of legal and business risks before they become problems.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-teal-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Legal risk assessments</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-teal-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Insurance review</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-teal-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Dispute avoidance strategies</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Is Fractional GC Right for Your Business?
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our fractional general counsel service is designed for established businesses that have 
                grown beyond startup stage but aren't yet ready for (or don't need) a full-time legal hire.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-teal-50 rounded-lg">
                  <svg className="w-6 h-6 text-teal-700 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-gray-900">Revenue of $2M - $50M</p>
                    <p className="text-sm text-gray-600">Large enough to need consistent legal support, not so large you need full-time staff</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-teal-50 rounded-lg">
                  <svg className="w-6 h-6 text-teal-700 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-gray-900">10-100+ Employees</p>
                    <p className="text-sm text-gray-600">Employment law, HR policies, and management issues require ongoing attention</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-teal-50 rounded-lg">
                  <svg className="w-6 h-6 text-teal-700 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-gray-900">Growth Mode or Preparing for Exit</p>
                    <p className="text-sm text-gray-600">Expansion, acquisitions, or eventual sale require strategic legal planning</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-teal-50 rounded-lg">
                  <svg className="w-6 h-6 text-teal-700 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-gray-900">Regulated Industry or Complex Operations</p>
                    <p className="text-sm text-gray-600">Compliance requirements that need consistent monitoring and expertise</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-900 text-white rounded-xl p-8">
              <h3 className="text-xl font-bold mb-6">The Gusto Law Difference</h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-teal-600 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <p className="font-semibold mb-1">In-House Experience</p>
                    <p className="text-gray-400 text-sm">Our founder served as general counsel for PE-backed companies—we know what it means to be embedded in a business.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-teal-600 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Responsive & Available</p>
                    <p className="text-gray-400 text-sm">We're not a big firm with layers of associates. You work directly with experienced counsel who knows your business.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-teal-600 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Predictable Costs</p>
                    <p className="text-gray-400 text-sm">Monthly retainer options give you budget certainty while ensuring you have coverage when you need it.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 md:py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">How Our Fractional GC Engagements Work</h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Flexible arrangements designed around your business needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">1</div>
              <h3 className="text-xl font-semibold mb-3">Discovery Session</h3>
              <p className="text-gray-400">
                We start with a deep dive into your business—operations, contracts, risks, growth plans, and pain points. This helps us understand exactly what you need.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">2</div>
              <h3 className="text-xl font-semibold mb-3">Custom Engagement</h3>
              <p className="text-gray-400">
                We design a service package that fits—whether that's a monthly retainer for ongoing support, a defined hours arrangement, or project-based work.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">3</div>
              <h3 className="text-xl font-semibold mb-3">Embedded Support</h3>
              <p className="text-gray-400">
                We integrate with your team—joining calls, reviewing contracts, attending meetings as needed. You get a legal partner, not just a vendor.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Frequently Asked Questions
          </h2>

          <div className="space-y-8">
            <div className="border-b border-gray-200 pb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                How is fractional GC different from just hiring a law firm?
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Traditional law firms work on specific matters—you call them when something comes up, they bill for their time, and the engagement ends. A fractional GC is an ongoing relationship where we're proactively involved in your business. We learn your operations, anticipate issues before they arise, and provide strategic input on business decisions—not just legal problems. Think of it as having an in-house lawyer without the full-time salary.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                How much does fractional general counsel cost?
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Engagements typically range from $3,000 to $15,000 per month depending on the scope of services and time commitment required. Compare that to a full-time GC salary of $200,000-$350,000+ plus benefits, office space, and management overhead. We'll discuss your needs in our initial consultation and propose an arrangement that makes sense for your business.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                What if I need specialized legal help outside your expertise?
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Part of our role is coordinating specialists when needed—whether that's IP litigation, tax planning, immigration, or other areas. We maintain relationships with trusted specialists across practice areas and will manage those engagements on your behalf, ensuring quality work and cost control. You get the benefit of our network without having to find and vet specialists yourself.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                How quickly can you respond when something urgent comes up?
              </h3>
              <p className="text-gray-600 leading-relaxed">
                For retainer clients, we commit to same-day response for urgent matters during business hours. We understand that legal issues don't always wait for scheduled meetings. That said, part of our job is to help you build systems and processes that reduce the number of genuine emergencies.
              </p>
            </div>

            <div className="pb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Can we start with a smaller engagement to see if it's a good fit?
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Absolutely. Many clients start with a legal audit or a specific project before committing to an ongoing retainer. This lets both sides evaluate the working relationship. We're confident in the value we provide, so we're happy to earn your trust before asking for a long-term commitment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Related Services</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link 
              href="/services/mergers-acquisitions" 
              className="bg-white p-6 rounded-lg border border-gray-200 hover:border-teal-300 hover:shadow-md transition-all"
            >
              <h3 className="font-semibold text-gray-900 mb-2">Mergers & Acquisitions</h3>
              <p className="text-gray-600 text-sm">Buy-side and sell-side representation for business transactions.</p>
            </Link>
            <Link 
              href="/services/corporate-commercial" 
              className="bg-white p-6 rounded-lg border border-gray-200 hover:border-teal-300 hover:shadow-md transition-all"
            >
              <h3 className="font-semibold text-gray-900 mb-2">Corporate & Commercial</h3>
              <p className="text-gray-600 text-sm">Shareholder agreements, governance, and commercial contracts.</p>
            </Link>
            <Link 
              href="/services/business-formation" 
              className="bg-white p-6 rounded-lg border border-gray-200 hover:border-teal-300 hover:shadow-md transition-all"
            >
              <h3 className="font-semibold text-gray-900 mb-2">Business Formation</h3>
              <p className="text-gray-600 text-sm">Incorporation, corporate structuring, and initial setup.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-teal-800 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready for Strategic Legal Support?</h2>
          <p className="text-xl text-teal-100 mb-8">
            Let's discuss how fractional GC services can support your business goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="inline-block bg-white text-teal-800 px-8 py-4 rounded font-semibold hover:bg-gray-100"
            >
              Schedule a Consultation
            </Link>
            <a 
              href="tel:4039888382" 
              className="inline-block border border-white/30 text-white px-8 py-4 rounded font-semibold hover:bg-white/10"
            >
              Call (403) 988-8382
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <h4 className="font-semibold text-lg mb-4">Gusto Law</h4>
              <p className="text-gray-400 text-sm">
                Corporate counsel for established Alberta businesses.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/services/mergers-acquisitions" className="text-gray-400 hover:text-white">Mergers & Acquisitions</Link></li>
                <li><Link href="/services/fractional-general-counsel" className="text-gray-400 hover:text-white">Fractional General Counsel</Link></li>
                <li><Link href="/services/business-formation" className="text-gray-400 hover:text-white">Business Formation</Link></li>
                <li><Link href="/services/corporate-commercial" className="text-gray-400 hover:text-white">Corporate & Commercial</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Firm</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/about" className="text-gray-400 hover:text-white">About</Link></li>
                <li><Link href="/team" className="text-gray-400 hover:text-white">Our Team</Link></li>
                <li><Link href="/blog" className="text-gray-400 hover:text-white">Insights</Link></li>
                <li><Link href="/contact" className="text-gray-400 hover:text-white">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Suite 206, 110 11 Avenue SW</li>
                <li>Calgary, AB T2R 0B8</li>
                <li><a href="tel:4039888382" className="hover:text-white">(403) 988-8382</a></li>
                <li><a href="mailto:inquiries@gustolaw.ca" className="hover:text-white">inquiries@gustolaw.ca</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8">
            <p className="text-gray-400 text-sm">© 2026 Augustine Lu Professional Corporation. All rights reserved.</p>
            <p className="text-gray-500 text-xs mt-4">
              This content is for informational purposes only and does not constitute legal advice. 
              For legal guidance tailored to your situation, please consult a qualified lawyer.
            </p>
          </div>
        </div>
      </footer>
    </main>
  )
}
