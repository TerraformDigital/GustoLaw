// FAQ categories and questions - shared between server and client components
export const faqCategories = [
  {
    id: 'general',
    name: 'General',
    faqs: [
      {
        q: "How much does a consultation cost?",
        a: "Initial consultations are $250 + GST for up to one hour. This allows us to understand your situation, provide initial guidance, and determine how we can help."
      },
      {
        q: "What areas of law does Gusto Law practice?",
        a: "We focus on corporate and commercial law for established businesses. Our core services include mergers & acquisitions, fractional general counsel, business formation, corporate & commercial law, dispute resolution, and joint ventures."
      },
      {
        q: "Do you work with startups?",
        a: "While we welcome businesses at all stages, our practice is focused on established businesses navigating growth, transactions, and complex commercial matters. If you're a startup with straightforward incorporation needs, we can help—but our sweet spot is businesses that have outgrown basic legal support."
      },
      {
        q: "What is your service area?",
        a: "We're based in Calgary and primarily serve businesses across Alberta. For transactional work like M&A and corporate matters, we work with clients throughout Western Canada."
      }
    ]
  },
  {
    id: 'ma',
    name: 'Mergers & Acquisitions',
    faqs: [
      {
        q: "What's the difference between an asset purchase and a share purchase?",
        a: "In a share purchase, you buy the company itself—including all assets, liabilities, contracts, and history. In an asset purchase, you select specific assets and liabilities to acquire, leaving the corporate shell behind. Share deals are often simpler and may have tax advantages for sellers, while asset deals give buyers more control over what they're acquiring. The right structure depends on tax considerations, liability concerns, and the nature of the business."
      },
      {
        q: "How long does a typical M&A transaction take in Alberta?",
        a: "Simple transactions can close in 4-8 weeks. More complex deals—those involving regulatory approvals, extensive due diligence, or complicated financing—typically take 3-6 months. Competitive auction processes or transactions requiring shareholder approvals may take longer."
      },
      {
        q: "What's the typical fee structure for M&A legal work?",
        a: "We typically work on an hourly basis for M&A transactions, with regular billing and clear communication about budget. For certain aspects—like standard due diligence—we can provide fixed-fee arrangements. We'll discuss fee structure and provide estimates during our initial consultation."
      },
      {
        q: "Do I need both a lawyer and an accountant for an M&A transaction?",
        a: "Yes, typically. Lawyers handle due diligence, transaction documents, and legal risk assessment. Accountants handle financial due diligence, quality of earnings analysis, tax structuring, and valuation support. We work closely with your accountants to ensure coordinated advice."
      },
      {
        q: "What should I prepare before meeting with an M&A lawyer?",
        a: "If you're selling, gather your corporate records, financial statements (3+ years), material contracts, employee information, and any known issues or liabilities. If you're buying, bring whatever information you have about the target, your acquisition criteria, financing plans, and timeline expectations."
      }
    ]
  },
  {
    id: 'formation',
    name: 'Business Formation',
    faqs: [
      {
        q: "How much does it cost to incorporate in Alberta?",
        a: "A basic Alberta incorporation with articles, bylaws, organizational resolutions, and initial share issuances typically costs $1,500-$2,500 in legal fees plus government filing fees (currently ~$275 for Alberta, ~$200 for federal). More complex structures cost more. We provide fixed-fee quotes after understanding your specific needs."
      },
      {
        q: "Do I really need a shareholder agreement if I'm the only owner?",
        a: "If you're the sole shareholder, a shareholder agreement isn't necessary. However, if you ever plan to bring in partners, investors, or key employees with equity, you'll want one in place before issuing additional shares."
      },
      {
        q: "What's the difference between Alberta and federal incorporation?",
        a: "Alberta incorporation is simpler, cheaper, and suitable if you'll operate primarily in Alberta. Federal incorporation provides name protection across Canada and is better if you plan to expand nationally or want a stronger brand presence."
      },
      {
        q: "Should I set up a holding company?",
        a: "Holding companies can provide asset protection, tax deferral opportunities, and flexibility for future transactions. They're valuable if you expect significant retained earnings, own multiple businesses, or are planning for eventual sale. However, they add complexity and cost, so they're not right for every situation."
      },
      {
        q: "Can I incorporate myself using an online service?",
        a: "You can, but proceed carefully. Generic templates often miss provisions specific to Alberta law. For material matters—partners, tax-efficient structures, shareholder protections—professional drafting is worth the investment."
      }
    ]
  },
  {
    id: 'corporate',
    name: 'Corporate & Commercial',
    faqs: [
      {
        q: "What should be included in a shareholder agreement?",
        a: "A comprehensive shareholder agreement addresses: how major decisions are made (voting thresholds), restrictions on transferring shares (right of first refusal, tag-along, drag-along), what happens if a shareholder dies, becomes disabled, or wants to leave (buy-sell provisions), how the company is valued for buyouts, non-compete obligations, and dispute resolution mechanisms."
      },
      {
        q: "How much do commercial contracts cost to draft?",
        a: "It depends on complexity. A straightforward NDA might be $500-$1,500. A comprehensive MSA or distribution contract could be $3,000-$8,000. Complex technology licensing runs higher. We provide fixed-fee quotes for defined scope work."
      },
      {
        q: "Can I use contract templates I find online?",
        a: "You can, but proceed carefully. Generic templates often miss provisions specific to Alberta law. For material contracts—key customers, significant vendors—professional drafting is worth it."
      },
      {
        q: "Are non-compete agreements enforceable in Alberta?",
        a: "They can be, but Alberta courts scrutinize them carefully. To be enforceable, a non-compete must be reasonable in duration (typically 6-24 months), geographic scope, and activities restricted. Well-drafted non-solicitation clauses are often more reliably enforceable."
      },
      {
        q: "How often should we update our corporate minute book?",
        a: "At minimum, annually—to document annual meetings. Also update it for significant events: share issuances or transfers, changes to directors or officers, amendments to articles or bylaws, or major corporate decisions."
      }
    ]
  },
  {
    id: 'gc',
    name: 'Fractional General Counsel',
    faqs: [
      {
        q: "How is fractional GC different from just hiring a law firm?",
        a: "Traditional law firms work on specific matters—you call when something comes up. A fractional GC is an ongoing relationship where we're proactively involved in your business. We learn your operations, anticipate issues before they arise, and provide strategic input on business decisions—not just legal problems."
      },
      {
        q: "How much does fractional general counsel cost?",
        a: "Engagements typically range from $3,000 to $15,000 per month depending on scope and time commitment. Compare that to a full-time GC salary of $200,000-$350,000+ plus benefits. We'll discuss your needs and propose an arrangement that makes sense."
      },
      {
        q: "What if I need specialized legal help outside your expertise?",
        a: "Part of our role is coordinating specialists when needed—IP litigation, tax planning, immigration, etc. We maintain relationships with trusted specialists and manage those engagements on your behalf, ensuring quality work and cost control."
      },
      {
        q: "How quickly can you respond when something urgent comes up?",
        a: "For retainer clients, we commit to same-day response for urgent matters during business hours. Part of our job is to help you build systems that reduce genuine emergencies."
      },
      {
        q: "Can we start with a smaller engagement to see if it's a good fit?",
        a: "Absolutely. Many clients start with a legal audit or specific project before committing to an ongoing retainer. This lets both sides evaluate the working relationship."
      }
    ]
  },
  {
    id: 'disputes',
    name: 'Dispute Resolution',
    faqs: [
      {
        q: "What's the difference between mediation and arbitration?",
        a: "In mediation, a neutral mediator helps parties negotiate a resolution, but can't impose a decision—both sides must agree. In arbitration, the arbitrator hears evidence and arguments, then makes a binding decision. Mediation is collaborative and preserves relationships; arbitration is more like private court but typically faster and less formal than litigation."
      },
      {
        q: "How long does commercial dispute resolution typically take?",
        a: "It varies widely. Negotiated settlements can happen in weeks. Mediation typically takes 1-3 months from engagement to resolution. Arbitration usually takes 6-12 months. Traditional litigation can take 2-4 years to reach trial. The fastest path depends on both parties' willingness to engage constructively."
      },
      {
        q: "Should I try to resolve a dispute before involving lawyers?",
        a: "It depends on the situation. Early legal advice can help you understand your position, preserve evidence, and avoid statements that could hurt your case later. We can advise behind the scenes while you continue direct discussions, or take a more active role if needed. The key is getting advice before positions harden."
      },
      {
        q: "What if my contract requires arbitration?",
        a: "Most arbitration clauses are enforceable, meaning you typically must arbitrate rather than litigate in court. This isn't necessarily bad—arbitration is often faster, more private, and allows for industry-expert decision-makers. We can help you navigate the arbitration process effectively."
      },
      {
        q: "How much does dispute resolution cost?",
        a: "Costs vary enormously based on complexity and approach. A straightforward negotiated settlement might cost $5,000-$15,000. Mediation typically runs $15,000-$50,000. Arbitration can be $50,000-$200,000+. Litigation often exceeds $100,000 and can reach much higher. Early resolution almost always saves money."
      }
    ]
  },
  {
    id: 'jv',
    name: 'Joint Ventures',
    faqs: [
      {
        q: "What's the difference between a joint venture and a partnership?",
        a: "A partnership is typically an ongoing business relationship with shared profits, losses, and liability. A joint venture is usually project-specific or time-limited. JVs can be structured as separate corporations, contractual arrangements, or partnerships depending on goals, liability concerns, and tax considerations."
      },
      {
        q: "Should our joint venture be a separate legal entity?",
        a: "It depends. A separate entity (corporation or LP) provides liability protection and clearer separation of assets. But it adds complexity and cost. Contractual JVs are simpler but may expose parties to joint liability. We'll help you evaluate the trade-offs for your specific situation."
      },
      {
        q: "What happens if a JV partner wants to exit?",
        a: "This should be addressed in your JV agreement from the start—buy-sell provisions, rights of first refusal, put/call options, and valuation mechanisms. Without these, exits can become contentious and expensive. The more clearly you address this upfront, the smoother any future transition will be."
      },
      {
        q: "How do you handle intellectual property in a joint venture?",
        a: "IP is often the most complex JV issue. The agreement should clearly address: what background IP each party brings, who owns IP developed jointly, licensing terms for shared IP, what happens to IP when the JV ends, and non-compete restrictions on using JV-developed IP independently."
      }
    ]
  }
]
