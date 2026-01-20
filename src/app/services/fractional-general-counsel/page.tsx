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
          <Link href="/"><Image src="/images/gusto-law-logo.png" alt="Gusto Law" width={180} height={40} className="h-10 w-auto" /></Link>
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/services" className="text-gray-700 hover:text-teal-700 font-medium">Services</Link>
            <Link href="/team" className="text-gray-600 hover:text-teal-700">Team</Link>
            <Link href="/about" className="text-gray-600 hover:text-teal-700">About</Link>
            <Link href="/blog" className="text-gray-600 hover:text-teal-700">Insights</Link>
            <Link href="/contact" className="bg-teal-700 text-white px-5 py-2 rounded hover:bg-teal-800">Contact</Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-teal-900 text-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-teal-400 font-medium mb-4">Services</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">Fractional General Counsel</h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Executive-level legal leadership for growing businesses—without the full-time cost. Get strategic counsel, proactive risk management, and a trusted advisor who understands your business inside and out.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="inline-block bg-white text-gray-900 px-8 py-4 rounded font-semibold hover:bg-gray-100 text-center">Schedule a Consultation</Link>
              <a href="tel:4039888382" className="inline-block border border-white/30 text-white px-8 py-4 rounded font-semibold hover:bg-white/10 text-center">(403) 988-8382</a>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">You've Outgrown Ad-Hoc Legal Support, But You're Not Ready for a Full-Time GC</h2>
            <p className="text-lg text-gray-600 leading-relaxed">Your business has reached a stage where legal issues arise regularly—contracts need review, compliance questions come up, and strategic decisions have legal implications. You need someone who understands your business, not just a lawyer you call when something goes wrong.</p>
          </div>
          <div className="mt-8 bg-teal-50 border border-teal-200 rounded-xl p-8 max-w-3xl mx-auto">
            <p className="text-center text-lg text-teal-900"><strong>The math is clear:</strong> A full-time general counsel costs $200,000-$350,000+ in salary and benefits. Most businesses with $2M-$50M in revenue don't need that—but they do need consistent, strategic legal leadership.</p>
          </div>
        </div>
      </section>

      {/* Services Checklist */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Fractional GC Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">All the benefits of in-house counsel, structured to fit your actual needs</p>
          </div>

          {/* Strategic Advisory */}
          <div className="mb-12">
            <h3 className="text-xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">Strategic Legal Advisory</h3>
            <div className="grid md:grid-cols-3 gap-x-8 gap-y-3">
              {['Ongoing Strategic Legal Advisory (Retainer)', 'Monthly Legal Check-Ins & Planning', 'Legal Risk Assessment & Mitigation', 'Board Package Review & Advisory', 'Legal Budget Planning & Management', 'In-House Legal Team Mentoring'].map((item) => (
                <div key={item} className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  <span className="text-gray-700 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Contract Management */}
          <div className="mb-12">
            <h3 className="text-xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">Contract Portfolio Management</h3>
            <div className="grid md:grid-cols-3 gap-x-8 gap-y-3">
              {['Contract Portfolio Management', 'Contract Template Library Development', 'Contract Review Workflow Systems', 'Vendor & Supplier Relationship Management', 'Customer Agreement Oversight', 'Contract Renewal & Termination Strategy'].map((item) => (
                <div key={item} className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  <span className="text-gray-700 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Compliance & Operations */}
          <div className="mb-12">
            <h3 className="text-xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">Compliance & Operations</h3>
            <div className="grid md:grid-cols-3 gap-x-8 gap-y-3">
              {['Regulatory Compliance Monitoring', 'Privacy Policy Development', 'Data Breach Response Planning', 'Corporate Compliance Audits', 'AML & KYC Procedures', 'Beneficial Ownership Disclosure', 'Export Control Compliance', 'Professional Licensing Advisory', 'Legal Operations Consulting'].map((item) => (
                <div key={item} className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  <span className="text-gray-700 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Employment & HR */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">Employment & HR Support</h3>
            <div className="grid md:grid-cols-3 gap-x-8 gap-y-3">
              {['Employment Agreements (Executive/Standard)', 'Independent Contractor Agreements', 'Non-Compete & Non-Solicitation', 'Employee Handbook Development', 'Termination & Severance Matters', 'Workplace Policy Development', 'Workplace Investigations Support', 'Equity Compensation Plans'].map((item) => (
                <div key={item} className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  <span className="text-gray-700 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Is Fractional GC Right for Your Business?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-teal-50 rounded-lg p-6">
              <p className="font-semibold text-gray-900 mb-2">Revenue of $2M - $50M</p>
              <p className="text-sm text-gray-600">Large enough to need consistent legal support, not so large you need full-time staff</p>
            </div>
            <div className="bg-teal-50 rounded-lg p-6">
              <p className="font-semibold text-gray-900 mb-2">10-100+ Employees</p>
              <p className="text-sm text-gray-600">Employment law and HR policies require ongoing attention</p>
            </div>
            <div className="bg-teal-50 rounded-lg p-6">
              <p className="font-semibold text-gray-900 mb-2">Growth Mode or Exit Planning</p>
              <p className="text-sm text-gray-600">Expansion or eventual sale requires strategic legal planning</p>
            </div>
            <div className="bg-teal-50 rounded-lg p-6">
              <p className="font-semibold text-gray-900 mb-2">Regulated or Complex Operations</p>
              <p className="text-sm text-gray-600">Compliance requirements that need consistent monitoring</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Frequently Asked Questions</h2>
          <div className="space-y-8">
            <div className="border-b border-gray-200 pb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">How is fractional GC different from just hiring a law firm?</h3>
              <p className="text-gray-600 leading-relaxed">Traditional law firms work on specific matters—you call when something comes up. A fractional GC is an ongoing relationship where we're proactively involved in your business. We learn your operations, anticipate issues before they arise, and provide strategic input on business decisions—not just legal problems.</p>
            </div>
            <div className="border-b border-gray-200 pb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">How much does fractional general counsel cost?</h3>
              <p className="text-gray-600 leading-relaxed">Engagements typically range from $3,000 to $15,000 per month depending on scope and time commitment. Compare that to a full-time GC salary of $200,000-$350,000+ plus benefits. We'll discuss your needs and propose an arrangement that makes sense.</p>
            </div>
            <div className="border-b border-gray-200 pb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">What if I need specialized legal help outside your expertise?</h3>
              <p className="text-gray-600 leading-relaxed">Part of our role is coordinating specialists when needed—IP litigation, tax planning, immigration, etc. We maintain relationships with trusted specialists and manage those engagements on your behalf, ensuring quality work and cost control.</p>
            </div>
            <div className="border-b border-gray-200 pb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">How quickly can you respond when something urgent comes up?</h3>
              <p className="text-gray-600 leading-relaxed">For retainer clients, we commit to same-day response for urgent matters during business hours. Part of our job is to help you build systems that reduce genuine emergencies.</p>
            </div>
            <div className="pb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Can we start with a smaller engagement to see if it's a good fit?</h3>
              <p className="text-gray-600 leading-relaxed">Absolutely. Many clients start with a legal audit or specific project before committing to an ongoing retainer. This lets both sides evaluate the working relationship.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-teal-800 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready for Strategic Legal Support?</h2>
          <p className="text-xl text-teal-100 mb-8">Let's discuss how fractional GC services can support your business goals.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-block bg-white text-teal-800 px-8 py-4 rounded font-semibold hover:bg-gray-100">Schedule a Consultation</Link>
            <a href="tel:4039888382" className="inline-block border border-white/30 text-white px-8 py-4 rounded font-semibold hover:bg-white/10">Call (403) 988-8382</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div><h4 className="font-semibold text-lg mb-4">Gusto Law</h4><p className="text-gray-400 text-sm">Corporate counsel for established Alberta businesses.</p></div>
            <div><h4 className="font-semibold mb-4">Services</h4><ul className="space-y-2 text-sm"><li><Link href="/services/mergers-acquisitions" className="text-gray-400 hover:text-white">Mergers & Acquisitions</Link></li><li><Link href="/services/fractional-general-counsel" className="text-gray-400 hover:text-white">Fractional General Counsel</Link></li><li><Link href="/services/business-formation" className="text-gray-400 hover:text-white">Business Formation</Link></li><li><Link href="/services/corporate-commercial" className="text-gray-400 hover:text-white">Corporate & Commercial</Link></li></ul></div>
            <div><h4 className="font-semibold mb-4">Firm</h4><ul className="space-y-2 text-sm"><li><Link href="/about" className="text-gray-400 hover:text-white">About</Link></li><li><Link href="/team" className="text-gray-400 hover:text-white">Our Team</Link></li><li><Link href="/blog" className="text-gray-400 hover:text-white">Insights</Link></li><li><Link href="/contact" className="text-gray-400 hover:text-white">Contact</Link></li></ul></div>
            <div><h4 className="font-semibold mb-4">Contact</h4><ul className="space-y-2 text-sm text-gray-400"><li>Suite 206, 110 11 Avenue SW</li><li>Calgary, AB T2R 0B8</li><li><a href="tel:4039888382" className="hover:text-white">(403) 988-8382</a></li><li><a href="mailto:inquiries@gustolaw.ca" className="hover:text-white">inquiries@gustolaw.ca</a></li></ul></div>
          </div>
          <div className="border-t border-gray-800 pt-8">
            <p className="text-gray-400 text-sm">© 2026 Augustine Lu Professional Corporation. All rights reserved.</p>
            <p className="text-gray-500 text-xs mt-4">This content is for informational purposes only and does not constitute legal advice.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
