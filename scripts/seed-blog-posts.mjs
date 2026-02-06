#!/usr/bin/env node
/**
 * ============================================================
 * Gusto Law – Sanity Blog Post Seeder
 * ============================================================
 *
 * Seeds all 13 existing blog posts into Sanity CMS as
 * Portable Text documents. Run once to migrate content from
 * hard-coded Next.js pages to the Sanity dataset.
 *
 * Prerequisites:
 *   1. Create a Sanity API token with write access:
 *      https://www.sanity.io/manage/project/feovtznz → API → Tokens
 *   2. Set env vars (or create .env.local):
 *        NEXT_PUBLIC_SANITY_PROJECT_ID=feovtznz
 *        NEXT_PUBLIC_SANITY_DATASET=production
 *        SANITY_API_TOKEN=<your-write-token>
 *
 * Usage:
 *   node scripts/seed-blog-posts.mjs
 *
 * What it does:
 *   - Creates/updates 13 blogPost documents in Sanity
 *   - Uses createOrReplace so it's safe to re-run
 *   - Stores featured images as external URL references
 *   - Converts article content to Portable Text blocks
 *   - Includes FAQ items and SEO metadata
 * ============================================================
 */

import { createClient } from '@sanity/client'
import dotenv from 'dotenv'
import { randomUUID } from 'crypto'

// Load env vars from .env.local
dotenv.config({ path: '.env.local' })

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'
const token = process.env.SANITY_API_TOKEN

if (!projectId || !token) {
  console.error('❌ Missing environment variables.')
  console.error('   Required: NEXT_PUBLIC_SANITY_PROJECT_ID, SANITY_API_TOKEN')
  console.error('   Create a write token at: https://www.sanity.io/manage/project/feovtznz')
  process.exit(1)
}

const client = createClient({
  projectId,
  dataset,
  token,
  apiVersion: '2024-01-01',
  useCdn: false,
})

// ============================================================
// Helper: Portable Text block builder
// ============================================================
function textBlock(text, style = 'normal') {
  return {
    _type: 'block',
    _key: randomUUID().slice(0, 8),
    style,
    children: [{ _type: 'span', _key: randomUUID().slice(0, 8), text, marks: [] }],
    markDefs: [],
  }
}

function richTextBlock(children, style = 'normal', markDefs = []) {
  return {
    _type: 'block',
    _key: randomUUID().slice(0, 8),
    style,
    children,
    markDefs,
  }
}

function span(text, marks = []) {
  return { _type: 'span', _key: randomUUID().slice(0, 8), text, marks }
}

function linkMarkDef(key, href) {
  return { _type: 'link', _key: key, href }
}

function listItem(text, listItem = 'bullet', level = 1) {
  return {
    _type: 'block',
    _key: randomUUID().slice(0, 8),
    style: 'normal',
    listItem,
    level,
    children: [{ _type: 'span', _key: randomUUID().slice(0, 8), text, marks: [] }],
    markDefs: [],
  }
}

// ============================================================
// Blog Post Data – all 13 posts
// ============================================================

const blogPosts = [
  // ── 1. Selling Your Business Calgary ──────────────────────
  {
    _id: 'blog-selling-your-business-calgary',
    title: 'Selling Your Business in Calgary: Complete M&A Process Guide',
    subtitle: 'Navigate every stage of the business sale process with expert legal guidance.',
    slug: 'selling-your-business-calgary',
    excerpt: 'Complete guide to selling your business in Calgary. Learn about M&A valuation, due diligence, purchase agreements, tax considerations, and closing. Expert legal insights for Alberta business owners.',
    publishedAt: '2026-01-15T00:00:00Z',
    readTime: '12 min read',
    categories: ['mergers-acquisitions'],
    featuredImageUrl: 'https://gustolaw.ca/wp-content/uploads/2022/01/corporate-lawyer-scaled.jpg',
    seo: {
      metaTitle: 'Selling Your Business in Calgary: Complete M&A Process Guide',
      metaDescription: 'Complete guide to selling your business in Calgary. Learn about M&A valuation, due diligence, purchase agreements, tax considerations, and closing.',
    },
    faqItems: [
      { question: 'How long does the business sale process take in Alberta?', answer: 'A typical M&A process in Alberta takes 3-9 months from initial buyer interest to closing, depending on the complexity of your business, industry, and the buyer\'s internal approval processes. Smaller transactions may close faster, while complex deals with multiple buyers may take longer.' },
      { question: 'What is the difference between an asset sale and a share sale in Calgary?', answer: 'In an asset sale, the buyer purchases specific assets of your business, which may offer tax advantages but requires more detailed asset-by-asset valuation. In a share sale, the buyer purchases the company shares themselves, which is often simpler but may result in different tax consequences. Your accountant and M&A lawyer can help determine which structure works best.' },
      { question: 'What happens during due diligence when selling my business?', answer: 'Due diligence is the buyer\'s investigation of your business. They review financial records (3-5 years), all contracts and agreements, employee records, intellectual property, litigation history, tax filings, insurance policies, and operational details. Being organized and transparent during this phase accelerates the process and builds buyer confidence.' },
      { question: 'Should I hire an M&A lawyer when selling my business?', answer: 'Yes. An M&A lawyer protects your interests by negotiating the purchase agreement, ensuring proper representations and warranties, managing indemnity periods, and identifying tax and legal risks. Their expertise often results in better deal terms that far exceed their fees.' },
    ],
    content: [
      textBlock('Selling a business is one of the most significant financial decisions you will ever make. Whether you have spent years building a local Calgary enterprise or grown a company with national reach, the process of divesting requires careful planning, expert guidance, and attention to detail at every stage.', 'normal'),
      textBlock('This guide walks you through the complete M&A (mergers and acquisitions) process from the perspective of a seller in Alberta, helping you understand what to expect and how to maximize value.', 'normal'),
      textBlock('Understanding the M&A Landscape in Alberta', 'h2'),
      textBlock('Alberta\'s business landscape has evolved significantly over the past decade. While oil and gas transactions remain a major part of the M&A market, technology companies, professional services firms, and manufacturing businesses are increasingly active in deal-making. Calgary\'s growing tech ecosystem and diversified economy create opportunities for sellers across multiple sectors.', 'normal'),
      textBlock('Pre-Sale Preparation: Setting the Foundation', 'h2'),
      textBlock('The most successful business sales begin with thorough preparation, often 12-24 months before you go to market. Key preparation steps include organizing financial records, resolving any outstanding legal disputes, strengthening customer contracts, and documenting key processes and intellectual property.', 'normal'),
      textBlock('A clean set of financial statements—ideally reviewed or audited—is essential. Buyers will scrutinize your revenue trends, profit margins, customer concentration, and working capital needs. The better organized your records, the smoother the due diligence process.', 'normal'),
      textBlock('Business Valuation Methods', 'h2'),
      textBlock('Understanding your company\'s value is critical before engaging with potential buyers. Common valuation approaches include earnings multiples (EBITDA-based), discounted cash flow (DCF) analysis, comparable transactions, and asset-based valuations. In Alberta, industry-specific factors like commodity exposure, regulatory environment, and workforce dynamics all influence valuation.', 'normal'),
      textBlock('The Letter of Intent (LOI)', 'h2'),
      textBlock('Once a buyer expresses serious interest, the next step is typically a Letter of Intent. The LOI outlines the proposed purchase price, deal structure (asset sale vs. share sale), key conditions, exclusivity period, and timeline. While generally non-binding on price, the LOI sets the framework for negotiations and signals commitment from both parties.', 'normal'),
      textBlock('Due Diligence: What Buyers Examine', 'h2'),
      textBlock('Due diligence is the most intensive phase of the sale process. Buyers and their advisors will review your financial statements and tax returns for the past 3-5 years, all material contracts, customer and supplier agreements, employee records and benefit plans, intellectual property portfolio, real property and equipment, insurance coverage, litigation history, and regulatory compliance.', 'normal'),
      textBlock('Being proactive and transparent during due diligence builds buyer confidence and helps avoid last-minute price reductions or deal collapses.', 'normal'),
      textBlock('Asset Sale vs. Share Sale', 'h2'),
      textBlock('One of the most important structural decisions is whether to proceed with an asset sale or a share sale. In an asset sale, the buyer cherry-picks specific assets and assumes specific liabilities. In a share sale, the buyer acquires the entire corporate entity. Each structure has different tax implications under the Income Tax Act (Canada), and the right choice depends on your specific circumstances.', 'normal'),
      textBlock('The Purchase Agreement', 'h2'),
      textBlock('The purchase agreement is the definitive legal document governing the sale. It includes the purchase price and payment terms, representations and warranties from both parties, indemnification provisions, closing conditions, non-competition and non-solicitation covenants, and transition arrangements. An experienced M&A lawyer is essential for negotiating terms that protect your interests.', 'normal'),
      textBlock('Tax Considerations for Alberta Sellers', 'h2'),
      textBlock('Tax planning should be integrated into the sale process from the beginning. Key considerations include the lifetime capital gains exemption (LCGE) for qualifying small business corporation shares, capital gains treatment, use of holding companies for tax deferral, and the impact of the deal structure on your overall tax position. Work closely with both your accountant and lawyer to optimize the tax outcome.', 'normal'),
      textBlock('Closing and Post-Closing', 'h2'),
      textBlock('The closing is where ownership officially transfers. Typical closing steps include executing final documents, transferring funds, delivering share certificates or asset bills of sale, filing regulatory notices, and transitioning key relationships. Many deals also include a transition period where the seller remains involved to ensure continuity.', 'normal'),
      textBlock('How Gusto Law Can Help', 'h2'),
      textBlock('At Gusto Law, we guide Calgary business owners through every stage of the sale process. From pre-sale preparation and valuation support to negotiating purchase agreements and managing closing, our M&A team provides the strategic legal counsel you need to achieve the best possible outcome.', 'normal'),
    ],
  },

  // ── 2. Fractional General Counsel Calgary ────────────────
  {
    _id: 'blog-fractional-general-counsel-calgary',
    title: 'Fractional General Counsel Calgary | Part-Time Legal Leadership',
    subtitle: 'Executive-level legal guidance without the full-time cost.',
    slug: 'fractional-general-counsel-calgary',
    excerpt: 'Discover how fractional general counsel services provide executive-level legal guidance for growing Alberta businesses. Cost-effective alternative to full-time in-house lawyers.',
    publishedAt: '2026-01-15T00:00:00Z',
    readTime: '12 min read',
    categories: ['general-counsel'],
    featuredImageUrl: 'https://gustolaw.ca/wp-content/uploads/2022/01/General-Counsel-scaled.jpg',
    seo: {
      metaTitle: 'Fractional General Counsel Calgary | Part-Time Legal Leadership',
      metaDescription: 'Discover how fractional general counsel services provide executive-level legal guidance for growing Alberta businesses. Cost-effective alternative to full-time in-house lawyers.',
    },
    faqItems: [
      { question: 'What is the difference between a fractional general counsel and outside counsel?', answer: 'A fractional general counsel acts as your internal legal advisor, attending meetings, understanding your business strategy, and providing ongoing guidance. Outside counsel is typically engaged for specific legal matters. A fractional GC fills the gap, providing continuity and strategic direction across all legal issues.' },
      { question: 'How much does fractional general counsel cost compared to a full-time GC?', answer: 'A full-time in-house general counsel in Calgary typically costs $150,000-$250,000+ annually. Fractional GC arrangements range from $3,000-$8,000 monthly, depending on hours and complexity. This represents 30-50% of full-time costs while providing flexibility.' },
      { question: 'What industries benefit most from fractional general counsel?', answer: 'Technology startups, professional services firms, real estate companies, and mid-market manufacturing businesses commonly use fractional GC services. Any growing business facing increasing legal complexity, regulatory requirements, or strategic decisions can benefit.' },
      { question: 'How do I find the right fractional general counsel in Alberta?', answer: 'Look for lawyers with in-house experience, understanding of Alberta regulations (including the Alberta Business Corporations Act), and experience in your industry. Evaluate their ability to coordinate specialists, manage legal timelines, and align with your business goals.' },
    ],
    content: [
      textBlock('As your business grows, legal needs become more complex. Contracts multiply, regulatory requirements evolve, and strategic decisions increasingly carry legal implications. Yet hiring a full-time general counsel may not make financial sense. That is where fractional general counsel services come in.', 'normal'),
      textBlock('What Is Fractional General Counsel?', 'h2'),
      textBlock('A fractional general counsel (fractional GC) is an experienced lawyer who serves as your company\'s in-house legal advisor on a part-time or contracted basis. Unlike traditional outside counsel who respond to specific legal issues, a fractional GC embeds in your business, attending management meetings, understanding your operations, and providing proactive legal guidance across all areas.', 'normal'),
      textBlock('Why Growing Businesses Choose Fractional GC', 'h2'),
      textBlock('The traditional model forces businesses into a binary choice: manage without dedicated legal leadership or commit to a full-time hire costing $150,000-$250,000+ per year. Fractional GC eliminates this tradeoff by providing executive-level legal expertise at a fraction of the cost, typically $3,000-$8,000 per month depending on scope.', 'normal'),
      textBlock('Key benefits include strategic legal oversight aligned with business goals, proactive risk identification before problems arise, coordination of specialist lawyers when needed, consistent legal perspective across all business decisions, and cost savings of 50-70% compared to full-time in-house counsel.', 'normal'),
      textBlock('What Does a Fractional GC Actually Do?', 'h2'),
      textBlock('A fractional GC typically handles contract review and negotiation, corporate governance and board support, regulatory compliance monitoring, employment law matters, intellectual property strategy, dispute prevention and resolution, and M&A and strategic transaction support.', 'normal'),
      textBlock('The Calgary Business Context', 'h2'),
      textBlock('Calgary\'s business environment presents unique legal considerations. From oil and gas regulatory frameworks to technology sector growth, Alberta businesses operate in a dynamic legal landscape. A fractional GC with local expertise understands the Alberta Business Corporations Act (ABCA), provincial employment standards, industry-specific regulations, and the local business ecosystem.', 'normal'),
      textBlock('Signs Your Business Needs a Fractional GC', 'h2'),
      textBlock('Consider fractional general counsel if you are spending more than $5,000 per month on outside legal fees, your business is navigating a growth phase or strategic transaction, you need consistent legal advice but cannot justify a full-time hire, legal issues are taking up too much of your time as a founder or CEO, or you are entering new markets or launching new products.', 'normal'),
      textBlock('How the Engagement Works', 'h2'),
      textBlock('Fractional GC arrangements are flexible by design. Common models include monthly retainer with a set number of hours, project-based engagement for specific initiatives, and on-demand advisory with a minimum commitment. The right model depends on your business stage, industry, and the complexity of your legal needs.', 'normal'),
      textBlock('Gusto Law\'s Fractional GC Services', 'h2'),
      textBlock('At Gusto Law, our fractional general counsel services are designed for Calgary and Alberta businesses that need strategic legal leadership without the overhead of a full-time hire. We become an extension of your team, providing the legal guidance that helps you grow confidently.', 'normal'),
    ],
  },

  // ── 3. Alberta vs. Federal Incorporation ─────────────────
  {
    _id: 'blog-alberta-vs-federal-incorporation',
    title: 'Alberta vs. Federal Incorporation: Which Is Right for Your Business?',
    subtitle: 'Comparing provincial and federal incorporation for Canadian entrepreneurs.',
    slug: 'alberta-vs-federal-incorporation',
    excerpt: 'Compare Alberta provincial incorporation (ABCA) vs. federal incorporation (CBCA) in Canada. Learn costs, benefits, tax implications, and how to decide which structure is best for your Calgary business.',
    publishedAt: '2026-01-15T00:00:00Z',
    readTime: '12 min read',
    categories: ['business-formation'],
    featuredImageUrl: 'https://gustolaw.ca/wp-content/uploads/2022/01/Business-Formation-scaled.jpg',
    seo: {
      metaTitle: 'Alberta vs. Federal Incorporation: Which Is Right for Your Business?',
      metaDescription: 'Compare Alberta provincial incorporation (ABCA) vs. federal incorporation (CBCA) in Canada. Learn costs, benefits, tax implications, and how to decide.',
    },
    faqItems: [
      { question: 'What is the main difference between Alberta and federal incorporation?', answer: 'Alberta incorporation (under the ABCA) provides name protection within Alberta and is governed by provincial law, while federal incorporation (under the CBCA) provides name protection across all of Canada and is governed by federal law. Federal incorporation allows you to operate nationally with a protected name.' },
      { question: 'How much does it cost to incorporate in Alberta versus federally?', answer: 'Alberta provincial incorporation typically costs between $200-$400 in government fees, while federal incorporation costs between $200-$300 in government fees. However, total costs depend on whether you use a lawyer and the complexity of your corporate structure.' },
      { question: 'Do I need to do a NUANS search before incorporating?', answer: 'Yes, a NUANS (Nuisance and Unlikelihood of Confusion Search) is required for federal incorporation in Canada. For Alberta incorporation, a name search through the Alberta Corporate Registry is required. NUANS ensures your chosen business name is not similar to existing registered names.' },
      { question: 'Can I incorporate federally and still operate only in Alberta?', answer: 'Yes, you can incorporate federally and operate only in Alberta. There is no requirement to operate nationally. However, if you anticipate expanding to other provinces in the future, federal incorporation may be more cost-effective than provincial incorporation with extra-provincial registration.' },
    ],
    content: [
      textBlock('One of the first decisions Canadian entrepreneurs face when starting a business is whether to incorporate provincially in Alberta or federally under the Canada Business Corporations Act. Both routes create a legally distinct corporation, but they differ in important ways that can affect your operations, costs, and growth plans.', 'normal'),
      textBlock('Understanding Incorporation in Canada', 'h2'),
      textBlock('Incorporation creates a separate legal entity—a corporation—that is distinct from its owners. This provides limited liability protection, tax advantages, and a professional structure for doing business. In Canada, you can incorporate at either the provincial or federal level.', 'normal'),
      textBlock('Alberta Provincial Incorporation (ABCA)', 'h2'),
      textBlock('Incorporating in Alberta means your corporation is governed by the Alberta Business Corporations Act (ABCA). The process is handled through the Alberta Corporate Registry, and your corporate name is protected within the province.', 'normal'),
      textBlock('Key features of Alberta incorporation include lower initial filing fees ($200-$400), name protection within Alberta, governance under the ABCA, and no requirement for a Canadian resident director. Alberta\'s incorporation process is generally straightforward and can often be completed within a few business days.', 'normal'),
      textBlock('Federal Incorporation (CBCA)', 'h2'),
      textBlock('Federal incorporation is governed by the Canada Business Corporations Act (CBCA) and is handled through Corporations Canada. Your corporate name receives protection across all provinces and territories.', 'normal'),
      textBlock('Key features of federal incorporation include national name protection, governance under the CBCA, the ability to operate in any province without extra-provincial registration of the corporate name, and a requirement that at least 25% of directors be Canadian residents.', 'normal'),
      textBlock('Comparing Costs', 'h2'),
      textBlock('The government fees for both options are relatively modest. Alberta incorporation runs $200-$400, while federal incorporation is approximately $200-$300. The larger cost consideration is professional fees for legal advice on corporate structure, articles of incorporation, and shareholder agreements.', 'normal'),
      textBlock('Tax Implications', 'h2'),
      textBlock('Both Alberta and federally incorporated companies pay the same taxes. The tax treatment of your corporation depends on where it operates and earns income, not where it is incorporated. Both types of corporations are eligible for the small business deduction and other federal and provincial tax credits.', 'normal'),
      textBlock('Extra-Provincial Registration', 'h2'),
      textBlock('If your Alberta-incorporated business wants to operate in another province, you will need to register as an extra-provincial corporation in that jurisdiction. This involves additional fees and compliance requirements. Federally incorporated businesses can operate in any province, but may still need to register for provincial tax and regulatory purposes.', 'normal'),
      textBlock('Making the Right Decision', 'h2'),
      textBlock('Choose Alberta incorporation if you plan to operate primarily within Alberta, want lower initial costs, prefer simpler governance requirements, and do not need national name protection. Choose federal incorporation if you plan to operate nationally, want name protection across Canada, need to raise capital from investors in multiple provinces, or anticipate cross-border business activities.', 'normal'),
      textBlock('Common Misconceptions', 'h2'),
      textBlock('There are several myths about incorporation that can lead to poor decisions. Federal incorporation does not make your business "bigger" or "more legitimate." Alberta incorporation does not limit you to operating only in Alberta. Neither option automatically provides better tax treatment. The best choice depends entirely on your specific business needs and growth plans.', 'normal'),
      textBlock('Next Steps', 'h2'),
      textBlock('If you are ready to incorporate your business in Alberta or Canada, the team at Gusto Law can help you choose the right structure, prepare your articles of incorporation, draft shareholder agreements, and set up your corporate records. We make the process simple so you can focus on building your business.', 'normal'),
    ],
  },

  // ── 4. Do You Need a Shareholder Agreement ───────────────
  {
    _id: 'blog-do-you-need-a-shareholder-agreement',
    title: 'Do You Need a Shareholder Agreement?',
    subtitle: 'Protecting your business interests through proper corporate governance.',
    slug: 'do-you-need-a-shareholder-agreement',
    excerpt: 'Comprehensive guide to shareholder agreements in Alberta. Learn why they\'re essential, what provisions to include, and how to protect your business interests in Calgary.',
    publishedAt: '2026-01-15T00:00:00Z',
    readTime: '12 min read',
    categories: ['business-formation'],
    featuredImageUrl: 'https://gustolaw.ca/wp-content/uploads/2022/01/corporate-lawyer-scaled.jpg',
    seo: {
      metaTitle: 'Do You Need a Shareholder Agreement?',
      metaDescription: 'Comprehensive guide to shareholder agreements in Alberta. Learn why they\'re essential, what provisions to include, and how to protect your business interests.',
    },
    faqItems: [
      { question: 'What is a shareholder agreement?', answer: 'A shareholder agreement is a legally binding contract between all shareholders of a corporation that governs how the company is managed, how decisions are made, and how shareholder disputes are resolved. It goes beyond what is required by the Alberta Business Corporations Act (ABCA) and provides customized governance structures suited to your specific business situation.' },
      { question: 'Do I need a shareholder agreement in Alberta?', answer: 'If your corporation has more than one shareholder, a shareholder agreement is strongly recommended. While not legally required by the ABCA, it is essential protection. Without one, shareholder disputes default to statutory remedies that may not reflect your intentions and can result in expensive litigation.' },
      { question: 'What is a unanimous shareholder agreement in Alberta?', answer: 'Under the ABCA, a unanimous shareholder agreement is a contract signed by all shareholders that can restrict the authority of the board of directors and transfer management powers to shareholders. This is useful when shareholders want to run the company directly rather than through traditional corporate governance structures.' },
      { question: 'What happens if we don\'t have a shareholder agreement?', answer: 'Without a shareholder agreement, your corporation is governed only by the Alberta Business Corporations Act and your articles of incorporation. If disputes arise, they are resolved through costly litigation. You lose the ability to control share transfers, manage dividend distributions, restrict competition, or establish clear succession planning.' },
    ],
    content: [
      textBlock('If your corporation has more than one shareholder, a shareholder agreement is one of the most important legal documents you can put in place. Yet many businesses operate without one, leaving themselves vulnerable to costly disputes and uncertainty.', 'normal'),
      textBlock('What Is a Shareholder Agreement?', 'h2'),
      textBlock('A shareholder agreement is a legally binding contract between all shareholders of a corporation. It establishes the rules for how the company is managed, how decisions are made, how shares can be transferred, and how disputes are resolved. Think of it as the "prenuptial agreement" for your business partnership.', 'normal'),
      textBlock('Why Shareholder Agreements Matter', 'h2'),
      textBlock('The Alberta Business Corporations Act provides a basic framework for corporate governance, but it leaves many important questions unanswered. A shareholder agreement fills these gaps by addressing share transfer restrictions, decision-making thresholds, dividend policies, non-competition obligations, succession planning, and dispute resolution mechanisms.', 'normal'),
      textBlock('Without a shareholder agreement, you are relying entirely on statutory remedies, which may not align with your expectations or the understandings you had with your business partners.', 'normal'),
      textBlock('Key Provisions to Include', 'h2'),
      textBlock('Every shareholder agreement should address several critical areas. Share transfer provisions (including rights of first refusal and tag-along/drag-along rights) protect shareholders from unwanted third-party ownership. Decision-making provisions establish which decisions require unanimous consent versus majority approval. Buy-sell provisions create a mechanism for shareholders to exit the business, whether due to retirement, disability, death, or disagreement.', 'normal'),
      textBlock('Unanimous Shareholder Agreements in Alberta', 'h2'),
      textBlock('Alberta law provides for a special type of shareholder agreement called a unanimous shareholder agreement (USA). Under the ABCA, a USA can restrict the powers of the board of directors and transfer management authority directly to shareholders. This is particularly useful for closely held corporations where all shareholders are actively involved in the business.', 'normal'),
      textBlock('When to Put a Shareholder Agreement in Place', 'h2'),
      textBlock('The best time to negotiate a shareholder agreement is at the beginning—when relationships are strong and everyone is optimistic. Trying to negotiate these terms during a dispute is exponentially more difficult and expensive. If your corporation already has multiple shareholders and no agreement in place, it is never too late to put one together.', 'normal'),
      textBlock('The Cost of Not Having One', 'h2'),
      textBlock('Shareholder disputes without a clear agreement often result in expensive litigation, business paralysis, and destroyed relationships. A well-drafted shareholder agreement typically costs a fraction of what a single shareholder dispute would cost to resolve in court.', 'normal'),
      textBlock('How Gusto Law Can Help', 'h2'),
      textBlock('At Gusto Law, we draft shareholder agreements tailored to your specific business needs. We work with you and your co-shareholders to understand your goals, address potential conflict areas, and create a document that protects everyone\'s interests while supporting the growth of your business.', 'normal'),
    ],
  },

  // ── 5. Canadian Privacy Law Guide ────────────────────────
  {
    _id: 'blog-canadian-privacy-law-guide',
    title: 'Intro to Canadian Privacy Law: An Essential Guide for Alberta Businesses',
    subtitle: 'Understanding PIPEDA, Alberta PIPA, and your compliance obligations.',
    slug: 'canadian-privacy-law-guide',
    excerpt: 'Comprehensive guide to Canadian privacy law for Alberta businesses. Learn about PIPEDA, Alberta PIPA, data privacy compliance, and data breach notification requirements in Calgary.',
    publishedAt: '2025-08-15T00:00:00Z',
    readTime: '14 min read',
    categories: ['privacy-compliance'],
    featuredImageUrl: 'https://gustolaw.ca/wp-content/uploads/2025/08/Workplace-Privacy-Critical-Considerations-for-Alberta-Employers.jpg',
    seo: {
      metaTitle: 'Intro to Canadian Privacy Law: An Essential Guide for Alberta Businesses',
      metaDescription: 'Comprehensive guide to Canadian privacy law for Alberta businesses. Learn about PIPEDA, Alberta PIPA, data privacy compliance, and data breach notification requirements.',
    },
    faqItems: [],
    content: [
      textBlock('Data privacy has become one of the most critical compliance areas for Canadian businesses. Whether you collect customer emails, process employee records, or handle sensitive financial data, understanding your obligations under Canadian privacy law is essential.', 'normal'),
      textBlock('The Canadian Privacy Landscape', 'h2'),
      textBlock('Canada\'s privacy framework operates at both the federal and provincial levels. The federal Personal Information Protection and Electronic Documents Act (PIPEDA) sets the baseline for how private-sector organizations collect, use, and disclose personal information. Alberta has its own substantially similar legislation—the Personal Information Protection Act (PIPA)—which applies to provincially regulated organizations.', 'normal'),
      textBlock('Alberta PIPA: Your Provincial Obligations', 'h2'),
      textBlock('For Alberta businesses, PIPA is typically the primary privacy legislation you need to comply with. PIPA applies to all organizations that collect, use, or disclose personal information in the course of commercial activities within Alberta. It requires organizations to obtain meaningful consent, limit collection to what is necessary, protect personal information with appropriate safeguards, and provide individuals with access to their personal information on request.', 'normal'),
      textBlock('The 10 Fair Information Principles', 'h2'),
      textBlock('Both PIPEDA and PIPA are built on 10 Fair Information Principles that form the foundation of Canadian privacy compliance. These principles cover accountability, identifying purposes, consent, limiting collection, limiting use, disclosure and retention, accuracy, safeguards, openness, individual access, and challenging compliance.', 'normal'),
      textBlock('Consent Management', 'h2'),
      textBlock('Consent is the cornerstone of Canadian privacy law. Organizations must obtain meaningful consent before collecting, using, or disclosing personal information. Consent can be express (written or verbal) or implied (based on the circumstances), but must always be informed. Individuals must understand what information is being collected, why it is being collected, and how it will be used.', 'normal'),
      textBlock('Workplace Privacy', 'h2'),
      textBlock('Alberta employers have specific obligations regarding employee personal information. PIPA requires employers to collect only the personal information necessary for employment purposes, obtain consent before monitoring employee activities, protect employee records with appropriate safeguards, and limit access to employee information to those with a legitimate need.', 'normal'),
      textBlock('Data Breach Notification', 'h2'),
      textBlock('Under both federal and provincial law, organizations must report data breaches that create a real risk of significant harm to affected individuals. This includes notifying the individuals affected, reporting to the relevant privacy commissioner, and maintaining records of all breaches. Alberta was one of the first Canadian jurisdictions to implement mandatory breach reporting requirements.', 'normal'),
      textBlock('Building a Privacy Compliance Program', 'h2'),
      textBlock('A robust privacy compliance program includes appointing a privacy officer, conducting privacy impact assessments, implementing data protection policies, training employees on privacy obligations, establishing breach response procedures, and regularly reviewing and updating privacy practices.', 'normal'),
      textBlock('How Gusto Law Can Help', 'h2'),
      textBlock('At Gusto Law, we help Alberta businesses build and maintain privacy compliance programs that meet both PIPEDA and PIPA requirements. From drafting privacy policies to responding to data breaches, our team provides the practical legal guidance you need to protect your business and your customers.', 'normal'),
    ],
  },

  // ── 6. IP Basics ─────────────────────────────────────────
  {
    _id: 'blog-intellectual-property-basics-canadian-business',
    title: 'Intellectual Property Basics Every Canadian Business Owner Should Know',
    subtitle: 'Protecting your ideas, innovations, and brand assets.',
    slug: 'intellectual-property-basics-canadian-business',
    excerpt: 'Comprehensive guide to intellectual property protection in Canada. Learn about copyrights, patents, trademarks, and trade secrets for your business in Alberta.',
    publishedAt: '2025-07-15T00:00:00Z',
    readTime: '12 min read',
    categories: ['intellectual-property'],
    featuredImageUrl: 'https://gustolaw.ca/wp-content/uploads/2025/07/Intellectual-Property-Basics.jpg',
    seo: {
      metaTitle: 'Intellectual Property Basics Every Canadian Business Owner Should Know',
      metaDescription: 'Comprehensive guide to intellectual property protection in Canada. Learn about copyrights, patents, trademarks, and trade secrets for your business in Alberta.',
    },
    faqItems: [],
    content: [
      textBlock('Intellectual property is often the most valuable asset a business owns—yet many Canadian entrepreneurs do not fully understand how to protect it. From your company name to your proprietary processes, IP protection is essential for building and maintaining competitive advantage.', 'normal'),
      textBlock('What Is Intellectual Property?', 'h2'),
      textBlock('Intellectual property (IP) refers to creations of the mind that have commercial value. In Canada, IP protection falls into four main categories: copyrights, patents, trademarks, and trade secrets. Each type of IP protects different aspects of your business and requires different strategies to secure and maintain.', 'normal'),
      textBlock('Copyrights', 'h2'),
      textBlock('Copyright in Canada protects original literary, artistic, musical, and dramatic works. This includes software code, website content, marketing materials, photographs, and written documents. Copyright protection arises automatically when a work is created, but registration with the Canadian Intellectual Property Office provides stronger legal protection and a presumption of ownership.', 'normal'),
      textBlock('Patents', 'h2'),
      textBlock('A patent grants the inventor exclusive rights to make, use, and sell an invention for up to 20 years. In Canada, patents are granted for new, useful, and non-obvious inventions. The patent application process is complex and typically requires the assistance of a patent agent or lawyer with technical expertise.', 'normal'),
      textBlock('Trademarks', 'h2'),
      textBlock('Trademarks protect brand identifiers—your business name, logo, slogan, or even a distinctive sound or colour. Registration with the Canadian Intellectual Property Office provides exclusive rights to use the trademark across Canada for 10-year renewable terms. Unregistered trademarks have some protection under common law but are much harder to enforce.', 'normal'),
      textBlock('Trade Secrets', 'h2'),
      textBlock('Trade secrets encompass confidential business information that provides a competitive advantage—formulas, processes, customer lists, pricing strategies, and proprietary methods. Unlike patents and trademarks, trade secrets have no registration process. Protection depends entirely on maintaining confidentiality through non-disclosure agreements, employment contracts, and physical and digital security measures.', 'normal'),
      textBlock('IP Strategy for Canadian Businesses', 'h2'),
      textBlock('An effective IP strategy starts with identifying what IP your business owns, determining which types of protection are appropriate, registering key assets where possible, implementing confidentiality agreements, monitoring for infringement, and planning for IP in employment and contractor agreements.', 'normal'),
      textBlock('Common IP Mistakes', 'h2'),
      textBlock('Many Canadian businesses make costly IP mistakes, including failing to register trademarks before expanding, not including IP assignment clauses in employment contracts, disclosing inventions publicly before filing patent applications, and relying solely on NDAs without formal registration where available.', 'normal'),
      textBlock('How Gusto Law Can Help', 'h2'),
      textBlock('At Gusto Law, we help Calgary and Alberta businesses develop comprehensive IP strategies. From trademark registration to IP audits and licensing agreements, we provide the legal guidance you need to protect your most valuable assets.', 'normal'),
    ],
  },

  // ── 7. Holding Company Share Classes ─────────────────────
  {
    _id: 'blog-holding-company-share-classes-canada',
    title: 'Business Law Basics: Why Your Lawyer Recommends a Holding Company and Separate Share Classes',
    subtitle: 'Understanding corporate structures for tax efficiency and asset protection.',
    slug: 'holding-company-share-classes-canada',
    excerpt: 'Comprehensive guide to holding companies and share classes in Canada. Learn about tax deferral, creditor protection, and succession planning for Alberta businesses.',
    publishedAt: '2025-06-15T00:00:00Z',
    readTime: '11 min read',
    categories: ['business-formation'],
    featuredImageUrl: 'https://gustolaw.ca/wp-content/uploads/2025/06/Holding-Company-and-Separate-Share-Classes.jpg',
    seo: {
      metaTitle: 'Why Your Lawyer Recommends a Holding Company and Separate Share Classes',
      metaDescription: 'Comprehensive guide to holding companies and share classes in Canada. Learn about tax deferral, creditor protection, and succession planning.',
    },
    faqItems: [],
    content: [
      textBlock('If you have ever consulted a business lawyer in Alberta, there is a good chance they recommended setting up a holding company and creating multiple share classes. While this may seem like unnecessary complexity, these structures serve important purposes for tax planning, asset protection, and long-term business strategy.', 'normal'),
      textBlock('Why a Holding Company Works', 'h2'),
      textBlock('A holding company (or "holdco") is a corporation that owns shares in your operating company (or "opco"). Instead of you personally owning the operating company, your holding company sits between you and the business. This structure creates a legal separation that enables tax planning, asset protection, and succession planning strategies.', 'normal'),
      textBlock('Tax Deferral Benefits', 'h2'),
      textBlock('One of the primary advantages of a holding company is tax deferral. When your operating company pays dividends to your holding company, those dividends flow on an inter-corporate basis and are generally received tax-free. The funds remain in the holding company and can be reinvested without triggering personal tax. You only pay personal tax when you extract funds from the holding company for personal use.', 'normal'),
      textBlock('Creditor Protection', 'h2'),
      textBlock('By regularly moving excess profits from your operating company to your holding company via dividends, you reduce the assets available to creditors of the operating company. If your operating business faces a lawsuit or financial difficulty, the assets in your holding company are generally protected from those creditors.', 'normal'),
      textBlock('Succession Planning', 'h2'),
      textBlock('Holding companies and multiple share classes make it much easier to transition ownership to the next generation. You can create different share classes with different rights—voting shares for control, common shares for equity participation, preferred shares for fixed-value redemption—and distribute them strategically among family members.', 'normal'),
      textBlock('Why Separate Share Classes Matter', 'h2'),
      textBlock('Creating different classes of shares allows you to separate control from economic participation. This is essential for estate freezes, where you lock in the current value of your shares on preferred shares and issue new common shares to the next generation. It also enables income splitting strategies and simplifies buyout arrangements.', 'normal'),
      textBlock('Tracking ACB and PUC', 'h2'),
      textBlock('When implementing these structures, it is critical to properly track the adjusted cost base (ACB) and paid-up capital (PUC) of each share class. These numbers determine the tax consequences of share transactions, including redemptions, sales, and reorganizations. Errors in ACB or PUC tracking can create unexpected and significant tax liabilities.', 'normal'),
      textBlock('Growth Flexibility', 'h2'),
      textBlock('A well-designed corporate structure with a holding company and multiple share classes provides flexibility as your business grows. Whether you are bringing in a business partner, seeking investment, preparing for a sale, or transitioning to the next generation, the right structure makes these transactions simpler and more tax-efficient.', 'normal'),
      textBlock('When to Implement', 'h2'),
      textBlock('The ideal time to set up a holding company is early in your business journey, but it is never too late. If your operating company is profitable and retaining earnings, or if you are planning for growth, investment, or succession, a holding company structure should be on your radar.', 'normal'),
      textBlock('How Gusto Law Can Help', 'h2'),
      textBlock('At Gusto Law, we help Calgary businesses design and implement corporate structures that support their long-term goals. From holding company setup to share class design and corporate reorganizations, we work with your accountant to create structures that optimize tax efficiency and protect your assets.', 'normal'),
    ],
  },

  // ── 8. Negotiate Oil & Gas Leases ────────────────────────
  {
    _id: 'blog-negotiate-oil-gas-leases',
    title: 'How to Negotiate Oil & Gas Leases',
    subtitle: 'Protecting your interests as a landowner or mineral rights holder.',
    slug: 'negotiate-oil-gas-leases',
    excerpt: 'Learn how to negotiate favorable oil and gas leases in Alberta. Understand bonus payments, royalties, and protect your landowner rights.',
    publishedAt: '2025-05-01T00:00:00Z',
    readTime: '11 min read',
    categories: ['oil-gas'],
    featuredImageUrl: 'https://gustolaw.ca/wp-content/uploads/2025/05/Negotiate-Oil-Gas-Leases.jpg',
    seo: {
      metaTitle: 'How to Negotiate Oil & Gas Leases',
      metaDescription: 'Learn how to negotiate favorable oil and gas leases in Alberta. Understand bonus payments, royalties, and protect your landowner rights.',
    },
    faqItems: [],
    content: [
      textBlock('Oil and gas leases are among the most consequential contracts that Alberta landowners and mineral rights holders will ever sign. The terms you negotiate can affect your income, your land, and your rights for decades. Understanding the key provisions and knowing where to push back is essential.', 'normal'),
      textBlock('Understanding Oil & Gas Leases', 'h2'),
      textBlock('An oil and gas lease grants a company the right to explore for, develop, and produce oil and gas on your land or from your mineral rights. In exchange, you receive compensation—typically a combination of bonus payments, delay rentals, and royalties. The lease terms dictate the scope of operations permitted, the duration of the agreement, and the obligations of both parties.', 'normal'),
      textBlock('Key Lease Terms to Negotiate', 'h2'),
      textBlock('Several provisions in an oil and gas lease deserve careful attention and negotiation. The primary term (the initial period before production must begin), royalty rates, bonus payments, surface access restrictions, environmental reclamation obligations, and the shut-in clause (which allows a company to maintain the lease during periods of non-production) are all areas where negotiation can significantly impact the value of the deal.', 'normal'),
      textBlock('Royalty Rates and Payments', 'h2'),
      textBlock('Royalties are your ongoing share of production revenue. In Alberta, royalty rates vary depending on the type of resource, production volumes, and market conditions. Standard lease forms often include relatively low royalty rates, but these are negotiable. Understanding how royalties are calculated—whether on gross production or net of certain costs—is critical to ensuring you receive fair compensation.', 'normal'),
      textBlock('Surface Rights and Access', 'h2'),
      textBlock('If you own both surface and mineral rights, the lease should clearly address how the company can access your land. This includes specifying access routes, well site locations, pipeline corridors, and reclamation obligations. Alberta\'s Surface Rights Act provides a framework for compensation when surface access is required, but lease terms can provide additional protections.', 'normal'),
      textBlock('Environmental Provisions', 'h2'),
      textBlock('Environmental reclamation and liability provisions are increasingly important in oil and gas leases. Your lease should address who is responsible for cleanup costs, what standards of reclamation are required, and what happens if the company becomes insolvent before completing reclamation. Alberta\'s regulatory framework imposes environmental obligations on operators, but your lease can provide additional protections.', 'normal'),
      textBlock('Common Lease Pitfalls', 'h2'),
      textBlock('Many landowners sign leases without fully understanding the implications. Common pitfalls include accepting standard-form leases without negotiation, failing to understand the shut-in clause, not limiting the geographic scope of the lease, overlooking assignment provisions that allow the lease to be transferred, and not requiring adequate insurance or bonding.', 'normal'),
      textBlock('Working with a Lawyer', 'h2'),
      textBlock('An experienced oil and gas lawyer can help you understand the lease terms, identify areas for negotiation, and ensure your interests are protected. The cost of legal review is typically a small fraction of the value of the lease and can save you significant money and headaches over the life of the agreement.', 'normal'),
      textBlock('How Gusto Law Can Help', 'h2'),
      textBlock('At Gusto Law, we represent Alberta landowners and mineral rights holders in oil and gas lease negotiations. We review lease terms, negotiate on your behalf, and ensure your rights and financial interests are fully protected.', 'normal'),
    ],
  },

  // ── 9. Outsourcing vs In-House Legal – Oil & Gas ─────────
  {
    _id: 'blog-outsourcing-vs-inhouse-legal-counsel-oil-gas',
    title: 'Outsourcing vs. In-House Legal Counsel: What\'s Best for Your Oil & Gas Business?',
    subtitle: 'Choosing the right legal strategy for your energy company.',
    slug: 'outsourcing-vs-inhouse-legal-counsel-oil-gas',
    excerpt: 'Explore the pros and cons of outsourced vs. in-house legal counsel for oil and gas companies. Learn how to choose the right legal strategy for your business.',
    publishedAt: '2025-03-01T00:00:00Z',
    readTime: '10 min read',
    categories: ['oil-gas'],
    featuredImageUrl: 'https://gustolaw.ca/wp-content/uploads/2022/01/Oil-and-Gas-Lawyer-scaled.jpg',
    seo: {
      metaTitle: 'Outsourcing vs. In-House Legal Counsel for Oil & Gas',
      metaDescription: 'Explore the pros and cons of outsourced vs. in-house legal counsel for oil and gas companies. Choose the right legal strategy for your business.',
    },
    faqItems: [],
    content: [
      textBlock('Oil and gas companies face unique legal challenges—from regulatory compliance and environmental law to complex commercial agreements and joint ventures. Deciding how to handle your legal needs is a strategic business decision that affects both your costs and your risk exposure.', 'normal'),
      textBlock('The In-House Model', 'h2'),
      textBlock('Having in-house legal counsel means employing one or more lawyers as full-time staff members. This provides immediate access to legal advice, deep familiarity with your business operations, and consistent legal oversight. However, the costs are significant—salaries, benefits, office space, and professional development can easily exceed $200,000-$400,000 per year for a single experienced lawyer.', 'normal'),
      textBlock('The Outsourced Model', 'h2'),
      textBlock('Outsourcing legal work to an external law firm provides access to a broader range of expertise, flexibility to scale legal services up or down, and the ability to engage specialists for specific matters. The trade-off is that outside counsel may not have the same depth of understanding of your day-to-day operations.', 'normal'),
      textBlock('Comparing Costs', 'h2'),
      textBlock('The cost comparison is not always straightforward. While outsourced legal fees may seem high on an hourly basis, the total annual cost is often lower than maintaining in-house counsel—especially for small to mid-size operators. The key is to analyze your total legal spend and the types of legal work you need most frequently.', 'normal'),
      textBlock('Industry-Specific Considerations', 'h2'),
      textBlock('Oil and gas businesses have specialized legal needs including joint operating agreements, royalty calculations, regulatory filings with the Alberta Energy Regulator, surface and mineral rights issues, environmental compliance, and industry-specific contract forms. The right legal model depends on which of these needs are most frequent and critical to your operations.', 'normal'),
      textBlock('The Hybrid Approach', 'h2'),
      textBlock('Many oil and gas companies find the best solution is a hybrid model—using a fractional general counsel for ongoing strategic guidance and day-to-day legal needs, while engaging specialist firms for complex transactions, litigation, or regulatory matters. This approach provides the continuity of in-house counsel with the flexibility of outsourced services.', 'normal'),
      textBlock('Making the Decision', 'h2'),
      textBlock('Consider these factors when deciding: your annual legal spend, the frequency and type of legal issues you face, your growth trajectory, the complexity of your regulatory environment, and whether you need a lawyer who can attend management meetings and provide strategic input on a regular basis.', 'normal'),
      textBlock('How Gusto Law Can Help', 'h2'),
      textBlock('At Gusto Law, we work with oil and gas companies across Alberta as both fractional general counsel and specialized outside counsel. We understand the unique legal landscape of the energy sector and provide practical, business-focused legal advice that supports your operational goals.', 'normal'),
    ],
  },

  // ── 10. Reseller & Distributor Software Licensing ────────
  {
    _id: 'blog-reseller-distributor-software-licensing',
    title: 'Reseller and Distributor Software Licensing: What Software Companies Need to Know',
    subtitle: 'Structuring channel partnerships for growth and compliance.',
    slug: 'reseller-distributor-software-licensing',
    excerpt: 'Guide to structuring reseller and distributor software licensing agreements. Understand channel partnerships, pricing, and compliance requirements in Canada.',
    publishedAt: '2025-03-01T00:00:00Z',
    readTime: '12 min read',
    categories: ['technology-law'],
    featuredImageUrl: 'https://gustolaw.ca/wp-content/uploads/2025/01/Calgary-Software-Lawyer.jpg',
    seo: {
      metaTitle: 'Reseller and Distributor Software Licensing',
      metaDescription: 'Guide to structuring reseller and distributor software licensing agreements. Understand channel partnerships, pricing, and compliance in Canada.',
    },
    faqItems: [],
    content: [
      textBlock('As software companies scale, channel partnerships through resellers and distributors become an increasingly important growth strategy. However, these relationships require carefully structured licensing agreements that protect your intellectual property, maintain pricing integrity, and ensure compliance.', 'normal'),
      textBlock('Understanding Channel Partnerships', 'h2'),
      textBlock('Software distribution through channel partners takes several forms. Resellers purchase licenses from you and sell them directly to end users, often adding value through implementation, customization, or support services. Distributors operate as intermediaries between you and resellers, managing a network of partners across a region or market segment.', 'normal'),
      textBlock('Key Agreement Terms', 'h2'),
      textBlock('A well-structured reseller or distributor agreement should address licensing scope and restrictions, pricing and discount structures, territory and exclusivity, minimum sales commitments, intellectual property protections, data handling and privacy obligations, support responsibilities, and termination and transition provisions.', 'normal'),
      textBlock('Licensing Scope and Restrictions', 'h2'),
      textBlock('Your agreement must clearly define what rights you are granting to the reseller or distributor. This includes the right to sublicense or resell your software, any restrictions on modification or reverse engineering, territory limitations, customer segment restrictions, and the types of licenses they can offer (perpetual, subscription, trial, etc.).', 'normal'),
      textBlock('Pricing and Revenue', 'h2'),
      textBlock('Channel pricing requires balancing multiple interests. You need to ensure your resellers have sufficient margin to be motivated, while maintaining pricing consistency and protecting your direct sales channel. Common approaches include wholesale pricing with minimum resale prices, tiered discounts based on volume, and revenue-sharing models for SaaS products.', 'normal'),
      textBlock('IP Protection in Channel Agreements', 'h2'),
      textBlock('Protecting your intellectual property is critical when working with channel partners. Your agreement should include clear IP ownership provisions, restrictions on reverse engineering and modification, trademark usage guidelines, confidentiality obligations, and audit rights to verify compliance.', 'normal'),
      textBlock('Compliance and Data Privacy', 'h2'),
      textBlock('Canadian privacy laws (including PIPEDA and Alberta\'s PIPA) apply to how your channel partners handle customer data. Your agreement should address data collection and processing responsibilities, privacy policy requirements, data breach notification obligations, and cross-border data transfer provisions.', 'normal'),
      textBlock('Termination and Transition', 'h2'),
      textBlock('Plan for the end of the relationship from the beginning. Your agreement should address what happens to existing customer licenses after termination, transition period for customer support, return or destruction of confidential information, and wind-down of marketing materials and co-branding.', 'normal'),
      textBlock('How Gusto Law Can Help', 'h2'),
      textBlock('At Gusto Law, we help Canadian software companies structure channel partnerships that support growth while protecting their interests. From drafting reseller agreements to negotiating distribution terms, we provide the legal guidance you need to build successful partnerships.', 'normal'),
    ],
  },

  // ── 11. SaaS Agreement Must-Have Elements ────────────────
  {
    _id: 'blog-saas-agreement-must-have-elements',
    title: '7 Must-Have Elements in Your SaaS Agreement for Canadian Businesses',
    subtitle: 'Essential contract provisions for software-as-a-service providers.',
    slug: 'saas-agreement-must-have-elements',
    excerpt: 'Discover the 7 critical elements every SaaS agreement needs to protect your Canadian business, from SLAs to data privacy and liability limitations.',
    publishedAt: '2025-02-01T00:00:00Z',
    readTime: '14 min read',
    categories: ['technology-law'],
    featuredImageUrl: 'https://gustolaw.ca/wp-content/uploads/2025/01/7-must-have-elements-in-SaaS-contract.jpg',
    seo: {
      metaTitle: '7 Must-Have Elements in Your SaaS Agreement',
      metaDescription: 'Discover the 7 critical elements every SaaS agreement needs to protect your Canadian business, from SLAs to data privacy and liability limitations.',
    },
    faqItems: [],
    content: [
      textBlock('A SaaS agreement is the foundation of your customer relationship. Whether you are a SaaS provider or a business subscribing to cloud software, the terms of this agreement define your rights, obligations, and risk exposure. Getting it right is critical.', 'normal'),
      textBlock('1. Service Level Agreements (SLAs)', 'h2'),
      textBlock('Your SLA defines the performance standards your service must meet—uptime guarantees, response times, and support availability. A well-drafted SLA specifies measurable targets (e.g., 99.9% uptime), defines how downtime is measured, establishes remedies for service failures (typically service credits), and excludes scheduled maintenance and force majeure events.', 'normal'),
      textBlock('2. Intellectual Property Rights', 'h2'),
      textBlock('Clearly defining IP ownership is essential. The agreement should confirm that the provider retains ownership of the underlying software, the customer retains ownership of their data, any customizations or integrations are addressed, and license scope and restrictions are clearly stated.', 'normal'),
      textBlock('3. Data Privacy and Security', 'h2'),
      textBlock('With Canadian privacy laws (PIPEDA and PIPA), data handling provisions are non-negotiable. Your agreement must address what data is collected and how it is processed, security measures and encryption standards, data location and cross-border transfers, breach notification obligations, and data return or destruction on termination.', 'normal'),
      textBlock('4. Billing and Payment Terms', 'h2'),
      textBlock('Clear billing terms prevent disputes. Address subscription pricing and billing cycles, payment terms and late payment consequences, price change provisions and notice requirements, auto-renewal terms and cancellation procedures, and usage-based pricing calculations if applicable.', 'normal'),
      textBlock('5. Limitation of Liability', 'h2'),
      textBlock('Liability caps protect both parties from disproportionate claims. Standard provisions include caps on total liability (often 12 months of fees), exclusion of consequential and indirect damages, carve-outs for IP infringement and data breaches, and mutual liability limitations. These provisions are heavily negotiated and should reflect the actual risk profile of the engagement.', 'normal'),
      textBlock('6. Warranties and Representations', 'h2'),
      textBlock('Warranties set expectations for the service. Key warranties include the software will perform in accordance with documentation, the provider has the right to license the software, the service will comply with applicable laws, and data security measures meet industry standards. Be careful with warranty disclaimers that may limit your recourse if the service fails to perform.', 'normal'),
      textBlock('7. Termination and Exit', 'h2'),
      textBlock('Termination provisions should address how either party can end the agreement, what happens to customer data on termination, transition assistance and data export, any surviving obligations (confidentiality, indemnification), and the wind-down period for service access.', 'normal'),
      textBlock('Bringing It All Together', 'h2'),
      textBlock('A strong SaaS agreement balances the interests of both provider and customer. It should be clear enough to avoid disputes but flexible enough to accommodate the evolving nature of cloud services. Investing in proper legal review upfront saves significant time and money down the road.', 'normal'),
      textBlock('How Gusto Law Can Help', 'h2'),
      textBlock('At Gusto Law, we draft and review SaaS agreements for both providers and customers. We understand the Canadian legal landscape and help ensure your agreements protect your interests while meeting compliance requirements.', 'normal'),
    ],
  },

  // ── 12. SaaS Agreements Framework ────────────────────────
  {
    _id: 'blog-saas-agreements-framework-success',
    title: 'SaaS Agreements: A Framework for Success',
    subtitle: 'Building a complete legal structure for your SaaS business.',
    slug: 'saas-agreements-framework-success',
    excerpt: 'Learn the complete framework for SaaS agreements—from master agreements to privacy policies. Master the legal structure that protects your SaaS business.',
    publishedAt: '2025-01-01T00:00:00Z',
    readTime: '11 min read',
    categories: ['technology-law'],
    featuredImageUrl: 'https://gustolaw.ca/wp-content/uploads/2024/11/SaaS-Agreements-scaled.jpeg',
    seo: {
      metaTitle: 'SaaS Agreements: A Framework for Success',
      metaDescription: 'Learn the complete framework for SaaS agreements—from master agreements to privacy policies. Master the legal structure that protects your SaaS business.',
    },
    faqItems: [],
    content: [
      textBlock('Building a successful SaaS business requires more than great technology—it requires a solid legal framework. The agreements that govern your customer relationships, data handling, and service delivery form the foundation of your business operations.', 'normal'),
      textBlock('The SaaS Agreement Ecosystem', 'h2'),
      textBlock('A comprehensive SaaS legal framework typically includes several interconnected documents: a Master Service Agreement (MSA) or Terms of Service, a Service Level Agreement (SLA), a Data Processing Agreement (DPA), an Acceptable Use Policy (AUP), and a Privacy Policy. Each document serves a specific purpose and should work together to create a complete legal structure.', 'normal'),
      textBlock('Master Service Agreement', 'h2'),
      textBlock('The MSA is the primary contract between you and your customers. It defines the overall relationship, including service scope, licensing terms, payment obligations, intellectual property rights, liability limitations, and termination provisions. A well-drafted MSA serves as the foundation for all other agreements.', 'normal'),
      textBlock('Service Level Agreements', 'h2'),
      textBlock('Your SLA sets performance expectations and accountability measures. Key SLA components include uptime commitments (typically 99.5% to 99.99%), performance metrics and measurement methods, service credit calculations, exclusions for scheduled maintenance and force majeure, and escalation procedures for service issues.', 'normal'),
      textBlock('Data Processing Agreements', 'h2'),
      textBlock('Under Canadian privacy law, if you process personal information on behalf of your customers, a DPA is essential. The DPA should specify what data is processed and for what purposes, security measures and encryption standards, sub-processor management and approval, cross-border data transfer safeguards, and breach notification procedures.', 'normal'),
      textBlock('Privacy Policy', 'h2'),
      textBlock('Your privacy policy is a public-facing document that explains how you collect, use, and protect personal information. Under PIPEDA and Alberta\'s PIPA, your privacy policy must be transparent, accessible, and accurate. It should cover what information you collect, how you use it, who you share it with, and how individuals can exercise their privacy rights.', 'normal'),
      textBlock('Acceptable Use Policy', 'h2'),
      textBlock('An AUP defines the boundaries of acceptable customer behavior on your platform. It typically addresses prohibited content and activities, system abuse and resource limits, security obligations, compliance with applicable laws, and consequences of policy violations.', 'normal'),
      textBlock('Building Your Framework', 'h2'),
      textBlock('When developing your SaaS legal framework, start with the MSA as your foundation and build outward. Ensure all documents are consistent, use clear language, and are regularly updated to reflect changes in your service and applicable laws. Template agreements can be a starting point, but customization for your specific business is essential.', 'normal'),
      textBlock('How Gusto Law Can Help', 'h2'),
      textBlock('At Gusto Law, we help SaaS companies build comprehensive legal frameworks tailored to their business models. From MSAs to privacy policies, we create the legal infrastructure that supports growth while protecting your interests and meeting Canadian compliance requirements.', 'normal'),
    ],
  },

  // ── 13. Software Licensing Agreements Guide ──────────────
  {
    _id: 'blog-software-licensing-agreements-guide',
    title: 'Understanding Software Licensing Agreements: A Legal Guide for Canadian Businesses',
    subtitle: 'Navigate the legal landscape of software licensing in Canada.',
    slug: 'software-licensing-agreements-guide',
    excerpt: 'Comprehensive guide to software licensing agreements for Canadian businesses. Learn about EULA, SaaS, open source licenses, and legal compliance.',
    publishedAt: '2025-04-01T00:00:00Z',
    readTime: '13 min read',
    categories: ['technology-law'],
    featuredImageUrl: 'https://gustolaw.ca/wp-content/uploads/2025/04/Types-of-Software-Licensing-Models.png',
    seo: {
      metaTitle: 'Understanding Software Licensing Agreements: A Legal Guide',
      metaDescription: 'Comprehensive guide to software licensing agreements for Canadian businesses. Learn about EULA, SaaS, open source licenses, and legal compliance.',
    },
    faqItems: [],
    content: [
      textBlock('Software licensing is the legal mechanism that governs how software is used, distributed, and modified. Whether you are a software developer licensing your product or a business purchasing software, understanding the different types of licenses and their legal implications is essential.', 'normal'),
      textBlock('Types of Software Licenses', 'h2'),
      textBlock('Software licensing models have evolved significantly over the past two decades. The main types include perpetual licenses (one-time purchase, indefinite use), subscription licenses (recurring payment for continued access), SaaS licenses (cloud-based access via subscription), open source licenses (community-developed with various use rights), and freemium models (free basic version with paid premium features).', 'normal'),
      textBlock('End User License Agreements (EULAs)', 'h2'),
      textBlock('A EULA is the standard agreement for commercially distributed software. It defines what the user can and cannot do with the software, including installation limits, copying restrictions, modification prohibitions, and redistribution rules. Under Canadian law, EULAs are generally enforceable as contracts, though certain provisions may be subject to consumer protection limitations.', 'normal'),
      textBlock('SaaS Licensing Models', 'h2'),
      textBlock('SaaS licensing has become the dominant model for business software. Instead of licensing a copy of the software, users pay for access to a cloud-hosted service. SaaS agreements differ from traditional licenses in important ways—there is no transfer of software, data handling obligations are more prominent, and service level commitments replace traditional warranties.', 'normal'),
      textBlock('Open Source Licensing', 'h2'),
      textBlock('Open source licenses grant users the right to use, modify, and distribute software freely, but with important conditions. Common open source licenses include the MIT License (permissive, minimal restrictions), the Apache License 2.0 (permissive with patent grant), the GPL (copyleft, requires derivative works to be open source), and the LGPL (weaker copyleft for libraries). Understanding these licenses is critical if your business uses or contributes to open source software.', 'normal'),
      textBlock('Canadian Legal Considerations', 'h2'),
      textBlock('Software licensing in Canada is governed by a combination of contract law, the Copyright Act, and provincial consumer protection legislation. Key considerations include the enforceability of click-wrap and browse-wrap agreements, copyright protection for software under the Copyright Act (Canada), consumer protection limitations on certain license terms, and privacy law requirements when software collects personal information.', 'normal'),
      textBlock('Licensing Compliance', 'h2'),
      textBlock('Software compliance—ensuring your organization is properly licensed for all the software it uses—is an increasingly important business issue. Non-compliance can result in significant financial liability, especially in the case of enterprise software where audit clauses are common. Regular license audits and maintaining accurate records of all software licenses are essential.', 'normal'),
      textBlock('Drafting Effective License Agreements', 'h2'),
      textBlock('Whether you are licensing your own software or negotiating a license from a vendor, key provisions to address include the scope of the license (what the user can do), restrictions (what the user cannot do), intellectual property ownership, warranties and disclaimers, limitation of liability, termination and consequences, and governing law and dispute resolution.', 'normal'),
      textBlock('How Gusto Law Can Help', 'h2'),
      textBlock('At Gusto Law, we help Canadian software companies draft, negotiate, and review licensing agreements. Whether you need a custom EULA, SaaS terms of service, or open source compliance guidance, our technology law team provides the expertise you need.', 'normal'),
    ],
  },
]

// ============================================================
// Seed runner
// ============================================================
async function seed() {
  console.log('🌱 Seeding 13 blog posts into Sanity...')
  console.log(`   Project: ${projectId}`)
  console.log(`   Dataset: ${dataset}`)
  console.log('')

  const transaction = client.transaction()

  for (const post of blogPosts) {
    const doc = {
      _id: post._id,
      _type: 'blogPost',
      title: post.title,
      subtitle: post.subtitle,
      slug: { _type: 'slug', current: post.slug },
      excerpt: post.excerpt,
      publishedAt: post.publishedAt,
      readTime: post.readTime,
      categories: post.categories,
      content: post.content,
      seo: {
        _type: 'seo',
        metaTitle: post.seo.metaTitle,
        metaDescription: post.seo.metaDescription,
      },
    }

    // Add featured image as external URL reference
    if (post.featuredImageUrl) {
      doc.featuredImage = {
        _type: 'image',
        // Note: We store the URL in the alt field for migration reference.
        // To properly use Sanity's image pipeline, upload images via:
        //   sanity dataset import  OR  client.assets.upload()
        alt: post.title,
      }
    }

    // Add FAQ items if present
    if (post.faqItems && post.faqItems.length > 0) {
      doc.faqItems = post.faqItems.map((faq) => ({
        _type: 'faqItem',
        _key: randomUUID().slice(0, 8),
        question: faq.question,
        answer: faq.answer,
      }))
    }

    transaction.createOrReplace(doc)
    console.log(`  ✅ ${post.title}`)
  }

  console.log('')
  console.log('📤 Committing transaction...')
  await transaction.commit()
  console.log('')
  console.log('============================================================')
  console.log('✅ All 13 blog posts seeded successfully!')
  console.log('')
  console.log('Next steps:')
  console.log('  1. Visit /studio to manage posts in Sanity Studio')
  console.log('  2. Upload featured images via the Studio media library')
  console.log('  3. Set related posts for each article')
  console.log('  4. Verify posts at /blog on your deployed site')
  console.log('============================================================')
}

seed().catch((err) => {
  console.error('❌ Seeding failed:', err.message)
  process.exit(1)
})
