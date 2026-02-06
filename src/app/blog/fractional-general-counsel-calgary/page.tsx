import Link from 'next/link'

export const metadata = {
  title: 'Fractional General Counsel Calgary | Part-Time Legal Leadership',
  description: 'Discover how fractional general counsel services provide executive-level legal guidance for growing Alberta businesses. Cost-effective alternative to full-time in-house lawyers.',
  keywords: 'fractional general counsel Calgary, outsourced legal counsel Alberta, part-time general counsel, fractional GC services',
}

export default function FractionalGCPost() {
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'What Is a Fractional General Counsel—And Does Your Business Need One?',
    description: 'How fractional general counsel services help growing Alberta businesses get executive-level legal guidance.',
    author: {
      '@type': 'Organization',
      name: 'Gusto Law',
      url: 'https://gustolaw.ca',
    },
    datePublished: '2026-01-15',
    image: 'https://gustolaw.ca/og-fractional-gc.jpg',
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is the difference between a fractional general counsel and outside counsel?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A fractional general counsel acts as your internal legal advisor, attending meetings, understanding your business strategy, and providing ongoing guidance. Outside counsel is typically engaged for specific legal matters. A fractional GC fills the gap, providing continuity and strategic direction across all legal issues.',
        },
      },
      {
        '@type': 'Question',
        name: 'How much does fractional general counsel cost compared to a full-time GC?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A full-time in-house general counsel in Calgary typically costs $150,000-$250,000+ annually. Fractional GC arrangements range from $3,000-$8,000 monthly, depending on hours and complexity. This represents 30-50% of full-time costs while providing flexibility.',
        },
      },
      {
        '@type': 'Question',
        name: 'What industries benefit most from fractional general counsel?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Technology startups, professional services firms, real estate companies, and mid-market manufacturing businesses commonly use fractional GC services. Any growing business facing increasing legal complexity, regulatory requirements, or strategic decisions can benefit.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do I find the right fractional general counsel in Alberta?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Look for lawyers with in-house experience, understanding of Alberta regulations (including the Alberta Business Corporations Act), and experience in your industry. Evaluate their ability to coordinate specialists, manage legal timelines, and align with your business goals.',
        },
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <header className="bg-gradient-to-br from-gray-50 to-teal-50 pt-32 pb-16">
        <div className="max-w-3xl mx-auto px-6">
          <Link href="/blog" className="text-teal-700 hover:text-teal-800 mb-4 inline-block">← Back to Insights</Link>
          <p className="text-teal-700 font-medium mb-2">Business Strategy</p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Is a Fractional General Counsel—And Does Your Business Need One?</h1>
          <p className="text-gray-600 text-lg">Executive-level legal strategy without the executive-level salary. How growing Alberta businesses are getting sophisticated legal guidance on a flexible basis.</p>
          <p className="text-gray-500 mt-4">January 2026 · 12 min read</p>
        </div>
      </header>

      <article className="py-16">
        <div className="max-w-3xl mx-auto px-6 prose prose-lg text-gray-600">

          {/* Intro */}
          <p className="text-lg leading-relaxed mb-8">
            As your business grows, legal complexity grows with it. Contract negotiations intensify, regulatory obligations multiply, employment decisions become riskier, and strategic choices demand legal insight. Yet hiring a full-time General Counsel remains out of reach for most mid-market businesses. The solution increasingly adopted by Alberta companies? A fractional general counsel.
          </p>

          {/* Section 1: What Is a Fractional General Counsel? */}
          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">What Is a Fractional General Counsel?</h2>
          <p>
            A fractional general counsel is an experienced in-house lawyer who works on a part-time, flexible, or as-needed basis. Unlike outside counsel you hire for specific matters, a fractional GC becomes part of your leadership team—understanding your business, anticipating legal risks, and providing ongoing strategic guidance.
          </p>
          <p>
            Think of it as access to the same level of legal expertise and business acumen you'd get from a full-time General Counsel, but structured around your actual needs and budget. Whether you need 10 hours per month or 40 hours per week, the arrangement scales with your business.
          </p>
          <p>
            This model is particularly suited to Alberta businesses growing from startup to mid-market stage. You benefit from sophisticated legal leadership without the overhead of a permanent salary, benefits, and office infrastructure.
          </p>

          {/* Section 2: Traditional Law Firm vs. Fractional GC */}
          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Traditional Law Firm vs. Fractional General Counsel: What's the Difference?</h2>
          <p>
            Many growing businesses work with traditional law firms, bringing in external counsel for contracts, litigation, or regulatory issues. This works well for project-based work, but leaves a gap for ongoing legal strategy.
          </p>
          <p>
            <strong>Outside Counsel (Traditional Law Firm):</strong> You engage lawyers for specific matters—incorporation, contract review, employment disputes, real estate transactions. You pay per matter or by the hour. Expertise is deep but reactive. Once the matter closes, you lose continuity.
          </p>
          <p>
            <strong>In-House General Counsel (Full-Time):</strong> A permanent employee fully integrated into your business. They understand your strategy, attend key meetings, coordinate all legal matters, and build a legal framework aligned with your goals. Cost is high ($150,000-$250,000+ annually in Calgary), but you get complete continuity and strategic integration.
          </p>
          <p>
            <strong>Fractional General Counsel (The Middle Ground):</strong> You get the strategic integration and business understanding of in-house counsel, but without the full-time commitment. Your fractional GC coordinates outside specialists when needed, stays engaged between projects, and ensures no legal risk falls through the cracks.
          </p>
          <p>
            The fractional model also solves a common frustration: with outside counsel, you pay for learning your business every time you engage them. A fractional GC knows your business, your goals, your risk tolerance, and your competitive landscape. This context makes legal advice faster, cheaper, and more valuable.
          </p>

          {/* Section 3: Signs Your Business Needs Fractional GC */}
          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Signs Your Business Needs a Fractional General Counsel</h2>
          <p>
            Not every business needs fractional GC services at every stage. But specific indicators suggest it's time:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li><strong>You're spending significant time coordinating lawyers.</strong> You manage the conversation between your business and outside counsel, translating business needs into legal questions and legal advice back into business decisions.</li>
            <li><strong>Legal issues are slowing decisions.</strong> Every strategic move—hiring, expansion, new product launch, partnership—gets stuck waiting for legal input or approval.</li>
            <li><strong>You're facing increasing regulatory complexity.</strong> Whether it's employment law, data privacy, environmental compliance, or industry-specific regulations, the legal landscape is becoming harder to navigate.</li>
            <li><strong>Contract volumes are growing.</strong> You're managing supplier agreements, customer contracts, employee contracts, and lease agreements without clear legal governance.</li>
            <li><strong>You've had legal surprises.</strong> A contract issue emerged, an employee dispute arose, or a regulatory gap was discovered—events that proactive legal counsel would have anticipated.</li>
            <li><strong>You need someone at the strategy table.</strong> Legal decisions intersect with your business strategy. Fundraising, M&A, organizational structure, and market expansion all have legal dimensions.</li>
            <li><strong>Your outside legal bills are growing.</strong> If you're spending $3,000-$5,000+ monthly on outside counsel, fractional GC services might be more cost-effective.</li>
          </ul>

          {/* Section 4: What a Fractional GC Actually Does Day-to-Day */}
          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">What Does a Fractional General Counsel Actually Do?</h2>
          <p>
            The role varies depending on your business, but here's what fractional GC services typically include:
          </p>
          <p>
            <strong>Contract Management:</strong> Fractional GCs review, draft, and negotiate contracts—customer agreements, vendor contracts, employment agreements, partnership deals. They catch risks, clarify terms, and ensure consistency across your business. For Alberta businesses, this includes ensuring compliance with the Alberta Business Corporations Act and relevant provincial regulations.
          </p>
          <p>
            <strong>Legal Strategy & Risk Management:</strong> Your fractional GC identifies legal risks across your business, recommends preventive measures, and helps prioritize where legal resources matter most. This might include employment practices, intellectual property protection, regulatory compliance, or liability management.
          </p>
          <p>
            <strong>Coordination of Specialists:</strong> When specialized counsel is needed—litigation, tax, real estate, technology law—your fractional GC identifies the right lawyers, briefs them on your business context, manages the engagement, and synthesizes advice into action. This saves time and money versus starting from scratch with outside counsel.
          </p>
          <p>
            <strong>Governance & Compliance:</strong> Setting up corporate governance structures, managing board minutes and resolutions, ensuring compliance with Alberta regulations, and maintaining corporate records. For growing businesses, fractional GCs often help implement governance discipline before it becomes urgent.
          </p>
          <p>
            <strong>Legal Planning for Major Moves:</strong> Whether you're raising capital, acquiring another business, launching a new product line, or entering a new market, your fractional GC helps anticipate and plan for legal issues. This is proactive legal leadership that prevents costly mistakes.
          </p>
          <p>
            <strong>Ad-Hoc Legal Advice:</strong> Being available when legal questions arise—from employment issues to customer disputes to operational questions. Your fractional GC can often resolve issues quickly instead of requiring a formal outside counsel engagement.
          </p>

          {/* Section 5: Industries That Benefit Most */}
          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Which Industries Benefit Most from Fractional General Counsel?</h2>
          <p>
            Fractional GC services work across industries, but some benefit particularly:
          </p>
          <p>
            <strong>Technology & SaaS:</strong> Tech companies face rapid growth, complex contracts with customers and vendors, intellectual property concerns, data privacy obligations, and employment complexity. Fractional GC services help manage this growth legally.
          </p>
          <p>
            <strong>Professional Services:</strong> Law firms, consulting firms, accounting practices, and engineering firms benefit from having experienced legal guidance without adding overhead. A fractional GC helps with client agreements, employment matters, and practice governance.
          </p>
          <p>
            <strong>Real Estate & Development:</strong> Alberta's real estate market is active, and developers, property managers, and investors face complex transactions, regulatory compliance, and contract management. Fractional GC services provide ongoing legal strategy.
          </p>
          <p>
            <strong>Manufacturing & Distribution:</strong> Multi-site operations, complex supply chains, employment at scale, and regulatory compliance (including environmental considerations under Alberta law) make fractional GC services valuable.
          </p>
          <p>
            <strong>Healthcare & Life Sciences:</strong> Medical practices, dental clinics, and healthcare businesses navigate employment law, patient privacy, regulatory compliance, and evolving provincial regulations. Fractional GC experience in healthcare law is particularly valuable.
          </p>
          <p>
            <strong>E-Commerce & Retail:</strong> Growing e-commerce businesses need help with contracts, consumer protection compliance, intellectual property protection, and expansion planning—all areas where fractional GC services add value.
          </p>

          {/* Section 6: Cost Comparison */}
          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Cost Comparison: Full-Time GC vs. Fractional vs. Ad-Hoc Counsel</h2>
          <p>
            The financial case for fractional GC becomes clear when you compare models:
          </p>
          <p>
            <strong>Full-Time In-House General Counsel:</strong> In Calgary, expect $150,000-$250,000+ base salary, plus benefits (health, pension, professional development), office space, and 30+ days annually in vacation and statutory holidays. Total cost: roughly $200,000-$300,000 annually. This makes sense if you have constant legal work and can keep a GC fully utilized, but most growing businesses can't.
          </p>
          <p>
            <strong>Fractional General Counsel:</strong> Most arrangements range from $3,000-$8,000 monthly, depending on hours and complexity. Annual cost: $36,000-$96,000. You also pay for specialized outside counsel as needed, but your fractional GC coordinates it efficiently. Total spend might be $50,000-$150,000 annually depending on your needs, but fractional GC eliminates the overhead and provides continuity.
          </p>
          <p>
            <strong>Ad-Hoc Outside Counsel Only:</strong> You engage law firms for specific matters. Hourly rates in Calgary range from $200-$400+ per hour depending on experience and complexity. A simple contract review might cost $1,000-$3,000; a contract negotiation $5,000-$15,000; employment dispute $10,000-$50,000+. Without proactive guidance, you often pay for legal work that could have been prevented. Annual spend can easily exceed $100,000, and you get no continuity or strategic coordination.
          </p>
          <p>
            <strong>The Math:</strong> If you're currently spending $3,000-$5,000+ monthly on outside counsel, shifting to a fractional GC typically costs the same or less while giving you continuity and strategic guidance. If you're spending less than $2,000 monthly on legal matters, you might not be ready. If you're spending more than $10,000 monthly consistently, a full-time GC might start making sense.
          </p>

          {/* Section 7: How to Get Started */}
          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">How to Get Started with Fractional General Counsel</h2>
          <p>
            <strong>1. Audit Your Current Legal Spend:</strong> Review your legal invoices from the past 12 months. How much are you spending? What types of legal work are you engaging outside counsel for? Where is your legal time and money going?
          </p>
          <p>
            <strong>2. Identify Your Legal Priorities:</strong> What legal issues are causing the most friction in your business? What keeps leaders up at night from a legal perspective? What strategic moves do you want to make that require legal planning? These priorities help a fractional GC focus immediately on value.
          </p>
          <p>
            <strong>3. Determine the Right Scope:</strong> Do you need 5 hours monthly for contract review, or 20-30 hours for ongoing governance and strategy? Are there peak periods (fundraising, expansion, acquisition planning) where you need more hours? A well-structured fractional GC arrangement includes flexibility to scale.
          </p>
          <p>
            <strong>4. Define Success Metrics:</strong> What would success look like? Faster business decision-making? Fewer legal surprises? Better contract terms? Lower outside counsel bills? Clear success metrics help you evaluate the relationship.
          </p>
          <p>
            <strong>5. Structure the Arrangement:</strong> Fractional GC arrangements typically start with a 3-6 month trial. You might agree on a monthly retainer for a certain number of hours, with additional work billed separately. Clear scope, communication cadence, and escalation protocols prevent misalignment.
          </p>

          {/* Section 8: What to Look For in a Fractional GC */}
          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">What to Look For in a Fractional General Counsel</h2>
          <p>
            Not all experienced lawyers make good fractional GCs. Look for:
          </p>
          <p>
            <strong>In-House Experience:</strong> Your fractional GC should have spent years working inside a company, not just at a law firm. This experience builds the business judgment and integrated thinking you need. Ideally, they've served as in-house counsel or held senior legal roles.
          </p>
          <p>
            <strong>Alberta Expertise:</strong> They should understand Alberta business law, including the Alberta Business Corporations Act, provincial employment law, regulatory landscape, and local practice. This matters for everything from contract drafting to governance.
          </p>
          <p>
            <strong>Industry Knowledge (Ideally):</strong> While not always necessary, fractional GCs with experience in your industry hit the ground running. They understand your customer dynamics, regulatory environment, and common legal issues.
          </p>
          <p>
            <strong>Business Fluency:</strong> They speak both legal and business language. They understand your strategic priorities, margin constraints, competitive pressures, and risk tolerance. Good fractional GCs translate legal nuance into business impact.
          </p>
          <p>
            <strong>Collaborative Approach:</strong> Your fractional GC should coordinate specialists effectively, not gatekeep legal decisions or empire-build. They're part of your team, not a separate legal function.
          </p>
          <p>
            <strong>Availability & Responsiveness:</strong> Fractional doesn't mean slow. Your fractional GC should be available for urgent issues and maintain consistent communication. Clear expectations on response times prevent frustration.
          </p>
          <p>
            <strong>Proactive Thinking:</strong> The best fractional GCs anticipate legal issues before they become problems. They review your business direction, ask good questions, and recommend preventive measures.
          </p>

          {/* Closing */}
          <p className="mt-12 text-lg leading-relaxed border-l-4 border-teal-700 pl-6 italic">
            For growing Alberta businesses caught between needing sophisticated legal guidance and the overhead of a full-time hire, fractional general counsel services offer a practical third option. You get strategic legal leadership, business context continuity, and efficient coordination of specialists—at a cost that makes sense.
          </p>

          <p className="mt-8"><em>This content is for informational purposes only and does not constitute legal advice. Every business has unique legal needs. Consult with a qualified lawyer to determine whether fractional general counsel services are right for your situation.</em></p>
        </div>
      </article>

      {/* Related Articles Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Related Articles</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/blog/selling-your-business-calgary" className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <p className="text-teal-700 text-sm font-medium mb-2">Business Exit</p>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Selling Your Business: What to Expect in the M&A Process</h3>
              <p className="text-gray-600 text-sm">Learn what to expect when selling your business, including due diligence, valuation, and closing requirements.</p>
            </Link>

            <Link href="/blog/alberta-vs-federal-incorporation" className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <p className="text-teal-700 text-sm font-medium mb-2">Business Formation</p>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Alberta vs. Federal Incorporation: Which Is Right for Your Business?</h3>
              <p className="text-gray-600 text-sm">Compare Alberta and federal incorporation to determine the best structure for your growing business.</p>
            </Link>

            <Link href="/blog/do-you-need-a-shareholder-agreement" className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <p className="text-teal-700 text-sm font-medium mb-2">Governance</p>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Do You Need a Shareholder Agreement?</h3>
              <p className="text-gray-600 text-sm">Understand why shareholder agreements protect your business and when you need one.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-teal-700 to-teal-800">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready to Get Strategic Legal Guidance?</h2>
          <p className="text-teal-100 mb-8 text-lg">Discover whether fractional general counsel is right for your Alberta business.</p>
          <Link href="/contact" className="inline-block bg-white text-teal-700 px-8 py-4 rounded font-medium hover:bg-gray-100 transition-colors">Schedule a Consultation</Link>
        </div>
      </section>
    </>
  )
}
