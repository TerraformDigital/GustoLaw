import Link from 'next/link'

export const metadata = {
  title: 'Alberta vs. Federal Incorporation: Which Is Right for Your Business?',
  description: 'Compare Alberta provincial incorporation (ABCA) vs. federal incorporation (CBCA) in Canada. Learn costs, benefits, tax implications, and how to decide which structure is best for your Calgary business.',
  keywords: 'Alberta incorporation, federal incorporation Canada, incorporate business Calgary, ABCA vs CBCA, Alberta Business Corporations Act, Canada Business Corporations Act',
  openGraph: {
    title: 'Alberta vs. Federal Incorporation: Which Is Right for Your Business?',
    description: 'Compare Alberta provincial incorporation (ABCA) vs. federal incorporation (CBCA) in Canada. Learn costs, benefits, tax implications, and how to decide which structure is best for your Calgary business.',
    url: 'https://gustolaw.ca/blog/alberta-vs-federal-incorporation',
    siteName: 'Gusto Law',
    locale: 'en_CA',
    type: 'article',
    images: [{
      url: 'https://gustolaw.ca/wp-content/uploads/2022/01/Business-Formation-scaled.jpg',
      width: 1200,
      height: 630,
      alt: 'Alberta vs. Federal Incorporation: Which Is Right for Your Business?',
    }],
  },
  twitter: {
    card: 'summary_large_image' as const,
    title: 'Alberta vs. Federal Incorporation: Which Is Right for Your Business?',
    description: 'Compare Alberta provincial incorporation (ABCA) vs. federal incorporation (CBCA) in Canada. Learn costs, benefits, tax implications, and how to decide which structure is best for your Calgary business.',
  },
  alternates: {
    canonical: 'https://gustolaw.ca/blog/alberta-vs-federal-incorporation',
  },
}

export default function AlbertaVsFederalPost() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is the main difference between Alberta and federal incorporation?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Alberta incorporation (under the ABCA) provides name protection within Alberta and is governed by provincial law, while federal incorporation (under the CBCA) provides name protection across all of Canada and is governed by federal law. Federal incorporation allows you to operate nationally with a protected name.'
        }
      },
      {
        '@type': 'Question',
        name: 'How much does it cost to incorporate in Alberta versus federally?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Alberta provincial incorporation typically costs between $200-$400 in government fees, while federal incorporation costs between $200-$300 in government fees. However, total costs depend on whether you use a lawyer and the complexity of your corporate structure.'
        }
      },
      {
        '@type': 'Question',
        name: 'Do I need to do a NUANS search before incorporating?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, a NUANS (Nuisance and Unlikelihood of Confusion Search) is required for federal incorporation in Canada. For Alberta incorporation, a name search through the Alberta Corporate Registry is required. NUANS ensures your chosen business name is not similar to existing registered names.'
        }
      },
      {
        '@type': 'Question',
        name: 'Can I incorporate federally and still operate only in Alberta?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, you can incorporate federally and operate only in Alberta. There is no requirement to operate nationally. However, if you anticipate expanding to other provinces in the future, federal incorporation may be more cost-effective than provincial incorporation with extra-provincial registration.'
        }
      }
    ]
  }

  return (
    <>
      <header className="bg-gradient-to-br from-gray-50 to-teal-50 pt-32 pb-16">
        <div className="max-w-3xl mx-auto px-6">
          <Link href="/blog" className="text-teal-700 hover:text-teal-800 mb-4 inline-block">← Back to Insights</Link>
          <p className="text-teal-700 font-medium mb-2">Business Formation</p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Alberta vs. Federal Incorporation: Which Is Right for Your Business?</h1>
          <p className="text-gray-500">January 2026 · 12 min read</p>
        </div>
      </header>

      <article className="py-16">
        <div className="max-w-3xl mx-auto px-6 prose prose-lg">
          <p className="lead text-lg text-gray-700 mb-6">One of the first decisions when incorporating in Canada is whether to incorporate provincially or federally. This choice affects your name protection, operational flexibility, costs, and long-term growth strategy. Here's a comprehensive guide to help you decide between Alberta and federal incorporation for your Calgary business.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Understanding Incorporation in Canada</h2>
          <p>Incorporation is the process of creating a legal entity—a corporation—that is separate from its owners (shareholders). In Canada, you can incorporate under either provincial law or federal law. Each approach has distinct advantages, costs, and implications for how your business operates and grows.</p>
          <p>When you incorporate, your business becomes its own legal person. This means your corporation can own property, enter contracts, and be held liable for its own obligations—separate from your personal assets. This legal separation is one of the primary reasons entrepreneurs choose to incorporate.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Alberta Provincial Incorporation: The ABCA Route</h2>
          <p>Alberta provincial incorporation is governed by the <strong>Alberta Business Corporations Act (ABCA)</strong>. When you incorporate in Alberta, your company name is protected throughout the province, and you work with the <strong>Alberta Corporate Registry</strong> (operated by Alberta Justice and Solicitor General).</p>

          <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-3">ABCA Process and Requirements</h3>
          <p>The Alberta incorporation process involves completing Form 2 (Articles of Incorporation), conducting a name search through the Alberta Corporate Registry, and submitting your incorporation documents. Once approved, you receive a Certificate of Incorporation from the province. The process typically takes 5-10 business days if done online through the Alberta Corporate Registry's self-service system.</p>
          <p>Alberta incorporated companies must have a registered office in Alberta and at least one director who is a Canadian resident (either an Alberta resident or a resident of another Canadian province). Your company must also maintain corporate records in Alberta.</p>

          <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-3">Alberta Incorporation Costs</h3>
          <p>Government fees for Alberta incorporation range from $200 to $400, depending on whether you file online (less expensive) or by mail. This makes provincial incorporation an attractive option for startups and small businesses watching their initial expenses. However, if you use a lawyer to prepare your incorporation documents and articles, total costs will be higher (typically $1,000-$2,500 with professional assistance).</p>

          <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-3">Name Protection Under ABCA</h3>
          <p>When you incorporate provincially, your company name is protected only within Alberta. Your name cannot be used by another Alberta-incorporated company or sole proprietorship registered in Alberta. However, someone could use your name in other provinces or operate federally with a similar name. This is an important limitation if you plan to expand beyond Alberta.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Federal Incorporation: The CBCA Route</h2>
          <p>Federal incorporation is governed by the <strong>Canada Business Corporations Act (CBCA)</strong> and is administered by <strong>Corporations Canada</strong> (a service of Innovation, Science and Economic Development Canada). Federally incorporated companies receive name protection across all provinces and territories in Canada.</p>

          <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-3">CBCA Process and Requirements</h3>
          <p>Federal incorporation requires completing Articles of Incorporation and conducting a NUANS search (see the section below). You then submit your documents to Corporations Canada, either online through their Corporations Canada online filing service or by mail. The process typically takes 5-10 business days online or longer by mail.</p>
          <p>Federally incorporated companies must have a registered office in Canada (often in Alberta) and follow CBCA rules regarding directors, shareholders, and corporate governance. Like provincial corporations, federal corporations must maintain corporate records, although these can be kept in any province.</p>

          <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-3">Federal Incorporation Costs</h3>
          <p>Government fees for federal incorporation are typically $200 to $300, comparable to Alberta incorporation. However, federal incorporation requires a NUANS search (approximately $15-$30), and many entrepreneurs work with lawyers who charge $1,500-$3,000 for preparation and filing. The main cost advantage of federal incorporation is that you avoid the need for extra-provincial registration if you expand to other provinces, which can save money long-term.</p>

          <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-3">Name Protection and NUANS Search</h3>
          <p>Federal incorporation requires a NUANS (Newly Updated Automated Name Search) search before incorporating. NUANS is a computerized search system that identifies any existing federal or provincial names that are identical or similar to your proposed name. This search must be completed within 90 days of incorporation. Because NUANS searches federal, provincial, and trademark databases, federal name protection is significantly broader than provincial protection.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Side-by-Side Comparison: Alberta vs. Federal Incorporation</h2>
          <div className="overflow-x-auto my-6">
            <table className="w-full border-collapse border border-gray-300">
              <thead className="bg-teal-50">
                <tr>
                  <th className="border border-gray-300 px-4 py-2 text-left font-semibold text-gray-900">Feature</th>
                  <th className="border border-gray-300 px-4 py-2 text-left font-semibold text-gray-900">Alberta (ABCA)</th>
                  <th className="border border-gray-300 px-4 py-2 text-left font-semibold text-gray-900">Federal (CBCA)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 font-medium text-gray-800">Name Protection</td>
                  <td className="border border-gray-300 px-4 py-2 text-gray-600">Alberta only</td>
                  <td className="border border-gray-300 px-4 py-2 text-gray-600">All of Canada</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2 font-medium text-gray-800">Government Fees</td>
                  <td className="border border-gray-300 px-4 py-2 text-gray-600">$200–$400</td>
                  <td className="border border-gray-300 px-4 py-2 text-gray-600">$200–$300</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 font-medium text-gray-800">Name Search Required</td>
                  <td className="border border-gray-300 px-4 py-2 text-gray-600">Alberta Corporate Registry search</td>
                  <td className="border border-gray-300 px-4 py-2 text-gray-600">NUANS search (~$15–$30)</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2 font-medium text-gray-800">Registered Office Location</td>
                  <td className="border border-gray-300 px-4 py-2 text-gray-600">Must be in Alberta</td>
                  <td className="border border-gray-300 px-4 py-2 text-gray-600">Must be in Canada (any province)</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 font-medium text-gray-800">Processing Time</td>
                  <td className="border border-gray-300 px-4 py-2 text-gray-600">5–10 business days (online)</td>
                  <td className="border border-gray-300 px-4 py-2 text-gray-600">5–10 business days (online)</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2 font-medium text-gray-800">Expansion to Other Provinces</td>
                  <td className="border border-gray-300 px-4 py-2 text-gray-600">Requires extra-provincial registration</td>
                  <td className="border border-gray-300 px-4 py-2 text-gray-600">No additional registration needed</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 font-medium text-gray-800">Credibility/Perception</td>
                  <td className="border border-gray-300 px-4 py-2 text-gray-600">Strong locally; less recognized nationally</td>
                  <td className="border border-gray-300 px-4 py-2 text-gray-600">Recognized across Canada</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Tax Implications of Alberta vs. Federal Incorporation</h2>
          <p>From a federal tax perspective, there is no significant difference between Alberta and federal incorporation. Both are subject to the same federal income tax rules under the <em>Income Tax Act</em>. However, there are some provincial tax considerations for Alberta.</p>
          <p>Alberta corporations pay provincial corporate tax on their Alberta income. The tax rate varies depending on whether your corporation qualifies as a small business corporation or a general corporation. Alberta also has no provincial sales tax (PST), which is an advantage for Alberta-based businesses compared to other provinces.</p>
          <p>If your company operates in multiple provinces, federal incorporation may simplify tax compliance because you won't need to file separate corporate registration and tax documents in each province. Always consult with a tax professional or accountant about the specific tax implications for your business structure.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Extra-Provincial Registration: When and Why</h2>
          <p>If you incorporate in Alberta but want to operate in other provinces (such as British Columbia, Ontario, or Saskatchewan), you must register your Alberta corporation as an extra-provincial company in those provinces. This process involves filing additional documents with each province's corporate registry and paying registration fees.</p>
          <p>Extra-provincial registration can become expensive and administratively burdensome as you expand. For this reason, many entrepreneurs who anticipate multi-provincial operations choose federal incorporation from the start, which eliminates the need for extra-provincial registration altogether.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">How to Decide: A Decision Framework</h2>
          <p>Here's a practical framework to help you choose between Alberta and federal incorporation:</p>

          <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-3">Choose Alberta Incorporation If:</h3>
          <ul className="list-disc pl-6 my-4 text-gray-700">
            <li>Your business will operate exclusively or primarily in Alberta</li>
            <li>You want to minimize startup costs and paperwork</li>
            <li>You prefer working with a single provincial regulator (Alberta Corporate Registry)</li>
            <li>Your business is a startup testing a market concept in Alberta before expanding</li>
            <li>Your company name is common or generic, and you're not concerned about national protection</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-3">Choose Federal Incorporation If:</h3>
          <ul className="list-disc pl-6 my-4 text-gray-700">
            <li>You plan to operate in multiple provinces or territories</li>
            <li>You want your company name protected across all of Canada</li>
            <li>Your business operates nationally or serves clients across Canada</li>
            <li>You want a corporation that is recognized and credible nationwide</li>
            <li>You have a distinctive brand name that you want protected federally</li>
            <li>You anticipate needing investors or financing from outside Alberta</li>
            <li>Your company may need to operate or open offices in other provinces in the future</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Common Misconceptions About Alberta and Federal Incorporation</h2>
          <p><strong>Misconception 1:</strong> Federal incorporation is more expensive. In reality, the government filing fees are comparable. The main difference is that federal incorporation avoids the future cost of extra-provincial registration if you expand beyond Alberta.</p>
          <p><strong>Misconception 2:</strong> Federal incorporation is always "better" than provincial incorporation. This is not true. For a small, local business that will never operate outside Alberta, provincial incorporation is simpler and sufficient. The choice depends on your specific business plans.</p>
          <p><strong>Misconception 3:</strong> You can't change from Alberta to federal incorporation later. You actually can. This process is called "continuation" and involves applying to continue your Alberta corporation as a federal corporation. However, doing this after the fact is more complicated than choosing correctly initially.</p>
          <p><strong>Misconception 4:</strong> NUANS searches are only for federal incorporation. While NUANS is required for federal incorporation, it's still a good idea to conduct a NUANS search even if you're incorporating provincially. This helps ensure your name isn't already protected by someone else federally.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Next Steps: Getting Your Business Incorporated</h2>
          <p>Once you've decided between Alberta and federal incorporation, the next steps are to:</p>
          <ol className="list-decimal pl-6 my-4 text-gray-700">
            <li>Conduct a name search (Alberta Corporate Registry search for provincial, NUANS for federal)</li>
            <li>Prepare your Articles of Incorporation (or Articles of Continuance if continuing from provincial to federal)</li>
            <li>Obtain director and shareholder information</li>
            <li>File your incorporation documents with the appropriate registry</li>
            <li>Obtain your Certificate of Incorporation</li>
            <li>Set up corporate records and register for GST/HST if required</li>
            <li>Consult with a lawyer or accountant about shareholder agreements and ongoing compliance</li>
          </ol>

          <p className="mt-8 text-base"><em>This content is for informational purposes only and does not constitute legal advice. Every business situation is unique. We recommend consulting with a corporate lawyer and tax professional before incorporating to ensure you choose the structure that best serves your business goals.</em></p>
        </div>
      </article>

      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="border-l-4 border-teal-700 pl-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">What is the main difference between Alberta and federal incorporation?</h3>
              <p className="text-gray-700">Alberta incorporation (under the ABCA) provides name protection within Alberta and is governed by provincial law, while federal incorporation (under the CBCA) provides name protection across all of Canada and is governed by federal law. Federal incorporation allows you to operate nationally with a protected name.</p>
            </div>
            <div className="border-l-4 border-teal-700 pl-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">How much does it cost to incorporate in Alberta versus federally?</h3>
              <p className="text-gray-700">Alberta provincial incorporation typically costs between $200–$400 in government fees, while federal incorporation costs between $200–$300 in government fees. However, total costs depend on whether you use a lawyer and the complexity of your corporate structure.</p>
            </div>
            <div className="border-l-4 border-teal-700 pl-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Do I need to do a NUANS search before incorporating?</h3>
              <p className="text-gray-700">Yes, a NUANS (Newly Updated Automated Name Search) is required for federal incorporation in Canada. For Alberta incorporation, a name search through the Alberta Corporate Registry is required. NUANS ensures your chosen business name is not similar to existing registered names.</p>
            </div>
            <div className="border-l-4 border-teal-700 pl-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Can I incorporate federally and still operate only in Alberta?</h3>
              <p className="text-gray-700">Yes, you can incorporate federally and operate only in Alberta. There is no requirement to operate nationally. However, if you anticipate expanding to other provinces in the future, federal incorporation may be more cost-effective than provincial incorporation with extra-provincial registration.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Related Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link href="/blog/selling-your-business-calgary" className="group">
              <div className="border border-gray-200 rounded-lg p-6 hover:border-teal-700 hover:shadow-lg transition-all">
                <p className="text-teal-700 font-medium text-sm mb-2">Business Growth</p>
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-teal-700 transition-colors">Selling Your Business: What to Expect in the M&A Process</h3>
                <p className="text-gray-600 text-sm mt-3">Learn the steps involved in selling your business and how to prepare for a successful transaction.</p>
              </div>
            </Link>
            <Link href="/blog/fractional-general-counsel-calgary" className="group">
              <div className="border border-gray-200 rounded-lg p-6 hover:border-teal-700 hover:shadow-lg transition-all">
                <p className="text-teal-700 font-medium text-sm mb-2">Legal Strategy</p>
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-teal-700 transition-colors">What Is a Fractional General Counsel—And Does Your Business Need One?</h3>
                <p className="text-gray-600 text-sm mt-3">Explore the benefits of fractional legal counsel for growing companies in Calgary.</p>
              </div>
            </Link>
            <Link href="/blog/do-you-need-a-shareholder-agreement" className="group">
              <div className="border border-gray-200 rounded-lg p-6 hover:border-teal-700 hover:shadow-lg transition-all">
                <p className="text-teal-700 font-medium text-sm mb-2">Business Formation</p>
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-teal-700 transition-colors">Do You Need a Shareholder Agreement?</h3>
                <p className="text-gray-600 text-sm mt-3">Understand why shareholder agreements are critical for protecting your business and relationships.</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Need Help Incorporating Your Business?</h2>
          <p className="text-gray-700 mb-6">Our corporate law team at Gusto Law can guide you through the incorporation process and help you make the right choice for your Calgary business.</p>
          <a href="https://calendly.com/guslu-gustolaw/30min" target="_blank" rel="noopener noreferrer" className="inline-block bg-teal-800 text-white px-8 py-4 rounded font-medium hover:bg-teal-900 transition-colors">Schedule a Consultation</a>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </>
  )
}
