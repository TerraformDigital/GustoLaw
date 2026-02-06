#!/usr/bin/env node
/**
 * Gusto Law – Full Content Seeder
 * Seeds: Services, Industries, Team Members, FAQs, Testimonials, Site Settings
 * Usage: node scripts/seed-all-content.mjs
 */

import { randomUUID } from 'crypto'
import { readFileSync } from 'fs'

// ── Load .env.local ─────────────────────────────────────────
const envFile = readFileSync('.env.local', 'utf-8')
for (const line of envFile.split('\n')) {
  const t = line.trim()
  if (!t || t.startsWith('#')) continue
  const i = t.indexOf('=')
  if (i === -1) continue
  process.env[t.slice(0, i)] = t.slice(i + 1)
}

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'
const token = process.env.SANITY_API_TOKEN

if (!projectId || !token) {
  console.error('❌ Missing NEXT_PUBLIC_SANITY_PROJECT_ID or SANITY_API_TOKEN in .env.local')
  process.exit(1)
}

const API = `https://${projectId}.api.sanity.io/v2024-01-01/data/mutate/${dataset}`

async function mutate(mutations) {
  const res = await fetch(API, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
    body: JSON.stringify({ mutations }),
  })
  if (!res.ok) throw new Error(`Sanity API ${res.status}: ${await res.text()}`)
  return res.json()
}

const key = () => randomUUID().slice(0, 8)

// Portable Text helpers
function block(text, style = 'normal') {
  return { _type: 'block', _key: key(), style, markDefs: [], children: [{ _type: 'span', _key: key(), text, marks: [] }] }
}

function blocks(paragraphs) {
  return paragraphs.map(p => {
    if (typeof p === 'string') return block(p)
    return block(p.text, p.style || 'normal')
  })
}

// ═══════════════════════════════════════════════════════════
// SITE SETTINGS
// ═══════════════════════════════════════════════════════════
const siteSettings = {
  _id: 'siteSettings',
  _type: 'siteSettings',
  firmName: 'Gusto Law',
  tagline: 'Corporate counsel for established Alberta businesses.',
  description: 'Corporate and commercial law firm in Calgary, Alberta. M&A, fractional general counsel, business formation, and commercial contracts for established Alberta businesses.',
  phone: '(403) 988-8382',
  email: 'inquiries@gustolaw.ca',
  address: 'Suite 206, 110 11 Avenue SW\nCalgary, AB T2R 0B8',
  googleMapsUrl: 'https://maps.google.com/?q=Suite+206+110+11+Avenue+SW+Calgary+AB+T2R+0B8',
  socialLinks: {
    linkedIn: 'https://www.linkedin.com/company/gustolaw',
  },
  elfsightWidgetId: '8aef0216-0f5f-4bc1-b830-2b0b367e556c',
  disclaimer: 'This content is for informational purposes only and does not constitute legal advice. For legal guidance tailored to your situation, please consult a qualified lawyer.',
}

// ═══════════════════════════════════════════════════════════
// SERVICES (6)
// ═══════════════════════════════════════════════════════════
const services = [
  {
    _id: 'service-business-formation',
    _type: 'service',
    title: 'Business Formation',
    slug: { _type: 'slug', current: 'business-formation' },
    shortDescription: 'Build your business on a solid legal foundation. From incorporation to shareholder agreements, we help Alberta entrepreneurs structure their companies for growth.',
    order: 1,
    overview: blocks([
      { text: 'Business Formation Services', style: 'h2' },
      'The decisions you make when forming your business will shape your company for years to come. From choosing between Alberta and federal incorporation to designing share structures and drafting shareholder agreements, every foundational decision carries long-term legal and tax implications.',
      'At Gusto Law, we help Calgary entrepreneurs and business owners build on solid legal foundations. Whether you are incorporating a new venture, restructuring an existing business, or bringing on partners, we provide practical guidance that protects your interests and supports your growth plans.',
      { text: 'Business Formation & Structure', style: 'h3' },
      'Our formation services cover Alberta and federal incorporation, articles of incorporation drafting, corporate bylaws and organizational resolutions, numbered vs. named company decisions, holding company structures, professional corporation setup, not-for-profit incorporation, partnership and sole proprietorship structures, extra-provincial registration, corporate reorganizations, and business name registration.',
      { text: 'Shareholder & Partnership Agreements', style: 'h3' },
      'We draft comprehensive shareholder agreements including unanimous shareholder agreements (USAs), buy-sell provisions and valuation mechanisms, rights of first refusal and tag-along/drag-along rights, voting arrangements and decision-making thresholds, non-competition and non-solicitation covenants, dispute resolution mechanisms, partnership agreements, and co-founder agreements for startups.',
      { text: 'Share Capital & Equity', style: 'h3' },
      'Our equity structuring services include multiple share class design, common and preferred share structures, stock option plans and equity incentives, convertible note and SAFE agreements, share subscription agreements, shareholder loan documentation, and cap table management guidance.',
    ]),
    seo: { _type: 'seo', metaTitle: 'Business Incorporation Calgary | Formation Lawyer', metaDescription: 'Calgary business incorporation and formation lawyers. Alberta & federal incorporation, shareholder agreements, corporate structuring for startups and SMEs.' },
  },
  {
    _id: 'service-corporate-commercial',
    _type: 'service',
    title: 'Corporate & Commercial Law',
    slug: { _type: 'slug', current: 'corporate-commercial' },
    shortDescription: 'The legal foundation for how your business operates, grows, and protects itself. From shareholder relationships to commercial contracts.',
    order: 2,
    overview: blocks([
      { text: 'Corporate & Commercial Services', style: 'h2' },
      'Corporate and commercial law forms the backbone of your business operations. From corporate governance and shareholder relationships to commercial contracts and technology agreements, these are the legal frameworks that define how your business functions day-to-day.',
      { text: 'Corporate Governance', style: 'h3' },
      'Our governance services include directors and officers duties and liability, annual corporate maintenance, corporate minute book management, shareholder meetings and resolutions, board advisory and governance best practices, corporate compliance programs, and regulatory filings.',
      { text: 'Commercial Contracts', style: 'h3' },
      'We draft and negotiate all types of commercial agreements including master service agreements, supply and distribution contracts, licensing agreements, franchise agreements, non-disclosure agreements, letters of intent and term sheets, and vendor and customer contracts.',
      { text: 'Technology & Software Contracts', style: 'h3' },
      'Our technology practice covers SaaS agreements and terms of service, software licensing agreements, reseller and distributor agreements, data processing agreements, API and integration agreements, technology development contracts, and cloud service agreements.',
      { text: 'Confidentiality & IP Protection', style: 'h3' },
      'We help protect your business assets through non-disclosure agreements, intellectual property assignment clauses, trade secret protection strategies, confidentiality policies, and employee IP agreements.',
    ]),
    seo: { _type: 'seo', metaTitle: 'Corporate Lawyer Calgary | Commercial Contracts', metaDescription: 'Calgary corporate and commercial lawyers. Shareholder agreements, business contracts, corporate governance, and technology agreements for Alberta businesses.' },
  },
  {
    _id: 'service-mergers-acquisitions',
    _type: 'service',
    title: 'Mergers & Acquisitions',
    slug: { _type: 'slug', current: 'mergers-acquisitions' },
    shortDescription: 'Strategic guidance through the complete M&A process—from initial due diligence to closing.',
    order: 3,
    overview: blocks([
      { text: 'Complete M&A Services', style: 'h2' },
      'Buying or selling a business is one of the largest financial decisions you will make. The M&A process involves complex legal, financial, and strategic considerations that require experienced counsel to navigate successfully.',
      { text: 'Transaction Advisory', style: 'h3' },
      'Our advisory services cover buy-side and sell-side representation, transaction structuring (asset vs. share purchase), letters of intent and term sheet negotiation, due diligence management and review, valuation support and purchase price analysis, earn-out and holdback structuring, working capital adjustments, representations and warranties insurance, regulatory approvals and compliance, confidential information memorandum review, data room management, competitive bid processes, management buyouts, leveraged acquisitions, and cross-border transaction support.',
      { text: 'Transaction Documentation', style: 'h3' },
      'We prepare all transaction documents including share purchase agreements, asset purchase agreements, amalgamation agreements, arrangement agreements, subscription agreements, escrow agreements, and transition services agreements.',
      { text: 'Post-Transaction Support', style: 'h3' },
      'After closing, we assist with corporate integration, employment transitions, contract assignments, regulatory filings, purchase price adjustments, and indemnity claims management.',
    ]),
    seo: { _type: 'seo', metaTitle: 'M&A Lawyer Calgary | Mergers & Acquisitions', metaDescription: 'Calgary M&A lawyers helping Alberta businesses buy, sell, and merge. Due diligence, deal structuring, SPAs, and transaction support.' },
  },
  {
    _id: 'service-fractional-general-counsel',
    _type: 'service',
    title: 'Fractional General Counsel',
    slug: { _type: 'slug', current: 'fractional-general-counsel' },
    shortDescription: 'Executive-level legal leadership for growing businesses—without the full-time cost.',
    order: 4,
    overview: blocks([
      { text: 'Fractional GC Services', style: 'h2' },
      'You have outgrown ad-hoc legal support, but you are not ready for a full-time GC. A fractional general counsel gives you executive-level legal leadership, proactive risk management, and a trusted advisor who understands your business—at a fraction of the cost.',
      { text: 'Strategic Legal Advisory', style: 'h3' },
      'Our strategic services include board and management advisory, business strategy legal review, risk assessment and mitigation, regulatory compliance guidance, corporate governance oversight, and stakeholder communication support.',
      { text: 'Contract Portfolio Management', style: 'h3' },
      'We manage your contract lifecycle including template development and standardization, contract review and negotiation, vendor and customer agreement management, renewal tracking and optimization, and contract dispute resolution.',
      { text: 'Compliance & Operations', style: 'h3' },
      'Our operational support covers regulatory compliance monitoring, corporate record maintenance, privacy law compliance (PIPEDA/PIPA), employment policy development, insurance review and coordination, corporate filings and annual maintenance, policy and procedure development, and litigation management and coordination.',
      { text: 'Employment & HR Support', style: 'h3' },
      'We provide employment law guidance including employment agreement drafting, termination and severance planning, non-compete and non-solicitation agreements, workplace policy development, HR compliance reviews, and employment standards advisory.',
    ]),
    seo: { _type: 'seo', metaTitle: 'Fractional General Counsel Calgary | Outsourced GC', metaDescription: 'Fractional general counsel services for growing Alberta businesses. Executive-level legal leadership without full-time cost.' },
  },
  {
    _id: 'service-dispute-resolution',
    _type: 'service',
    title: 'Dispute Resolution',
    slug: { _type: 'slug', current: 'dispute-resolution' },
    shortDescription: 'Business disputes are costly—in money, time, and relationships. We help resolve conflicts efficiently.',
    order: 5,
    overview: blocks([
      { text: 'Dispute Resolution Services', style: 'h2' },
      'Business disputes are about more than legal rights—they are about business outcomes. Whether you are facing a shareholder disagreement, contract dispute, or commercial conflict, the goal is to resolve the issue efficiently while preserving business relationships where possible.',
      { text: 'Commercial Disputes', style: 'h3' },
      'We handle contract breach claims, vendor and supplier disputes, construction and project disputes, partnership and joint venture conflicts, debt recovery, insurance disputes, real property disputes, and commercial lease disputes.',
      { text: 'Shareholder & Partnership Disputes', style: 'h3' },
      'Our shareholder dispute services cover oppression remedies, deadlock resolution, buy-sell enforcement, valuation disputes, breach of fiduciary duty claims, minority shareholder protection, derivative actions, and corporate governance disputes.',
      { text: 'Resolution Methods', style: 'h3' },
      'We employ multiple resolution approaches including direct negotiation, mediation, arbitration, litigation support, expert determination, settlement conferences, and collaborative resolution processes.',
    ]),
    seo: { _type: 'seo', metaTitle: 'Dispute Resolution Lawyer Calgary | Commercial Disputes', metaDescription: 'Calgary dispute resolution lawyers for commercial and shareholder disputes. Negotiation, mediation, arbitration, and litigation support.' },
  },
  {
    _id: 'service-joint-ventures',
    _type: 'service',
    title: 'Joint Ventures',
    slug: { _type: 'slug', current: 'joint-ventures' },
    shortDescription: 'Strategic collaborations require careful legal structuring. We help form joint ventures and partnerships that protect each party.',
    order: 6,
    overview: blocks([
      { text: 'Joint Venture Services', style: 'h2' },
      'Joint ventures can create tremendous value—or tremendous problems. The difference often comes down to how well the arrangement is structured from the beginning. We help Alberta businesses form joint ventures, partnerships, and strategic alliances that protect each party while enabling shared success.',
      { text: 'JV Structure & Formation', style: 'h3' },
      'Our JV formation services include joint venture agreement drafting, corporate vs. contractual JV analysis, governance structure design, capital contribution frameworks, profit and loss sharing arrangements, IP contribution and ownership terms, non-compete and exclusivity provisions, confidentiality frameworks, and regulatory compliance assessment.',
      { text: 'JV Governance & Operations', style: 'h3' },
      'We help manage ongoing JV operations including management committee structures, decision-making frameworks, deadlock resolution mechanisms, reporting and audit rights, capital call procedures, transfer and assignment restrictions, dispute resolution processes, and compliance monitoring.',
      { text: 'Exit & Restructuring', style: 'h3' },
      'Our exit planning covers buy-sell mechanisms, put and call options, tag-along and drag-along rights, valuation methodologies, wind-down procedures, asset distribution, IP reversion provisions, and post-termination obligations.',
    ]),
    seo: { _type: 'seo', metaTitle: 'Joint Venture Lawyer Calgary | JV Agreements', metaDescription: 'Calgary joint venture lawyers. JV agreements, partnership structures, consortium arrangements, and strategic alliance documentation.' },
  },
]

// ═══════════════════════════════════════════════════════════
// INDUSTRIES (2)
// ═══════════════════════════════════════════════════════════
const industries = [
  {
    _id: 'industry-oil-gas',
    _type: 'industry',
    title: 'Energy & Resources',
    slug: { _type: 'slug', current: 'oil-gas' },
    shortDescription: 'Strategic legal counsel for Alberta\'s oil and gas companies navigating complex regulatory, commercial, and environmental landscapes.',
    order: 1,
    overview: blocks([
      { text: 'Comprehensive Oil & Gas Legal Services', style: 'h2' },
      'Energy companies face unique legal complexity. From joint ventures and regulatory compliance to asset transactions and commercial agreements, the oil and gas sector demands lawyers who understand both the law and the industry.',
      { text: 'Joint Ventures & Partnerships', style: 'h3' },
      'We handle farmout agreements, joint operating agreements, area of mutual interest agreements, co-ownership arrangements, production sharing agreements, royalty agreements, overriding royalty interests, net profit interest arrangements, and joint venture restructuring.',
      { text: 'Regulatory & Compliance', style: 'h3' },
      'Our regulatory services cover AER applications and approvals, well licensing and transfers, surface lease negotiations, environmental compliance, Indigenous and Metis consultation, abandonment and reclamation obligations, pipeline approvals and crossings, Crown lease management, and provincial royalty compliance.',
      { text: 'Transactions & Corporate', style: 'h3' },
      'We support energy transactions including asset acquisitions and divestitures, corporate acquisitions and amalgamations, property due diligence reviews, Crown land sales and transfers, farm-in/farm-out arrangements, A&D purchase and sale agreements, title opinions and chain of title review, and regulatory transfer applications.',
      { text: 'Commercial Agreements', style: 'h3' },
      'Our commercial practice covers processing and gathering agreements, transportation agreements, gas marketing contracts, drilling and service contracts, equipment rental agreements, master service agreements, construction and EPC contracts, and field services agreements.',
    ]),
    challenges: [
      { _type: 'feature', _key: key(), title: 'Regulatory & Permitting Delays', description: 'Navigating AER approvals, environmental assessments, and Indigenous consultation requirements that can delay projects significantly.' },
      { _type: 'feature', _key: key(), title: 'JV & Farmout Disputes', description: 'Complex multi-party arrangements where misaligned incentives, operational disagreements, and cost allocation disputes arise frequently.' },
      { _type: 'feature', _key: key(), title: 'Environmental & Decommissioning Liability', description: 'Growing regulatory requirements around abandonment, reclamation, and orphan well obligations that create significant financial exposure.' },
    ],
    seo: { _type: 'seo', metaTitle: 'Oil & Gas Lawyer Calgary | Energy Legal Services Alberta', metaDescription: 'Calgary oil and gas lawyers for Alberta energy companies. JV agreements, regulatory compliance, asset sales, and energy sector legal counsel.' },
  },
  {
    _id: 'industry-technology',
    _type: 'industry',
    title: 'Technology & Software',
    slug: { _type: 'slug', current: 'technology' },
    shortDescription: 'Legal counsel built for the pace and complexity of tech. From SaaS agreements to venture financing.',
    order: 2,
    overview: blocks([
      { text: 'Technology Legal Services', style: 'h2' },
      'Tech companies need lawyers who understand tech. Calgary\'s technology sector is growing rapidly, and with that growth comes increasingly complex legal needs. From protecting your intellectual property to structuring venture financing, you need counsel that moves at the pace of your business.',
      { text: 'SaaS & Software Agreements', style: 'h3' },
      'We draft and negotiate SaaS terms of service, master subscription agreements, service level agreements, data processing agreements, acceptable use policies, API and integration agreements, white-label and OEM agreements, and software evaluation agreements.',
      { text: 'IP Protection & Licensing', style: 'h3' },
      'Our IP services include software licensing agreements, open source compliance, trademark registration and protection, trade secret protection programs, IP assignment agreements, technology transfer agreements, patent strategy and prosecution support, and copyright registration.',
      { text: 'Venture Financing & Corporate', style: 'h3' },
      'We support tech companies through seed and Series A financing, convertible notes and SAFEs, stock option plans and ESPPs, shareholder agreements for investors, board governance and advisory, corporate reorganizations, and founder agreements.',
      { text: 'Data Privacy & Compliance', style: 'h3' },
      'Our privacy practice covers PIPEDA and Alberta PIPA compliance, privacy policy drafting, data breach response planning, consent management frameworks, cross-border data transfer agreements, privacy impact assessments, employee privacy programs, and vendor data handling assessments.',
    ]),
    challenges: [
      { _type: 'feature', _key: key(), title: 'Speed Matters', description: 'Technology moves fast. You need legal counsel that can keep up with your pace without sacrificing quality or thoroughness.' },
      { _type: 'feature', _key: key(), title: 'IP Protection', description: 'Your intellectual property is your most valuable asset. Protecting it requires proactive strategies, not just reactive measures.' },
      { _type: 'feature', _key: key(), title: 'Investor Ready', description: 'Clean legal foundations make fundraising smoother. Investors expect proper corporate governance, IP assignment, and compliant agreements.' },
    ],
    seo: { _type: 'seo', metaTitle: 'Technology Lawyer Calgary | SaaS & Software Legal Services', metaDescription: 'Calgary technology lawyers for SaaS companies, software startups, and tech businesses. IP protection, venture financing, and data privacy compliance.' },
  },
]

// ═══════════════════════════════════════════════════════════
// TEAM MEMBERS (2)
// ═══════════════════════════════════════════════════════════
const teamMembers = [
  {
    _id: 'team-gus-lu',
    _type: 'teamMember',
    name: 'Gus Lu',
    slug: { _type: 'slug', current: 'gus-lu' },
    role: 'Founder',
    shortBio: 'Former TV producer turned corporate lawyer with deep M&A and general counsel experience.',
    fullBio: blocks([
      'Gus is the founder of Gusto Law and brings a unique perspective to corporate law practice. With a background as a television producer and film studies graduate from Yale University, Gus has always approached legal problems with creativity and pragmatism. His clients recognize and appreciate his ability to apply innovative solutions to complex technical legal challenges, making sophisticated corporate matters accessible and manageable.',
      'Over his career, Gus has served as general counsel for both U.S. and Canada-based private equity portfolio companies, gaining deep insight into the operational and strategic needs of growing businesses. He has extensive experience in securities and mergers & acquisitions law, having practiced in these areas at a top-ranked national firm. This background enables him to provide sophisticated counsel on high-stakes transactions while maintaining focus on practical business outcomes.',
      'Gus has guided entrepreneurs, emerging companies, and mid to large-cap enterprises through every stage of their business lifecycle. From initial formation and securing investment capital, through periods of aggressive growth and navigating challenges, to negotiating divestitures and executing complex business combinations, Gus brings tested expertise and strategic insight to help clients achieve their objectives efficiently and effectively.',
    ]),
    education: ['JD, University of Calgary, 2010', 'BA, Yale University, 2001'],
    admissions: ['Law Society of Alberta', 'Canadian Bar Association'],
    email: 'gus@gustolaw.ca',
    phone: '(403) 988-8382',
    order: 1,
    seo: { _type: 'seo', metaTitle: 'Gus Lu | Founder - Gusto Law Calgary', metaDescription: 'Gus Lu is the founder of Gusto Law, bringing M&A expertise and general counsel experience to Calgary businesses.' },
  },
  {
    _id: 'team-tyler-anthony',
    _type: 'teamMember',
    name: 'Tyler Anthony',
    slug: { _type: 'slug', current: 'tyler-anthony' },
    role: 'Associate',
    shortBio: 'Business-minded lawyer providing strategic legal support to startups and scale-ups.',
    fullBio: blocks([
      'Tyler is an accomplished corporate lawyer who provides practical and strategic legal support to emerging companies, entrepreneurs, and investors. With a deep understanding of business dynamics and growth challenges, Tyler advises clients across a diverse range of sectors including technology, software, SaaS, real estate, and professional services. His approach combines rigorous legal analysis with genuine business sense, helping his clients make informed decisions that drive growth.',
      'Before joining Gusto Law, Tyler worked at a top-tier national firm in Calgary, where he developed his expertise through acting for financial institutions and large corporate clients on sophisticated transactions and matters. This big firm experience gave him exposure to complex legal structures, institutional investor expectations, and enterprise-scale operations. He has leveraged this valuable foundation to specialize in serving the startup and scale-up community.',
      'Tyler brings the insight and rigor of big firm legal practice directly to the entrepreneurs and emerging companies that need it most. He combines institutional legal knowledge with a hands-on, business-first approach that makes him an ideal advisor for companies navigating growth, seeking investment, or planning strategic transactions.',
    ]),
    education: ['JD, University of Calgary, 2020', 'BSc, University of Calgary, 2014'],
    admissions: ['Law Society of Alberta', 'Canadian Bar Association'],
    order: 2,
    seo: { _type: 'seo', metaTitle: 'Tyler Anthony | Associate - Gusto Law Calgary', metaDescription: 'Tyler Anthony is an associate at Gusto Law, providing strategic legal support to startups and scale-ups in Calgary.' },
  },
]

// ═══════════════════════════════════════════════════════════
// FAQs (33)
// ═══════════════════════════════════════════════════════════
const faqs = [
  // General
  { _id: 'faq-general-1', _type: 'faq', question: 'How much does a consultation cost?', answer: blocks(['Initial consultations are $250 + GST for up to one hour. This allows us to understand your situation, provide initial guidance, and determine how we can help.']), category: 'general', order: 1 },
  { _id: 'faq-general-2', _type: 'faq', question: 'What areas of law does Gusto Law practice?', answer: blocks(['We focus on corporate and commercial law for established businesses. Our core services include mergers & acquisitions, fractional general counsel, business formation, corporate & commercial law, dispute resolution, and joint ventures.']), category: 'general', order: 2 },
  { _id: 'faq-general-3', _type: 'faq', question: 'Do you work with startups?', answer: blocks(['While we welcome businesses at all stages, our practice is focused on established businesses navigating growth, transactions, and complex commercial matters. If you are a startup with straightforward incorporation needs, we can help—but our sweet spot is businesses that have outgrown basic legal support.']), category: 'general', order: 3 },
  { _id: 'faq-general-4', _type: 'faq', question: 'What is your service area?', answer: blocks(['We are based in Calgary and primarily serve businesses across Alberta. For transactional work like M&A and corporate matters, we work with clients throughout Western Canada.']), category: 'general', order: 4 },

  // M&A
  { _id: 'faq-ma-1', _type: 'faq', question: "What's the difference between an asset purchase and a share purchase?", answer: blocks(['In a share purchase, you buy the company itself—including all assets, liabilities, contracts, and history. In an asset purchase, you select specific assets and liabilities to acquire, leaving the corporate shell behind. Share deals are often simpler and may have tax advantages for sellers, while asset deals give buyers more control over what they are acquiring. The right structure depends on tax considerations, liability concerns, and the nature of the business.']), category: 'mergers-acquisitions', order: 1 },
  { _id: 'faq-ma-2', _type: 'faq', question: 'How long does a typical M&A transaction take in Alberta?', answer: blocks(['Simple transactions can close in 4-8 weeks. More complex deals—those involving regulatory approvals, extensive due diligence, or complicated financing—typically take 3-6 months. Competitive auction processes or transactions requiring shareholder approvals may take longer.']), category: 'mergers-acquisitions', order: 2 },
  { _id: 'faq-ma-3', _type: 'faq', question: "What's the typical fee structure for M&A legal work?", answer: blocks(['We typically work on an hourly basis for M&A transactions, with regular billing and clear communication about budget. For certain aspects—like standard due diligence—we can provide fixed-fee arrangements. We will discuss fee structure and provide estimates during our initial consultation.']), category: 'mergers-acquisitions', order: 3 },
  { _id: 'faq-ma-4', _type: 'faq', question: 'Do I need both a lawyer and an accountant for an M&A transaction?', answer: blocks(['Yes, typically. Lawyers handle due diligence, transaction documents, and legal risk assessment. Accountants handle financial due diligence, quality of earnings analysis, tax structuring, and valuation support. We work closely with your accountants to ensure coordinated advice.']), category: 'mergers-acquisitions', order: 4 },
  { _id: 'faq-ma-5', _type: 'faq', question: 'What should I prepare before meeting with an M&A lawyer?', answer: blocks(['If you are selling, gather your corporate records, financial statements (3+ years), material contracts, employee information, and any known issues or liabilities. If you are buying, bring whatever information you have about the target, your acquisition criteria, financing plans, and timeline expectations.']), category: 'mergers-acquisitions', order: 5 },

  // Business Formation
  { _id: 'faq-bf-1', _type: 'faq', question: 'How much does it cost to incorporate in Alberta?', answer: blocks(['A basic Alberta incorporation with articles, bylaws, organizational resolutions, and initial share issuances typically costs $1,500-$2,500 in legal fees plus government filing fees (currently ~$275 for Alberta, ~$200 for federal). More complex structures cost more. We provide fixed-fee quotes after understanding your specific needs.']), category: 'business-formation', order: 1 },
  { _id: 'faq-bf-2', _type: 'faq', question: "Do I really need a shareholder agreement if I'm the only owner?", answer: blocks(['If you are the sole shareholder, a shareholder agreement is not necessary. However, if you ever plan to bring in partners, investors, or key employees with equity, you will want one in place before issuing additional shares.']), category: 'business-formation', order: 2 },
  { _id: 'faq-bf-3', _type: 'faq', question: "What's the difference between Alberta and federal incorporation?", answer: blocks(['Alberta incorporation is simpler, cheaper, and suitable if you will operate primarily in Alberta. Federal incorporation provides name protection across Canada and is better if you plan to expand nationally or want a stronger brand presence.']), category: 'business-formation', order: 3 },
  { _id: 'faq-bf-4', _type: 'faq', question: 'Should I set up a holding company?', answer: blocks(['Holding companies can provide asset protection, tax deferral opportunities, and flexibility for future transactions. They are valuable if you expect significant retained earnings, own multiple businesses, or are planning for eventual sale. However, they add complexity and cost, so they are not right for every situation.']), category: 'business-formation', order: 4 },
  { _id: 'faq-bf-5', _type: 'faq', question: 'Can I incorporate myself using an online service?', answer: blocks(['You can, but proceed carefully. Generic templates often miss provisions specific to Alberta law. For material matters—partners, tax-efficient structures, shareholder protections—professional drafting is worth the investment.']), category: 'business-formation', order: 5 },

  // Corporate & Commercial
  { _id: 'faq-cc-1', _type: 'faq', question: 'What should be included in a shareholder agreement?', answer: blocks(['A comprehensive shareholder agreement addresses: how major decisions are made (voting thresholds), restrictions on transferring shares (right of first refusal, tag-along, drag-along), what happens if a shareholder dies, becomes disabled, or wants to leave (buy-sell provisions), how the company is valued for buyouts, non-compete obligations, and dispute resolution mechanisms.']), category: 'corporate-commercial', order: 1 },
  { _id: 'faq-cc-2', _type: 'faq', question: 'How much do commercial contracts cost to draft?', answer: blocks(['It depends on complexity. A straightforward NDA might be $500-$1,500. A comprehensive MSA or distribution contract could be $3,000-$8,000. Complex technology licensing runs higher. We provide fixed-fee quotes for defined scope work.']), category: 'corporate-commercial', order: 2 },
  { _id: 'faq-cc-3', _type: 'faq', question: 'Can I use contract templates I find online?', answer: blocks(['You can, but proceed carefully. Generic templates often miss provisions specific to Alberta law. For material contracts—key customers, significant vendors—professional drafting is worth it.']), category: 'corporate-commercial', order: 3 },
  { _id: 'faq-cc-4', _type: 'faq', question: 'Are non-compete agreements enforceable in Alberta?', answer: blocks(['They can be, but Alberta courts scrutinize them carefully. To be enforceable, a non-compete must be reasonable in duration (typically 6-24 months), geographic scope, and activities restricted. Well-drafted non-solicitation clauses are often more reliably enforceable.']), category: 'corporate-commercial', order: 4 },
  { _id: 'faq-cc-5', _type: 'faq', question: 'How often should we update our corporate minute book?', answer: blocks(['At minimum, annually—to document annual meetings. Also update it for significant events: share issuances or transfers, changes to directors or officers, amendments to articles or bylaws, or major corporate decisions.']), category: 'corporate-commercial', order: 5 },

  // Fractional GC
  { _id: 'faq-gc-1', _type: 'faq', question: 'How is fractional GC different from just hiring a law firm?', answer: blocks(['Traditional law firms work on specific matters—you call when something comes up. A fractional GC is an ongoing relationship where we are proactively involved in your business. We learn your operations, anticipate issues before they arise, and provide strategic input on business decisions—not just legal problems.']), category: 'fractional-gc', order: 1 },
  { _id: 'faq-gc-2', _type: 'faq', question: 'How much does fractional general counsel cost?', answer: blocks(['Engagements typically range from $3,000 to $15,000 per month depending on scope and time commitment. Compare that to a full-time GC salary of $200,000-$350,000+ plus benefits. We will discuss your needs and propose an arrangement that makes sense.']), category: 'fractional-gc', order: 2 },
  { _id: 'faq-gc-3', _type: 'faq', question: 'What if I need specialized legal help outside your expertise?', answer: blocks(['Part of our role is coordinating specialists when needed—IP litigation, tax planning, immigration, etc. We maintain relationships with trusted specialists and manage those engagements on your behalf, ensuring quality work and cost control.']), category: 'fractional-gc', order: 3 },
  { _id: 'faq-gc-4', _type: 'faq', question: 'How quickly can you respond when something urgent comes up?', answer: blocks(['For retainer clients, we commit to same-day response for urgent matters during business hours. Part of our job is to help you build systems that reduce genuine emergencies.']), category: 'fractional-gc', order: 4 },
  { _id: 'faq-gc-5', _type: 'faq', question: 'Can we start with a smaller engagement to see if it is a good fit?', answer: blocks(['Absolutely. Many clients start with a legal audit or specific project before committing to an ongoing retainer. This lets both sides evaluate the working relationship.']), category: 'fractional-gc', order: 5 },

  // Dispute Resolution
  { _id: 'faq-dr-1', _type: 'faq', question: "What's the difference between mediation and arbitration?", answer: blocks(['In mediation, a neutral mediator helps parties negotiate a resolution, but cannot impose a decision—both sides must agree. In arbitration, the arbitrator hears evidence and arguments, then makes a binding decision. Mediation is collaborative and preserves relationships; arbitration is more like private court but typically faster and less formal than litigation.']), category: 'dispute-resolution', order: 1 },
  { _id: 'faq-dr-2', _type: 'faq', question: 'How long does commercial dispute resolution typically take?', answer: blocks(['It varies widely. Negotiated settlements can happen in weeks. Mediation typically takes 1-3 months from engagement to resolution. Arbitration usually takes 6-12 months. Traditional litigation can take 2-4 years to reach trial. The fastest path depends on both parties\' willingness to engage constructively.']), category: 'dispute-resolution', order: 2 },
  { _id: 'faq-dr-3', _type: 'faq', question: 'Should I try to resolve a dispute before involving lawyers?', answer: blocks(['It depends on the situation. Early legal advice can help you understand your position, preserve evidence, and avoid statements that could hurt your case later. We can advise behind the scenes while you continue direct discussions, or take a more active role if needed.']), category: 'dispute-resolution', order: 3 },
  { _id: 'faq-dr-4', _type: 'faq', question: 'What if my contract requires arbitration?', answer: blocks(['Most arbitration clauses are enforceable, meaning you typically must arbitrate rather than litigate in court. This is not necessarily bad—arbitration is often faster, more private, and allows for industry-expert decision-makers. We can help you navigate the arbitration process effectively.']), category: 'dispute-resolution', order: 4 },
  { _id: 'faq-dr-5', _type: 'faq', question: 'How much does dispute resolution cost?', answer: blocks(['Costs vary enormously based on complexity and approach. A straightforward negotiated settlement might cost $5,000-$15,000. Mediation typically runs $15,000-$50,000. Arbitration can be $50,000-$200,000+. Litigation often exceeds $100,000. Early resolution almost always saves money.']), category: 'dispute-resolution', order: 5 },

  // Joint Ventures
  { _id: 'faq-jv-1', _type: 'faq', question: "What's the difference between a joint venture and a partnership?", answer: blocks(['A partnership is typically an ongoing business relationship with shared profits, losses, and liability. A joint venture is usually project-specific or time-limited. JVs can be structured as separate corporations, contractual arrangements, or partnerships depending on goals, liability concerns, and tax considerations.']), category: 'general', order: 10 },
  { _id: 'faq-jv-2', _type: 'faq', question: 'Should our joint venture be a separate legal entity?', answer: blocks(['It depends. A separate entity (corporation or LP) provides liability protection and clearer separation of assets. But it adds complexity and cost. Contractual JVs are simpler but may expose parties to joint liability. We will help you evaluate the trade-offs for your specific situation.']), category: 'general', order: 11 },
  { _id: 'faq-jv-3', _type: 'faq', question: 'What happens if a JV partner wants to exit?', answer: blocks(['This should be addressed in your JV agreement from the start—buy-sell provisions, rights of first refusal, put/call options, and valuation mechanisms. Without these, exits can become contentious and expensive.']), category: 'general', order: 12 },
  { _id: 'faq-jv-4', _type: 'faq', question: 'How do you handle intellectual property in a joint venture?', answer: blocks(['IP is often the most complex JV issue. The agreement should clearly address: what background IP each party brings, who owns IP developed jointly, licensing terms for shared IP, what happens to IP when the JV ends, and non-compete restrictions on using JV-developed IP independently.']), category: 'general', order: 13 },
]

// ═══════════════════════════════════════════════════════════
// TESTIMONIAL (1 — the one hardcoded)
// ═══════════════════════════════════════════════════════════
const testimonials = [
  {
    _id: 'testimonial-1',
    _type: 'testimonial',
    quote: 'In all cases I have found him to be professional, responsive, responsible, knowledgeable, and competent and his advice to be sound. His character and integrity are at all times unimpeachable.',
    attribution: 'Tech Startup Founder',
    company: 'Calgary',
    source: 'google',
    rating: 5,
    featured: true,
  },
]

// ═══════════════════════════════════════════════════════════
// RUN
// ═══════════════════════════════════════════════════════════
async function seed() {
  const all = [
    siteSettings,
    ...services,
    ...industries,
    ...teamMembers,
    ...faqs,
    ...testimonials,
  ]

  console.log('🌱 Seeding all content into Sanity...')
  console.log(`   Project: ${projectId} | Dataset: ${dataset}`)
  console.log(`   Total documents: ${all.length}`)
  console.log('')

  const mutations = all.map(doc => ({ createOrReplace: doc }))

  // Sanity API has a payload limit, batch in groups of 20
  const batchSize = 20
  for (let i = 0; i < mutations.length; i += batchSize) {
    const batch = mutations.slice(i, i + batchSize)
    await mutate(batch)
    console.log(`  ✅ Batch ${Math.floor(i / batchSize) + 1}: ${batch.length} documents`)
  }

  console.log('')
  console.log('============================================================')
  console.log(`✅ ${all.length} documents seeded successfully!`)
  console.log('')
  console.log('  • 1 Site Settings')
  console.log(`  • ${services.length} Services`)
  console.log(`  • ${industries.length} Industries`)
  console.log(`  • ${teamMembers.length} Team Members`)
  console.log(`  • ${faqs.length} FAQs`)
  console.log(`  • ${testimonials.length} Testimonials`)
  console.log('')
  console.log('Visit /studio to manage all content in Sanity Studio.')
  console.log('============================================================')
}

seed().catch(err => {
  console.error('❌ Seeding failed:', err.message)
  process.exit(1)
})
