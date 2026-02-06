import Link from 'next/link'

export const metadata = {
  title: 'Selling Your Business in Calgary: Complete M&A Process Guide | Gusto Law',
  description: 'Complete guide to selling your business in Calgary. Learn about M&A valuation, due diligence, purchase agreements, tax considerations, and closing. Expert legal insights for Alberta business owners.',
  keywords: 'selling a business Calgary, M&A lawyer Alberta, sell business Alberta, business sale process, merger and acquisition Alberta',
  openGraph: {
    title: 'Selling Your Business in Calgary: Complete M&A Process Guide | Gusto Law',
    description: 'Complete guide to selling your business in Calgary. Learn about M&A valuation, due diligence, purchase agreements, tax considerations, and closing. Expert legal insights for Alberta business owners.',
    url: 'https://gustolaw.ca/blog/selling-your-business-calgary',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image' as const,
    title: 'Selling Your Business in Calgary: Complete M&A Process Guide | Gusto Law',
    description: 'Complete guide to selling your business in Calgary. Learn about M&A valuation, due diligence, purchase agreements, tax considerations, and closing. Expert legal insights for Alberta business owners.',
  },
  alternates: {
    canonical: 'https://gustolaw.ca/blog/selling-your-business-calgary',
  },
}

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'Selling Your Business: What to Expect in the M&A Process',
  description: 'A comprehensive guide to selling your business in Calgary. Learn the complete M&A sale process from preparation through closing.',
  author: {
    '@type': 'Organization',
    name: 'Gusto Law',
    url: 'https://gustolaw.ca',
  },
  datePublished: '2026-01-15',
  dateModified: '2026-01-15',
  image: 'https://gustolaw.ca/blog/selling-business.jpg',
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How long does the business sale process take in Alberta?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A typical M&A process in Alberta takes 3-9 months from initial buyer interest to closing, depending on the complexity of your business, industry, and the buyer\'s internal approval processes. Smaller transactions may close faster, while complex deals with multiple buyers may take longer.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between an asset sale and a share sale in Calgary?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In an asset sale, the buyer purchases specific assets of your business, which may offer tax advantages but requires more detailed asset-by-asset valuation. In a share sale, the buyer purchases the company shares themselves, which is often simpler but may result in different tax consequences. Your accountant and M&A lawyer can help determine which structure works best.',
      },
    },
    {
      '@type': 'Question',
      name: 'What happens during due diligence when selling my business?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Due diligence is the buyer\'s investigation of your business. They review financial records (3-5 years), all contracts and agreements, employee records, intellectual property, litigation history, tax filings, insurance policies, and operational details. Being organized and transparent during this phase accelerates the process and builds buyer confidence.',
      },
    },
    {
      '@type': 'Question',
      name: 'Should I hire an M&A lawyer when selling my business?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. An M&A lawyer protects your interests by negotiating the purchase agreement, ensuring proper representations and warranties, managing indemnity periods, and identifying tax and legal risks. Their expertise often results in better deal terms that far exceed their fees.',
      },
    },
  ],
}

export default function SellingYourBusinessPost() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <header className="bg-gradient-to-br from-gray-50 to-teal-50 pt-32 pb-16">
        <div className="max-w-3xl mx-auto px-6">
          <nav className="mb-6">
            <ol className="flex items-center space-x-2 text-sm text-gray-600">
              <li><Link href="/" className="text-teal-700 hover:text-teal-800">Home</Link></li>
              <li>/</li>
              <li><Link href="/blog" className="text-teal-700 hover:text-teal-800">Insights</Link></li>
              <li>/</li>
              <li className="text-gray-900">Selling Your Business</li>
            </ol>
          </nav>
          <Link href="/blog" className="text-teal-700 hover:text-teal-800 mb-4 inline-block">← Back to Insights</Link>
          <p className="text-teal-700 font-medium mb-2">Mergers & Acquisitions</p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Selling Your Business: What to Expect in the M&A Process</h1>
          <p className="text-gray-600 text-lg mb-2">A step-by-step guide for Calgary and Alberta business owners</p>
          <p className="text-gray-500">January 2026 · 12 min read</p>
        </div>
      </header>

      <article className="py-16">
        <div className="max-w-3xl mx-auto px-6">
          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-lg text-gray-700 font-semibold leading-relaxed mb-6">
              You've spent years building your company—nurturing clients, developing your team, and establishing your reputation in the Calgary market. Selling your business is one of the most significant decisions you'll make. Understanding what to expect throughout the M&A process can help you navigate it with confidence and protect your interests.
            </p>

            <p className="text-gray-600 leading-relaxed mb-8">
              Whether you're selling due to retirement, pursuing new opportunities, or responding to a strategic buyer, the business sale process follows a predictable path. This guide walks you through each stage—from preparation through closing—so you know exactly what's ahead.
            </p>
          </div>

          <div className="space-y-12">
            {/* Section 1: Preparation Phase */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. The Preparation Phase: Getting Your Business Ready</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Before going to market, you need to prepare your business for buyer scrutiny. This phase can take weeks to months and is crucial for maximizing both your deal value and your chances of closing successfully.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                During preparation, you'll need to organize and clean up key documentation: financial records (ideally audited or reviewed for the past 3-5 years), customer contracts and agreements, employee records and benefit plans, intellectual property documentation, insurance policies, and any pending or historical litigation. You should also identify and document key business relationships, customer concentration, and any dependencies on specific employees or vendors.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                This is the time to address operational or legal issues that could derail a deal. Are there pending lawsuits? Regulatory compliance gaps? Key employee retention concerns? Addressing these proactively—rather than having a buyer discover them during due diligence—puts you in a much stronger negotiating position.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Many Calgary business owners also choose to have a preliminary business valuation done during this phase. This helps you set realistic price expectations and understand what buyers are likely looking for.
              </p>
            </section>

            {/* Section 2: Valuation & Professional Advisors */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Valuation & Assembling Your Advisory Team</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Business valuation in an M&A context typically uses three approaches: discounted cash flow (DCF), comparable company analysis, and precedent transactions. Your business's size, industry, growth rate, and profitability determine which methods matter most to potential buyers.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                During this phase, you'll assemble your advisory team. At a minimum, you need:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
                <li><strong>An M&A lawyer</strong> to guide you through the legal complexities and protect your interests</li>
                <li><strong>An accountant or tax advisor</strong> to handle valuation, tax optimization, and financial due diligence</li>
                <li><strong>An investment banker or business broker</strong> (if running a competitive process)</li>
              </ul>
              <p className="text-gray-600 leading-relaxed">
                These professionals work together to package your business, identify potential buyers, and negotiate on your behalf. In Alberta, working with advisors who understand local market conditions and regulatory requirements is especially valuable.
              </p>
            </section>

            {/* Section 3: Finding Buyers & Marketing */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Finding Buyers: Competitive Process vs. Direct Negotiation</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                You have two main paths: a competitive auction or targeted approach. A competitive process (often run by investment bankers) creates urgency and typically yields higher prices. Strategic and financial buyers submit bids, and you negotiate with the best-qualified buyer.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Alternatively, if you have a specific buyer in mind—perhaps a competitor or industry consolidator—you can negotiate directly. This approach offers more control, faster timelines, and better confidentiality but may result in a lower purchase price.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Most sellers start with a confidentiality agreement (NDA) to protect sensitive business information while potential buyers evaluate your company. This is critical—you don't want your sale intentions or financial details spreading to employees, customers, or competitors before you're ready.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Once confidentiality is in place, interested buyers receive a comprehensive information package describing your business, and serious buyers can begin preliminary due diligence and financial analysis.
              </p>
            </section>

            {/* Section 4: Letter of Intent */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. The Letter of Intent (LOI): Creating a Framework for the Deal</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Once a buyer is seriously interested, they'll typically submit a non-binding Letter of Intent (LOI) outlining the key commercial terms: purchase price, deal structure (asset vs. share sale), payment terms (cash, earnouts, seller financing), timing, and important conditions precedent.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                While the LOI is usually non-binding on price and terms, it signals the buyer's genuine interest and commitment to proceed. This is a critical negotiation point. Your M&A lawyer will help you understand the implications of each term and negotiate favorable conditions that protect your interests.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Important LOI provisions include exclusivity (preventing you from shopping the business to other buyers), the conditions that must be met for the deal to close, and any representations or warranties required from you. Getting these right at the LOI stage prevents surprises later.
              </p>
            </section>

            {/* Section 5: Due Diligence Deep Dive */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. The Due Diligence Deep Dive: Answering Every Question</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Once an LOI is signed, due diligence begins in earnest. The buyer's team—often including their legal counsel, accountants, and industry specialists—will conduct a comprehensive investigation of your business.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Financial due diligence includes detailed review of 3-5 years of financial statements, tax returns, accounts receivable aging, inventory records, and capital expenditure history. The buyer is looking for the quality and consistency of earnings, hidden liabilities, and anything that might affect valuation.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Legal due diligence covers contracts, compliance, litigation, intellectual property ownership, employment agreements, and regulatory approvals. In Alberta, buyers also review compliance with provincial employment standards, health and safety regulations, and industry-specific licensing.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Operational due diligence examines customer concentration, employee retention, supplier relationships, intellectual property, technology systems, and key operational processes. Being thorough, transparent, and responsive during this phase accelerates the process and builds buyer confidence.
              </p>
              <p className="text-gray-600 leading-relaxed">
                This phase typically lasts 4-12 weeks, depending on complexity. Having organized documentation ready before due diligence begins can significantly compress the timeline.
              </p>
            </section>

            {/* Section 6: Purchase Agreement Negotiation */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Purchase Agreement Negotiation: Protecting Your Interests</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                The purchase agreement is the binding legal document that controls the entire transaction. It specifies what's being sold, at what price, on what terms, and—critically—how risk is allocated between buyer and seller.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Key sections include representations and warranties (your assurances that information about the business is accurate), indemnification provisions (your commitment to compensate the buyer for breaches post-closing), and survival periods (how long the buyer can claim breach).
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Your M&A lawyer will negotiate these provisions carefully. Excessive representations, broad indemnity provisions, or long survival periods create significant post-closing risk for you. Standard survival periods for general representations are 12-18 months; tax and environmental issues often have longer periods.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                The agreement also details purchase price adjustments (true-ups based on working capital, debt, or other financial metrics at closing), any earnout payments (additional consideration if the business hits future targets), and seller financing arrangements if applicable.
              </p>
              <p className="text-gray-600 leading-relaxed">
                This is where skilled legal negotiation adds tremendous value. Terms negotiated here can reduce your post-closing liabilities and create financial protection for you and your stakeholders.
              </p>
            </section>

            {/* Section 7: Tax Considerations */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Tax Considerations: Asset Sale vs. Share Sale</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                One of the biggest decisions in any business sale is whether to structure the transaction as an asset sale or a share sale. Each has dramatically different tax consequences.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                In an <strong>asset sale</strong>, the buyer purchases your company's assets directly—equipment, inventory, customer lists, intellectual property—but not the company itself. This often provides tax advantages to the buyer (allowing them to step up the basis of assets), but may create capital gains tax for you. However, asset sales allow for tax planning opportunities, such as allocating purchase price to minimize your tax burden.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                In a <strong>share sale</strong>, the buyer purchases the company shares, meaning they acquire the legal entity itself. For Canadian business owners, this often triggers capital gains tax on the sale proceeds. However, if your business qualifies for the Capital Gains Exemption (up to $1,016,836 in 2024 for qualified small business shares), share sales can be tax-efficient.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                In Alberta, provincial tax treatment also matters. Your accountant and tax lawyer should model the tax implications of both structures and work with the buyer to negotiate a deal that optimizes taxes for both parties.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Don't leave tax optimization to chance—the difference between structures can represent hundreds of thousands of dollars in after-tax proceeds.
              </p>
            </section>

            {/* Section 8: Closing and Post-Closing */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Closing & Post-Closing: From Signing to Transition</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Closing day is when ownership officially transfers, you receive payment, and the buyer takes control of the business. However, closing usually involves several preparation steps beforehand.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Pre-closing activities include obtaining third-party consents (from customers, landlords, or lenders who must approve the change in ownership), satisfying regulatory approvals, finalizing employee transitions or retention agreements, and completing final due diligence confirmations.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                On closing day itself, you'll sign the final purchase agreement and any ancillary documents (indemnity agreements, non-competes, employment/consulting agreements), and the buyer transfers payment. This may involve wire transfers, escrow arrangements, or—for larger deals—multiple tranches of payment.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Post-closing, several things typically happen: the purchase price is adjusted for working capital differences, any escrow funds are held to cover potential indemnification claims, and you may have transition or consulting obligations to help the buyer integrate your business.
              </p>
              <p className="text-gray-600 leading-relaxed">
                The indemnity period (typically 12-24 months post-closing) is when the buyer can bring claims for breaches of your representations and warranties. This is why having robust documentation during diligence and careful negotiation of indemnity terms is so important—it reduces your exposure during this period.
              </p>
            </section>

            {/* Section 9: Common Pitfalls to Avoid */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Common Pitfalls to Avoid</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Business sales often stumble because sellers make avoidable mistakes. Here are the most common:
              </p>
              <ul className="space-y-3 mb-6">
                <li className="text-gray-600"><strong>Lacking organized documentation:</strong> Buyers expect clean financial records, organized contracts, and clear ownership of intellectual property. Disorganization creates friction and kills deals.</li>
                <li className="text-gray-600"><strong>Inadequate business valuation:</strong> Going in without a realistic valuation creates negotiation chaos. Get an independent valuation to anchor your expectations.</li>
                <li className="text-gray-600"><strong>Not addressing operational red flags:</strong> Issues with key employee retention, customer concentration, or regulatory compliance discovered during due diligence cause deals to collapse or force price reductions.</li>
                <li className="text-gray-600"><strong>Overly broad representations and warranties:</strong> Agreeing to representations that are too sweeping creates post-closing indemnity liability. Negotiate carefully.</li>
                <li className="text-gray-600"><strong>Ignoring tax planning:</strong> Asset vs. share sale decisions have enormous tax consequences. Don't let the buyer dictate structure without modeling tax impacts.</li>
                <li className="text-gray-600"><strong>Going it alone:</strong> Trying to navigate an M&A without legal and accounting expertise is penny-wise and pound-foolish. The right advisors more than pay for themselves.</li>
                <li className="text-gray-600"><strong>Continuing to run the business as normal:</strong> During the sales process, some sellers neglect their business while focused on the transaction. This drives down performance and complicates closing.</li>
              </ul>
            </section>

            {/* Legal Disclaimer */}
            <section className="mt-12 pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-600 italic">
                This content is for informational purposes only and does not constitute legal advice. Every business sale is unique, with distinct legal, tax, and commercial considerations. Before proceeding with any business transaction, you should consult with qualified legal counsel and tax advisors to understand your specific situation and obligations. Gusto Law is a Calgary corporate law firm specializing in mergers and acquisitions. We're here to guide you through every stage of selling your business.
              </p>
            </section>
          </div>
        </div>
      </article>

      {/* Related Articles Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Related Articles</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/blog/corporate-law-calgary" className="group">
              <div className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow p-6">
                <p className="text-teal-700 font-medium mb-2">Corporate Law</p>
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-teal-700 transition-colors mb-2">Corporate Law in Calgary: What Every Business Owner Should Know</h3>
                <p className="text-gray-600 text-sm">Essential guide to corporate law matters, compliance, and governance for Calgary businesses.</p>
              </div>
            </Link>
            <Link href="/blog/business-purchase-agreement" className="group">
              <div className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow p-6">
                <p className="text-teal-700 font-medium mb-2">Acquisitions</p>
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-teal-700 transition-colors mb-2">Business Purchase Agreements: What You Need to Know</h3>
                <p className="text-gray-600 text-sm">Comprehensive guide to negotiating and understanding purchase agreements in acquisitions.</p>
              </div>
            </Link>
            <Link href="/blog/shareholder-agreements" className="group">
              <div className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow p-6">
                <p className="text-teal-700 font-medium mb-2">Business Agreements</p>
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-teal-700 transition-colors mb-2">Shareholder Agreements: Protecting Your Business and Your Exit</h3>
                <p className="text-gray-600 text-sm">Understand shareholder agreements and why they matter for business continuity and exit planning.</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-teal-800 to-teal-700">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready to Sell Your Business?</h2>
          <p className="text-teal-100 mb-8 text-lg">Let our M&A experts guide you through every step of the process.</p>
          <Link href="/contact" className="inline-block bg-white text-teal-800 px-8 py-4 rounded font-medium hover:bg-gray-100 transition-colors">Schedule Your Consultation</Link>
        </div>
      </section>
    </>
  )
}