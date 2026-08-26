export interface ServiceStep {
  step: string;
  title: string;
  desc: string;
}

export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface ServiceDetail {
  slug: string;
  categorySlug: string;
  categoryName: string;
  title: string;
  tagline: string;
  shortDesc: string;
  fullDesc: string;
  heroImage: string;
  iconName: "FileCheck" | "ShieldCheck" | "Scale" | "FileSpreadsheet" | "Globe" | "Users2" | "Calculator" | "BookOpenCheck" | "Building2";
  subServices: string[];
  features: { title: string; desc: string }[];
  benefits: string[];
  steps: ServiceStep[];
  whoNeedsThis: string[];
  complianceNotes: string;
  faqs: ServiceFAQ[];
  relatedSlugs: string[];
}

export interface ServiceCategory {
  slug: string;
  name: string;
  tagline: string;
  desc: string;
  iconName: "FileCheck" | "ShieldCheck" | "Scale" | "FileSpreadsheet" | "Globe" | "Users2";
  image: string;
  itemSlugs: string[];
}

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    slug: "vat-services",
    name: "VAT Solutions",
    tagline: "End-to-End Value Added Tax Compliance in the UAE",
    desc: "Complete VAT lifecycle management for UAE businesses, ensuring compliance with Federal Tax Authority (FTA) laws, timely return filings, and input tax recovery optimization.",
    iconName: "FileCheck",
    image: "/images/icons/vat-reg-icon.png",
    itemSlugs: ["vat-registration", "vat-deregistration", "vat-return-filing", "vat-audit-refund", "vat-amendment"],
  },
  {
    slug: "corporate-tax",
    name: "Corporate Tax",
    tagline: "UAE Corporate Tax Registration, Advisory & Filing",
    desc: "Comprehensive Corporate Tax advisory and compliance solutions to guide businesses through the UAE Corporate Tax regime (9% rate above AED 375,000 threshold).",
    iconName: "ShieldCheck",
    image: "/images/icons/corporate-tax-icon.png",
    itemSlugs: ["corporate-tax-registration", "corporate-tax-filing", "corporate-tax-implementation", "corporate-tax-advisory", "transfer-pricing"],
  },
  {
    slug: "excise-esr",
    name: "Excise Tax & ESR",
    tagline: "Excise Compliance & Economic Substance Regulations",
    desc: "Specialized tax compliance for excise goods (beverages, tobacco, e-cigarettes) and economic substance reporting (ESR) mandated by the UAE Ministry of Finance.",
    iconName: "Scale",
    image: "/images/icons/excise-esr-icon.png",
    itemSlugs: ["excise-tax-registration", "esr-notification", "esr-compliance"],
  },
  {
    slug: "accounting-audit",
    name: "Accounting & Audit",
    tagline: "Bookkeeping, External/Internal Audits & Outsourced CFO",
    desc: "Professional financial accounting, internal controls, statutory auditing, and strategic outsourced CFO services tailored to UAE regulatory standards.",
    iconName: "FileSpreadsheet",
    image: "/images/icons/accounting-audit-icon.png",
    itemSlugs: ["bookkeeping-accounting", "outsourced-cfo", "internal-external-audit", "inventory-backlog-audit"],
  },
  {
    slug: "corporate-compliance",
    name: "More Solutions",
    tagline: "Business Setup, Visas, GoAML & Compliance",
    desc: "One-stop solutions for corporate governance, anti-money laundering (GoAML), tax residency certificates, customs onboarding, visa & PRO support, and business liquidation.",
    iconName: "Globe",
    image: "/images/icons/business-setup-icon.png",
    itemSlugs: ["goaml-registration", "tax-residency-certificate", "business-setup", "customs-registration", "company-liquidation", "visa-pro-services"],
  },
];

export const SERVICES_DATA: Record<string, ServiceDetail> = {
  // --- Category Overviews mapped as services ---
  "vat-services": {
    slug: "vat-services",
    categorySlug: "vat-services",
    categoryName: "VAT Solutions",
    title: "Comprehensive UAE VAT Services & FTA Compliance",
    tagline: "End-to-End Value Added Tax Advisory, Registration, Filing & Audit Representation",
    shortDesc: "Complete VAT lifecycle management for UAE businesses, ensuring FTA tax law compliance, quarterly filings, input tax optimization, and penalty protection.",
    fullDesc: "Value Added Tax (VAT) was introduced in the UAE on January 1, 2018, at a standard rate of 5%. Managing VAT compliance requires meticulous record-keeping, precise calculations of output and input taxes, and strict adherence to Federal Tax Authority (FTA) deadlines. Chartered Growth Consultants provides complete VAT advisory, from mandatory registration and quarterly return filings to complex FTA tax audit defense and refund claims.",
    heroImage: "/images/vat-3d.png",
    iconName: "FileCheck",
    subServices: [
      "VAT Registration (Mandatory & Voluntary)",
      "VAT De-Registration & Cancellation",
      "VAT Return Filing & Quarterly Submissions",
      "VAT Audit & FTA Record Review",
      "VAT Refund Processing & Claim Submissions",
      "VAT Amendment & Data Corrections",
    ],
    features: [
      { title: "FTA Registered Tax Agents", desc: "Direct representation before the Federal Tax Authority by accredited tax professionals." },
      { title: "Input Tax Optimization", desc: "Identify all eligible business expenditures to maximize legal VAT refunds and input tax recovery." },
      { title: "Zero Penalty Guarantee", desc: "Rigorous pre-submission validation ensuring compliance with UAE Executive Regulations." },
      { title: "Cross-Border & Free Zone Guidance", desc: "Navigating Designated Zone rules, import/export VAT, and reverse charge mechanisms." },
    ],
    benefits: [
      "Avoid severe FTA non-compliance fines (ranging from AED 1,000 to AED 50,000+)",
      "Ensure accurate input tax recovery and maximized legal tax refunds",
      "Maintain fully audited records ready for FTA tax inspections",
      "Save time and operational resources with automated quarterly reporting workflows",
    ],
    steps: [
      { step: "01", title: "Eligibility Assessment", desc: "Evaluating revenue thresholds and transaction types under UAE VAT law." },
      { step: "02", title: "Documentation & Portal Setup", desc: "Gathering trade licenses, MOAs, and setting up FTA e-Services accounts." },
      { step: "03", title: "Tax Calculation & Review", desc: "Auditing taxable income, zero-rated sales, exempt sales, and recoverable input tax." },
      { step: "04", title: "Submission & Confirmation", desc: "Filing official returns and securing FTA confirmation receipts." },
    ],
    whoNeedsThis: [
      "UAE mainland businesses with taxable supplies exceeding AED 375,000",
      "Free Zone entities engaging in mainland UAE transactions or Designated Zone transfers",
      "Foreign companies making taxable supplies in the UAE without a local establishment",
      "Growing startups reaching the voluntary registration threshold (AED 187,500)",
    ],
    complianceNotes: "Under UAE Federal Decree-Law No. (8) of 2017 on Value Added Tax, failure to submit VAT returns within the specified timeframe results in immediate administrative penalties. Voluntary registration allows startups to recover input tax on initial capital expenditure.",
    faqs: [
      { question: "What is the mandatory threshold for VAT registration in UAE?", answer: "A UAE-based business must register for VAT if its taxable supplies and imports exceed AED 375,000 in the preceding 12 months or are expected to exceed that amount in the next 30 days." },
      { question: "Can a Free Zone company qualify for 0% VAT?", answer: "Free Zone entities located within designated zones (DZs) may qualify for 0% VAT on certain goods transfers, provided strict compliance conditions set by the FTA are met." },
      { question: "How often must VAT returns be filed?", answer: "The FTA assigns filing periods based on annual turnover, usually quarterly (every 3 months) or monthly for higher turnover enterprises." },
    ],
    relatedSlugs: ["vat-registration", "vat-return-filing", "vat-audit-refund", "corporate-tax"],
  },

  // VAT Individual Services
  "vat-registration": {
    slug: "vat-registration",
    categorySlug: "vat-services",
    categoryName: "VAT Solutions",
    title: "VAT Registration Services in UAE",
    tagline: "Fast & Error-Free Mandatory & Voluntary FTA Registration",
    shortDesc: "Obtain your Tax Registration Number (TRN) quickly with expert documentation review and submission to the Federal Tax Authority.",
    fullDesc: "Navigating VAT registration with the Federal Tax Authority (FTA) requires accurate classification of revenue streams, legal document attestation, and correct entity structuring. Chartered Growth Consultants streamlines the entire registration workflow for mainland, free zone, and offshore entities in the UAE.",
    heroImage: "/images/vat-3d.png",
    iconName: "FileCheck",
    subServices: [
      "Mandatory VAT Registration (Threshold > AED 375,000)",
      "Voluntary VAT Registration (Threshold > AED 187,500)",
      "Tax Group / Single TRN Registration for Related Entities",
      "Non-Resident Business VAT Registration",
    ],
    features: [
      { title: "Document Sanitization", desc: "Thorough check of trade licenses, MOA, passports, and financial turnover statements." },
      { title: "Direct FTA Coordination", desc: "Fast-track query resolutions directly with FTA reviewers." },
      { title: "Tax Group Evaluation", desc: "Determine if grouping multiple sister entities under one TRN reduces administrative burdens." },
    ],
    benefits: [
      "Obtain your official TRN (Tax Registration Number) without rejection risk",
      "Avoid late registration penalties of AED 10,000 mandated by FTA",
      "Start claiming input VAT on business purchases immediately",
    ],
    steps: [
      { step: "01", title: "Turnover Audit", desc: "Calculating 12-month trailing turnover or 30-day forward projections." },
      { step: "02", title: "File Preparation", desc: "Structuring financial proofs, bank statements, and company documents." },
      { step: "03", title: "FTA Portal Application", desc: "Submitting formal registration request via EmaraTax portal." },
      { step: "04", title: "TRN Issuance", desc: "Receiving official FTA Tax Registration Certificate." },
    ],
    whoNeedsThis: [
      "Businesses reaching AED 375,000 annual taxable revenue",
      "Newly setup businesses anticipating capital expenditure over AED 187,500",
      "Corporate groups wanting a single tax group TRN",
    ],
    complianceNotes: "Mandatory registration must be completed within 30 days of crossing the AED 375,000 threshold to prevent late penalty fines.",
    faqs: [
      { question: "How long does FTA take to issue a TRN?", answer: "Upon submission of complete documentation, the FTA typically processes applications within 5 to 10 business days." },
      { question: "What documents are required for VAT registration?", answer: "Trade license, Memorandum of Association (MOA), passport copies of owners/partners, Emirates ID, company bank account details, and audited or certified turnover summary." },
    ],
    relatedSlugs: ["vat-return-filing", "vat-deregistration", "vat-amendment"],
  },

  "vat-deregistration": {
    slug: "vat-deregistration",
    categorySlug: "vat-services",
    categoryName: "VAT Solutions",
    title: "VAT De-Registration & Cancellation Services",
    tagline: "Proper Legal Cancellation of TRN to Avoid FTA Fines",
    shortDesc: "Safely deregister your business from VAT when closing operations, undergoing restructuring, or falling below revenue thresholds.",
    fullDesc: "Failing to deregister for VAT within the strict timeframe prescribed by the FTA leads to hefty administrative penalties. If your business stops making taxable supplies, liquidates, or falls below the voluntary threshold, our team manages the complete tax clearance and TRN cancellation process.",
    heroImage: "/images/vat-3d.png",
    iconName: "FileCheck",
    subServices: [
      "Mandatory VAT De-Registration",
      "Voluntary VAT De-Registration",
      "Final VAT Return Submission & Settlement",
      "FTA Clearance Certificate Obtainment",
    ],
    features: [
      { title: "Final Tax Reconciliation", desc: "Reconciling all outstanding output taxes and input tax credits." },
      { title: "Deadline Management", desc: "Ensuring application submission within 20 business days of trigger event." },
      { title: "Asset VAT Settlement", desc: "Calculating VAT liabilities on remaining business assets." },
    ],
    benefits: [
      "Prevent late deregistration fine of AED 1,000 per month (up to AED 10,000)",
      "Obtain clean tax status required for business liquidation",
      "Ensure final tax returns are accepted without pending liabilities",
    ],
    steps: [
      { step: "01", title: "Eligibility & Trigger Assessment", desc: "Identifying business closure or revenue drop triggers." },
      { step: "02", title: "Final Reconciliation", desc: "Preparing final period VAT return & asset valuation." },
      { step: "03", title: "Deregistration Application", desc: "Filing request via FTA EmaraTax portal." },
      { step: "04", title: "FTA Approval", desc: "Receiving official cancellation approval and confirmation." },
    ],
    whoNeedsThis: [
      "Companies closing down or liquidating in UAE mainland or Free Zones",
      "Businesses whose annual turnover drops below AED 187,500 threshold",
    ],
    complianceNotes: "Application must be submitted within 20 business days of reaching the trigger event to avoid automatic penalization.",
    faqs: [
      { question: "When should a business apply for VAT deregistration?", answer: "Within 20 business days from when the company stops making taxable supplies or when revenue drops below the threshold for 12 consecutive months." },
    ],
    relatedSlugs: ["vat-registration", "company-liquidation", "vat-return-filing"],
  },

  "vat-return-filing": {
    slug: "vat-return-filing",
    categorySlug: "vat-services",
    categoryName: "VAT Solutions",
    title: "VAT Return Filing & Submission Services",
    tagline: "Accurate Quarterly & Monthly VAT Return Preparation",
    shortDesc: "Never miss a deadline. Our tax specialists audit your ledgers, compute output/input taxes, and submit returns directly to the FTA.",
    fullDesc: "VAT Return filing is a recurring legal obligation for every registered business in the UAE. Form VAT201 requires detailed breakdown of standard rated sales by Emirate, zero-rated exports, exempt supplies, reverse charge imports, and recoverable input tax. We ensure flawless filing every quarter.",
    heroImage: "/images/vat-3d.png",
    iconName: "FileCheck",
    subServices: [
      "Quarterly & Monthly VAT201 Return Preparation",
      "Input Tax Recovery Verification & Audit Trail",
      "Reverse Charge Mechanism (RCM) Accounting",
      "Emirate-Wise Sales Allocation",
    ],
    features: [
      { title: "Ledger Audit", desc: "Detailed verification of sales invoices, purchase bills, and tax invoices." },
      { title: "RCM Accounting", desc: "Accurate reporting of imported services and goods under Reverse Charge." },
      { title: "Filing Confirmation", desc: "Timely submission before the 28th of the month following tax period end." },
    ],
    benefits: [
      "Eliminate AED 1,000 first-time and AED 2,000 repeat late filing fines",
      "Maximize input VAT credits legally recoverable from suppliers",
      "Maintain flawless audit-ready digital archives",
    ],
    steps: [
      { step: "01", title: "Data Collection", desc: "Extracting trial balances, sales registers, and purchase reports." },
      { step: "02", title: "Tax Computation", desc: "Calculating net VAT payable or net refundable position." },
      { step: "03", title: "Client Approval", desc: "Presenting executive tax summary report for approval." },
      { step: "04", title: "FTA Portal Submission", desc: "Filing VAT201 return and providing payment reference details." },
    ],
    whoNeedsThis: [
      "All VAT registered entities in the UAE (Mainland & Free Zone)",
    ],
    complianceNotes: "VAT returns and due payments must reach the FTA no later than the 28th day following the end of the tax period.",
    faqs: [
      { question: "What happens if the 28th falls on a weekend?", answer: "If the 28th falls on a public holiday or weekend, the deadline automatically shifts to the first business day following." },
    ],
    relatedSlugs: ["vat-services", "vat-audit-refund", "bookkeeping-accounting"],
  },

  "vat-audit-refund": {
    slug: "vat-audit-refund",
    categorySlug: "vat-services",
    categoryName: "VAT Solutions",
    title: "VAT Audit & Tax Refund Claim Services",
    tagline: "FTA Audit Representation & Fast Tax Refund Processing",
    shortDesc: "Recover excess input VAT paid and defend your business during Federal Tax Authority audits with certified tax agents.",
    fullDesc: "When a business accumulates excess input tax credit (e.g., due to heavy capital investment, export business, or zero-rated sales), it is entitled to claim a cash refund from the FTA. Additionally, if the FTA selects your company for a tax audit, our FTA-registered tax agents manage all communications, documentation, and technical queries.",
    heroImage: "/images/vat-3d.png",
    iconName: "FileCheck",
    subServices: [
      "FTA VAT Refund Claim Submissions",
      "FTA Tax Audit Defense & Document Preparation",
      "Pre-Audit Health Check & Risk Assessment",
      "Reconsideration Application for FTA Fines",
    ],
    features: [
      { title: "Tax Agent Representation", desc: "Official representation before the FTA audit team." },
      { title: "Refund Verification", desc: "Preparing exhaustive invoice trails required by FTA for refund payouts." },
      { title: "Penalty Reductions", desc: "Filing formal reconsideration requests to reduce or waive administrative fines." },
    ],
    benefits: [
      "Unlock tied-up working capital through successful FTA VAT refund payouts",
      "Protect your business against unjust tax assessment penalties",
      "Ensure 100% compliance during official FTA inspections",
    ],
    steps: [
      { step: "01", title: "Health Check", desc: "Reviewing historical returns against supporting invoices & ledgers." },
      { step: "02", title: "Refund/Audit File Assembly", desc: "Organizing tax invoices, export proofs, and custom declarations." },
      { step: "03", title: "Submission / Defense", desc: "Filing refund application or representing company during audit." },
      { step: "04", title: "Resolution", desc: "Securing bank transfer of refund or audit clearance." },
    ],
    whoNeedsThis: [
      "Exporters claiming 0% VAT with substantial input VAT credits",
      "Companies notified of an upcoming FTA tax audit",
      "Businesses wishing to appeal against administrative tax fines",
    ],
    complianceNotes: "FTA refund claims require full proof of tax payment by suppliers and valid movement of goods for export zero-rating.",
    faqs: [
      { question: "How long does FTA take to process a VAT refund?", answer: "Once submitted, the FTA reviews refund applications within 20 business days and credits approved funds to the company bank account." },
    ],
    relatedSlugs: ["vat-return-filing", "vat-amendment", "internal-external-audit"],
  },

  "vat-amendment": {
    slug: "vat-amendment",
    categorySlug: "vat-services",
    categoryName: "VAT Solutions",
    title: "VAT Voluntary Disclosure & Amendment Services",
    tagline: "Correct Historical VAT Errors & Submit Voluntary Disclosures (VD)",
    shortDesc: "Rectify invoicing mistakes or return omissions legally via FTA Voluntary Disclosure (Form 211) before an audit catches them.",
    fullDesc: "If a business discovers an error or omission in a previously submitted VAT return or tax assessment that causes an error in payable tax over AED 10,000, it is legally required to submit a Voluntary Disclosure (VD) via Form 211. Our tax experts help correct historical records and minimize penalties.",
    heroImage: "/images/vat-3d.png",
    iconName: "FileCheck",
    subServices: [
      "Form 211 Voluntary Disclosure Filing",
      "Historical Return Error Identification",
      "Tax Assessment Correction Requests",
      "TRN Details & Registration Data Amendments",
    ],
    features: [
      { title: "Error Quantification", desc: "Accurate recalculation of historical tax understatements or overstatements." },
      { title: "Penalty Mitigation", desc: "Submitting VDs early significantly reduces percentage-based penalty rates." },
      { title: "FTA Data Updates", desc: "Updating trade license renewals, structural changes, or address changes on EmaraTax." },
    ],
    benefits: [
      "Avoid 50% penalty rates applied when FTA discovers errors during an audit",
      "Maintain transparent, legal, and compliant tax standing",
      "Update company details seamlessly on official FTA records",
    ],
    steps: [
      { step: "01", title: "Error Analysis", desc: "Identifying root cause of return discrepancies or invoice errors." },
      { step: "02", title: "VD File Preparation", desc: "Creating statement of correction and supporting documents." },
      { step: "03", title: "Form 211 Submission", desc: "Filing Voluntary Disclosure via EmaraTax." },
      { step: "04", title: "Payment Settlement", desc: "Settling differential tax amount and reduced penalty." },
    ],
    whoNeedsThis: [
      "Businesses discovering previous accounting or VAT calculation errors",
      "Companies undergoing structural, name, or license updates needing TRN amendment",
    ],
    complianceNotes: "Filing a Voluntary Disclosure prior to receiving an FTA audit notification reduces fixed and variable penalty exposure significantly.",
    faqs: [
      { question: "When is a Voluntary Disclosure mandatory?", answer: "When a business discovers an error in a filed return exceeding AED 10,000 in net tax impact." },
    ],
    relatedSlugs: ["vat-return-filing", "vat-audit-refund", "vat-registration"],
  },

  // --- Corporate Tax Services ---
  "corporate-tax": {
    slug: "corporate-tax",
    categorySlug: "corporate-tax",
    categoryName: "Corporate Tax",
    title: "UAE Corporate Tax Advisory & Compliance Solutions",
    tagline: "Strategic Tax Advisory, FTA Registration, Structuring & Filing",
    shortDesc: "Prepare your business for the 9% UAE Corporate Tax regime with expert tax impact assessments, Free Zone 0% structuring, and OECD transfer pricing.",
    fullDesc: "Federal Decree-Law No. 47 of 2022 introduced Corporate Tax in the UAE, imposing a standard rate of 9% on taxable net profits exceeding AED 375,000. All businesses operating in the UAE (including Free Zone entities) are legally required to register for Corporate Tax and file annual returns. Chartered Growth Consultants delivers end-to-end corporate tax advisory to protect profits, leverage Free Zone exemptions, and ensure compliance.",
    heroImage: "/images/tax-3d.png",
    iconName: "ShieldCheck",
    subServices: [
      "Corporate Tax Registration with FTA",
      "Annual Corporate Tax Return Filing",
      "Free Zone Qualifying Income Structuring (0% Tax Rate)",
      "Transfer Pricing Documentation & OECD Master/Local Files",
      "Corporate Tax Impact Assessment & Financial Restructuring",
    ],
    features: [
      { title: "Free Zone Optimization", desc: "Structure transactions to qualify for 0% corporate tax rate as a Qualifying Free Zone Person (QFZP)." },
      { title: "Small Business Relief (SBR)", desc: "Apply for SBR relief for revenues below AED 3 Million to enjoy zero tax liability." },
      { title: "Tax Loss Utilization", desc: "Offset current tax liabilities against carrying forward tax losses across fiscal years." },
      { title: "Corporate Group Tax Pooling", desc: "Form Tax Groups to consolidate parent and subsidiary earnings." },
    ],
    benefits: [
      "Eliminate non-compliance risk and severe late registration penalties",
      "Maximized tax efficiency taking full advantage of legal deductions and SBR",
      "Clear strategy for Free Zone Qualifying Income vs. Non-Qualifying Income",
      "Full OECD-compliant Transfer Pricing framework for related party transactions",
    ],
    steps: [
      { step: "01", title: "Tax Impact Assessment", desc: "Auditing commercial contracts, accounting policies, and revenue model." },
      { step: "02", title: "FTA Corporate Tax Registration", desc: "Obtaining Corporate Tax Registration Number (CTRN)." },
      { step: "03", title: "Financial Restructuring & SBR", desc: "Implementing required ledger adjustments and relief elections." },
      { step: "04", title: "Annual CT Return Filing", desc: "Submitting return within 9 months following tax period end." },
    ],
    whoNeedsThis: [
      "All UAE Mainland companies, Free Zone entities, and foreign branch operations",
      "Sole proprietors and individual freelancers with revenue over AED 1 Million",
    ],
    complianceNotes: "Failure to register for Corporate Tax within the deadline established by FTA Decision No. 3 of 2024 results in an administrative penalty of AED 10,000.",
    faqs: [
      { question: "What is the Corporate Tax rate in UAE?", answer: "0% for taxable net profits up to AED 375,000, and 9% for taxable profits exceeding AED 375,000." },
      { question: "Are Free Zone entities exempt from Corporate Tax?", answer: "Free Zone entities can benefit from a 0% tax rate on 'Qualifying Income' if they satisfy QFZP conditions, maintain adequate substance, and comply with Transfer Pricing rules." },
      { question: "What is Small Business Relief (SBR)?", answer: "Taxable persons with revenue equal to or below AED 3 Million in a tax period can elect for SBR, treating their taxable income as zero." },
    ],
    relatedSlugs: ["corporate-tax-registration", "corporate-tax-filing", "corporate-tax-implementation", "transfer-pricing"],
  },

  "corporate-tax-registration": {
    slug: "corporate-tax-registration",
    categorySlug: "corporate-tax",
    categoryName: "Corporate Tax",
    title: "Corporate Tax Registration Services in UAE",
    tagline: "Obtain Your Corporate Tax Registration Number (CTRN)",
    shortDesc: "Complete mandatory FTA Corporate Tax Registration for mainland, free zone, and foreign entities before deadline penalties apply.",
    fullDesc: "The Federal Tax Authority (FTA) has mandated specific deadlines for all UAE-licensed entities to complete Corporate Tax registration based on trade license issuance months. We handle the entire application on EmaraTax to secure your Corporate Tax Registration Number (CTRN).",
    heroImage: "/images/tax-3d.png",
    iconName: "ShieldCheck",
    subServices: [
      "Mandatory Corporate Tax Registration",
      "Free Zone Entity CTRN Obtainment",
      "Foreign Business & Branch Registration",
      "Individual Freelancer / Business Activity CTRN",
    ],
    features: [
      { title: "Deadline Compliance", desc: "Mapping trade license month to official FTA registration deadlines." },
      { title: "Document Verification", desc: "Reviewing authorized signatory details, MOAs, and trade licenses." },
      { title: "EmaraTax Direct Submission", desc: "Filing application directly with FTA portal." },
    ],
    benefits: [
      "Prevent mandatory AED 10,000 late registration fine",
      "Obtain official Corporate Tax Registration Certificate",
      "Establish tax compliance required by banking partners and government bodies",
    ],
    steps: [
      { step: "01", title: "License Review", desc: "Checking license issuance date and ownership structure." },
      { step: "02", title: "Document Gathering", desc: "Collecting trade license, Emirates ID, MOA, and passport copies." },
      { step: "03", title: "Portal Registration", desc: "Submitting application via FTA e-Services." },
      { step: "04", title: "Certificate Delivery", desc: "Issuance of CTRN certificate." },
    ],
    whoNeedsThis: [
      "Every active business license holder in UAE (Mainland & Free Zones)",
    ],
    complianceNotes: "Mandatory registration applies to all entities regardless of whether they generate net profit or are eligible for 0% tax.",
    faqs: [
      { question: "Do dormant or non-operational companies need Corporate Tax registration?", answer: "Yes, all active license holders must register regardless of revenue or operational status." },
    ],
    relatedSlugs: ["corporate-tax-filing", "corporate-tax-advisory", "vat-registration"],
  },

  "corporate-tax-filing": {
    slug: "corporate-tax-filing",
    categorySlug: "corporate-tax",
    categoryName: "Corporate Tax",
    title: "Corporate Tax Return Filing & Calculations",
    tagline: "Annual Tax Return Preparation, Tax Accounting & Compliance",
    shortDesc: "Accurate calculation of taxable income, tax adjustment reconciliations, and annual return filing within the 9-month FTA window.",
    fullDesc: "Every taxable person must file a Corporate Tax Return and pay due tax no later than 9 months after the end of their financial year. Our corporate tax specialists adjust IFRS financial statements for non-deductible expenses, exempt dividends, and relief elections.",
    heroImage: "/images/tax-3d.png",
    iconName: "ShieldCheck",
    subServices: [
      "Annual Corporate Tax Return Filing",
      "Taxable Profit Reconciliation & Adjustments",
      "Small Business Relief (SBR) Election Submissions",
      "Tax Loss Carry-Forward Record Keeping",
    ],
    features: [
      { title: "Accounting Adjustments", desc: "Reconciling accounting net profit to taxable net income." },
      { title: "Deduction Optimization", desc: "Identifying allowable expenses (e.g., 50% entertainment cap, interest deduction limits)." },
      { title: "Filing Assurance", desc: "Ensuring return accuracy to avoid audit flags." },
    ],
    benefits: [
      "Complete compliance within the 9-month post-fiscal deadline",
      "Avoid late filing fines and interest charges on unpaid tax",
      "Maximized legal tax deductions and allowable reliefs",
    ],
    steps: [
      { step: "01", title: "Financial Audit Review", desc: "Analyzing audited financial statements for the tax year." },
      { step: "02", title: "Tax Adjustments", desc: "Applying CT law adjustments (depreciation, non-deductible items)." },
      { step: "03", title: "Return Filing", desc: "Submitting return via EmaraTax portal." },
      { step: "04", title: "Tax Payment Guidance", desc: "Assisting with direct payment to Ministry of Finance account." },
    ],
    whoNeedsThis: [
      "Companies reaching their financial year-end in the UAE",
    ],
    complianceNotes: "Returns must be submitted within 9 months after the fiscal year-end (e.g., September 30 for December 31 fiscal year).",
    faqs: [
      { question: "What is the penalty for late filing of Corporate Tax returns?", answer: "Late filing attracts administrative fines starting from AED 500 up to AED 1,000 per month, plus monthly late payment interest." },
    ],
    relatedSlugs: ["corporate-tax", "bookkeeping-accounting", "transfer-pricing"],
  },

  "corporate-tax-implementation": {
    slug: "corporate-tax-implementation",
    categorySlug: "corporate-tax",
    categoryName: "Corporate Tax",
    title: "Corporate Tax Implementation & Structuring",
    tagline: "Financial Policy & Operational Alignment for UAE Corporate Tax",
    shortDesc: "Adapt your chart of accounts, intercompany contracts, and financial reporting systems to be fully compliant with UAE CT law.",
    fullDesc: "Transitioning to Corporate Tax requires operational alignment across your accounting software, intercompany agreements, and financial governance policies. We implement robust tax accounting procedures tailored to your commercial business model.",
    heroImage: "/images/tax-3d.png",
    iconName: "ShieldCheck",
    subServices: [
      "Chart of Accounts Restructuring for Tax Mapping",
      "Intercompany Agreement Alignment",
      "Transfer Pricing Framework Setup",
      "Executive Staff Training & Governance Policy",
    ],
    features: [
      { title: "ERP & Accounting Setup", desc: "Configuring software (Xero, QuickBooks, Zoho, SAP) for tax reporting." },
      { title: "Contract Restructuring", desc: "Aligning related party contracts with arm's length standards." },
    ],
    benefits: [
      "Smooth operational readiness for recurring corporate tax cycles",
      "Minimized risk of accounting mismatches during tax audits",
    ],
    steps: [
      { step: "01", title: "Gap Analysis", desc: "Reviewing current accounting systems." },
      { step: "02", title: "Policy Design", desc: "Creating corporate tax compliance manual." },
      { step: "03", title: "System Integration", desc: "Updating accounting software tags." },
    ],
    whoNeedsThis: [
      "Mid to large enterprises operating in UAE mainland or Free Zones",
    ],
    complianceNotes: "IFRS compliant financial accounts are mandatory for revenue exceeding AED 50 Million.",
    faqs: [
      { question: "Which accounting standards are accepted under UAE CT law?", answer: "IFRS and IFRS for SMEs are the accepted accounting standards." },
    ],
    relatedSlugs: ["corporate-tax", "transfer-pricing", "bookkeeping-accounting"],
  },

  "corporate-tax-advisory": {
    slug: "corporate-tax-advisory",
    categorySlug: "corporate-tax",
    categoryName: "Corporate Tax",
    title: "Corporate Tax Advisory & Free Zone Exemptions",
    tagline: "Maximize Free Zone 0% Tax Relief & Executive Advisory",
    shortDesc: "Bespoke corporate tax structuring for Free Zone entities (QFZP) to secure 0% tax rate on qualifying transactions.",
    fullDesc: "Navigating Qualifying Free Zone Person (QFZP) status requires strict adherence to qualifying activity lists, de minimis rules, and economic substance requirements. Our tax advisors structure your commercial activities to legally achieve 0% Corporate Tax.",
    heroImage: "/images/tax-3d.png",
    iconName: "ShieldCheck",
    subServices: [
      "QFZP (Qualifying Free Zone Person) Eligibility Assessment",
      "De Minimis Rule Compliance Modeling",
      "Qualifying vs. Non-Qualifying Income Revenue Segregation",
      "Tax Opinion & Written Advisory Reports",
    ],
    features: [
      { title: "Qualifying Activity Audit", desc: "Verifying manufacturing, trading, holding, or logistics activities against Cabinet Decisions." },
      { title: "Substance Verification", desc: "Ensuring adequate physical operational presence in the Free Zone." },
    ],
    benefits: [
      "Legally maintain 0% tax rate on qualifying income streams",
      "Prevent loss of QFZP status resulting in 9% tax on all profits for 5 years",
    ],
    steps: [
      { step: "01", title: "Revenue Stream Review", desc: "Classifying income sources." },
      { step: "02", title: "Substance Audit", desc: "Checking office lease, employees, and operating expenditure." },
      { step: "03", title: "Structuring Plan", desc: "Formulating operational modifications to meet QFZP criteria." },
    ],
    whoNeedsThis: [
      "All Free Zone businesses in DMCC, IFZA, DAFZA, JAFZA, KIZAD, ADGM, DIFC, etc.",
    ],
    complianceNotes: "Failing the de minimis test invalidates QFZP status for 5 consecutive tax years.",
    faqs: [
      { question: "What is the De Minimis requirement for Free Zone companies?", answer: "Non-qualifying revenue must not exceed 5% of total revenue or AED 5,000,000, whichever is lower." },
    ],
    relatedSlugs: ["corporate-tax", "esr-compliance", "business-setup"],
  },

  "transfer-pricing": {
    slug: "transfer-pricing",
    categorySlug: "corporate-tax",
    categoryName: "Corporate Tax",
    title: "Transfer Pricing Advisory & OECD Documentation",
    tagline: "Related Party Arm's Length Compliance & Local/Master Files",
    shortDesc: "Ensure all transactions between connected persons and related entities satisfy OECD arm's length principles under UAE Corporate Tax law.",
    fullDesc: "Under UAE Corporate Tax legislation, transactions with Related Parties and Connected Persons must meet the Arm's Length Standard. Businesses exceeding threshold criteria must prepare and maintain Transfer Pricing Master Files and Local Files.",
    heroImage: "/images/tax-3d.png",
    iconName: "ShieldCheck",
    subServices: [
      "Transfer Pricing Local File & Master File Preparation",
      "Arm's Length Price Benchmarking Analysis",
      "Disclosure Form Submissions with Annual Tax Return",
      "Intercompany Service Level Agreement (SLA) Drafting",
    ],
    features: [
      { title: "Benchmarking Databases", desc: "Utilizing global financial databases for arm's length pricing studies." },
      { title: "Connected Person Salary Audit", desc: "Verifying owner/director remuneration meets market rate standards." },
    ],
    benefits: [
      "Avoid tax adjustments and administrative fines from FTA tax audits",
      "Full compliance with international OECD Transfer Pricing Guidelines",
    ],
    steps: [
      { step: "01", title: "Related Party Identification", desc: "Mapping corporate group structure and transactions." },
      { step: "02", title: "Benchmarking Study", desc: "Conducting economic pricing comparability analysis." },
      { step: "03", title: "File Drafting", desc: "Preparing Master File and Local File documentation." },
    ],
    whoNeedsThis: [
      "Companies engaging in related party sales, management fees, intercompany loans, or director salaries",
    ],
    complianceNotes: "The FTA may request Transfer Pricing documentation at any time, which must be submitted within 30 days of request.",
    faqs: [
      { question: "What is a Related Party under UAE CT law?", answer: "Entities or individuals with direct/indirect ownership or control of 50% or more, or family members up to the fourth degree of kinship." },
    ],
    relatedSlugs: ["corporate-tax", "corporate-tax-filing", "outsourced-cfo"],
  },

  // --- Excise & ESR Services ---
  "excise-esr": {
    slug: "excise-esr",
    categorySlug: "excise-esr",
    categoryName: "Excise Tax & ESR",
    title: "Excise Tax & ESR Compliance Services in UAE",
    tagline: "Excise Goods Registration & Economic Substance Regulations Reporting",
    shortDesc: "Avoid heavy penalties (up to AED 400,000) for ESR non-compliance and maintain full excise tax compliance for regulated products.",
    fullDesc: "The UAE imposes Excise Tax on specific goods harmful to human health or the environment (carbonated drinks, energy drinks, tobacco, electronic smoking devices, sweetened beverages). Additionally, Economic Substance Regulations (ESR) mandate that entities conducting Relevant Activities maintain real operational substance in the UAE.",
    heroImage: "/images/hero-3d.png",
    iconName: "Scale",
    subServices: [
      "Excise Tax Registration & Price List Declaration",
      "Excise Tax Monthly Return Submissions",
      "ESR (Economic Substance Regulations) Notification",
      "ESR Economic Substance Annual Report & Gap Analysis",
    ],
    features: [
      { title: "Excise Stock Audit", desc: "Auditing stock transfers and warehouse declarations." },
      { title: "ESR Substance Test", desc: "Verifying Board meetings, CIGAs, physical offices, and qualified staff." },
      { title: "Fine Mitigation", desc: "Handling appeals for historical ESR notifications or reporting fines." },
    ],
    benefits: [
      "Prevent severe ESR non-compliance penalties (AED 20,000 for notification, AED 50,000+ for reporting)",
      "Ensure seamless clearance of excise goods through UAE Customs",
    ],
    steps: [
      { step: "01", title: "Classification Audit", desc: "Determining if activities trigger Excise or ESR rules." },
      { step: "02", title: "Notification Filing", desc: "Submitting annual ESR notifications via MoF portal." },
      { step: "03", title: "Substance Report", desc: "Filing detailed substance report within 12 months of fiscal year-end." },
    ],
    whoNeedsThis: [
      "Importers, producers, or stockpilers of excise products in UAE",
      "Companies engaged in Relevant Activities (Headquarters, Holding, Shipping, Banking, IP, Distribution)",
    ],
    complianceNotes: "ESR applies to both mainland and free zone entities carrying out any of the 9 defined Relevant Activities.",
    faqs: [
      { question: "What are the 9 Relevant Activities under ESR?", answer: "Banking, Insurance, Investment Fund Management, Lease-Finance, Headquarters, Shipping, Holding Company, Intellectual Property, and Distribution & Service Center Businesses." },
    ],
    relatedSlugs: ["excise-tax-registration", "esr-notification", "esr-compliance", "corporate-tax-advisory"],
  },

  "excise-tax-registration": {
    slug: "excise-tax-registration",
    categorySlug: "excise-esr",
    categoryName: "Excise Tax & ESR",
    title: "Excise Tax Registration & Monthly Return Services",
    tagline: "FTA Registration & Product Price Declaration for Excise Goods",
    shortDesc: "Complete Excise Tax registration, product list submission, and monthly return filings for carbonated drinks, tobacco, and energy drinks.",
    fullDesc: "Excise tax is an indirect tax levied on specific goods produced in, imported into, or stockpiled in the UAE. Rates are 50% for carbonated drinks & sweetened beverages, and 100% for tobacco, energy drinks, and electronic smoking devices. We manage registration and price database approvals.",
    heroImage: "/images/hero-3d.png",
    iconName: "Scale",
    subServices: [
      "Excise Tax Registration with FTA",
      "Excise Price List Declaration & Approval",
      "Monthly Excise Tax Return Preparation",
      "Designated Excise Warehouse Registration",
    ],
    features: [
      { title: "Product Registration", desc: "Registering items on FTA brand and price database." },
      { title: "Monthly Filings", desc: "Submitting monthly returns before the 15th of each month." },
    ],
    benefits: [
      "Prevent customs import blocks on excise goods",
      "Avoid penalties of 150% of tax amount for unregistered excise activities",
    ],
    steps: [
      { step: "01", title: "Product Assessment", desc: "Checking tariff codes and excise rates (50% or 100%)." },
      { step: "02", title: "FTA Portal Application", desc: "Submitting application and product datasheets." },
      { step: "03", title: "Monthly Reporting", desc: "Filing recurring monthly excise tax declarations." },
    ],
    whoNeedsThis: [
      "Importers and manufacturers of beverage, tobacco, and e-cigarette products in UAE",
    ],
    complianceNotes: "Registration must be completed prior to importing or manufacturing any excise goods in the UAE.",
    faqs: [
      { question: "What are the excise tax rates in UAE?", answer: "50% on carbonated and sweetened drinks; 100% on energy drinks, tobacco products, and electronic smoking devices." },
    ],
    relatedSlugs: ["excise-esr", "customs-registration", "vat-registration"],
  },

  "esr-notification": {
    slug: "esr-notification",
    categorySlug: "excise-esr",
    categoryName: "Excise Tax & ESR",
    title: "ESR Notification Filing Services in UAE",
    tagline: "Annual Economic Substance Notification Submission via Ministry of Finance Portal",
    shortDesc: "File your mandatory annual ESR notification within 6 months of financial year-end to avoid immediate AED 20,000 penalties.",
    fullDesc: "All UAE entities conducting a Relevant Activity must file an annual ESR Notification on the Ministry of Finance (MoF) portal within 6 months after the end of their financial year, even if they claim an exemption.",
    heroImage: "/images/hero-3d.png",
    iconName: "Scale",
    subServices: [
      "ESR Relevant Activity Assessment",
      "Annual ESR Notification Portal Submission",
      "Exemption Claim Support & Documentation",
    ],
    features: [
      { title: "Activity Classification", desc: "Expert assessment of trade license activities vs. actual revenue generated." },
      { title: "Timely Submission", desc: "Ensuring submission prior to the 6-month deadline." },
    ],
    benefits: [
      "Avoid automatic AED 20,000 administrative fine for missed notification",
      "Clear legal standing with UAE Ministry of Finance",
    ],
    steps: [
      { step: "01", title: "Review", desc: "Auditing fiscal year financial records for Relevant Activity income." },
      { step: "02", title: "Portal Filing", desc: "Submitting notification via MoF e-Services." },
    ],
    whoNeedsThis: [
      "All UAE Mainland, Free Zone, and Financial Center licensees carrying out Relevant Activities",
    ],
    complianceNotes: "Notification is required annually for every financial period in which a Relevant Activity was conducted.",
    faqs: [
      { question: "What is the deadline for ESR Notification?", answer: "Within 6 months from the end of the entity's financial year." },
    ],
    relatedSlugs: ["esr-compliance", "excise-esr", "corporate-tax-advisory"],
  },

  "esr-compliance": {
    slug: "esr-compliance",
    categorySlug: "excise-esr",
    categoryName: "Excise Tax & ESR",
    title: "ESR Reporting & Economic Substance Gap Assessment",
    tagline: "Annual Economic Substance Reporting & CIGA Compliance",
    shortDesc: "Submit your annual ESR report within 12 months and prove adequate physical substance, board meetings, and employees in the UAE.",
    fullDesc: "Entities that derive income from a Relevant Activity and do not qualify for an exemption must satisfy the Economic Substance Test and file an ESR Report within 12 months of the financial year-end. Failure to satisfy the test leads to fines starting at AED 50,000.",
    heroImage: "/images/hero-3d.png",
    iconName: "Scale",
    subServices: [
      "Economic Substance Test Evaluation (CIGA Audit)",
      "Annual ESR Report Submission via MoF Portal",
      "Substance Gap Remediation & Structuring",
      "ESR Appeal & Penalty Waiver Applications",
    ],
    features: [
      { title: "CIGA Audit", desc: "Verifying Core Income-Generating Activities conducted inside the UAE." },
      { title: "Expenditure Verification", desc: "Checking local operating expenses and qualified staff numbers." },
    ],
    benefits: [
      "Prevent severe 1st year (AED 50,000) and 2nd year (AED 400,000) non-compliance fines",
      "Avoid license suspension or cancellation risk",
    ],
    steps: [
      { step: "01", title: "Substance Audit", desc: "Evaluating staff, office space, board minutes, and operating expenditure." },
      { step: "02", title: "Report Drafting", desc: "Preparing ESR quantitative and qualitative data." },
      { step: "03", title: "MoF Submission", desc: "Filing report on official portal." },
    ],
    whoNeedsThis: [
      "Entities deriving income from Relevant Activities in the UAE",
    ],
    complianceNotes: "Report must be submitted within 12 months following the end of the financial year.",
    faqs: [
      { question: "What happens if a company fails the Economic Substance Test?", answer: "The regulatory authority imposes an administrative penalty of AED 50,000 and shares company information with foreign tax authorities." },
    ],
    relatedSlugs: ["esr-notification", "excise-esr", "corporate-tax-advisory"],
  },

  // --- Accounting & Audit Services ---
  "accounting-audit": {
    slug: "accounting-audit",
    categorySlug: "accounting-audit",
    categoryName: "Accounting & Audit",
    title: "Accounting, CFO & Audit Solutions in UAE",
    tagline: "IFRS Bookkeeping, Outsourced CFO Advisory & Statutory External Audits",
    shortDesc: "Maintain flawless IFRS-compliant financial records, gain strategic CFO guidance, and secure audited financial statements required by UAE authorities.",
    fullDesc: "Proper financial management is essential not only for business performance, but also for statutory compliance under UAE Commercial Companies Law, VAT, and Corporate Tax. Chartered Growth Consultants provides accounting, backlog record cleanup, outsourced CFO services, and independent internal/external audits.",
    heroImage: "/images/accounting-3d.png",
    iconName: "FileSpreadsheet",
    subServices: [
      "Accounting & Bookkeeping Services (IFRS Compliant)",
      "Outsourced CFO & Strategic Financial Management",
      "Internal Audit & Internal Controls Assessment",
      "External & Statutory Audit Services",
      "Inventory Audit & Stock Verification",
      "Backlog Accounting & Historical Record Cleanup",
    ],
    features: [
      { title: "Cloud Accounting", desc: "Setup and management on Xero, QuickBooks, Zoho Books, or Oracle NetSuite." },
      { title: "IFRS Standards", desc: "Financial statements prepared strictly according to International Financial Reporting Standards." },
      { title: "Audit-Ready Financials", desc: "Quarterly and annual financial packages ready for bank reviews and tax filings." },
    ],
    benefits: [
      "Fulfill mandatory requirement of maintaining 7-year accounting records in UAE",
      "Gain high-level CFO insights without the expense of a full-time executive salary",
      "Secure audited financial reports needed for bank loans, trade credit, and license renewals",
    ],
    steps: [
      { step: "01", title: "System Setup", desc: "Designing chart of accounts and integrating cloud software." },
      { step: "02", title: "Transaction Logging", desc: "Posting monthly invoices, bills, and bank reconciliations." },
      { step: "03", title: "Reporting Package", desc: "Issuing monthly P&L, Balance Sheet, and Cash Flow statements." },
      { step: "04", title: "Annual Audit", desc: "Conducting independent audit and issuing certified report." },
    ],
    whoNeedsThis: [
      "All UAE Mainland and Free Zone companies",
      "Growing companies needing financial restructuring or bank financing",
    ],
    complianceNotes: "Article 26 of UAE Commercial Companies Law requires every company to keep accounting records at its head office for at least 5 years.",
    faqs: [
      { question: "Is audit mandatory for all UAE companies?", answer: "Audit is mandatory for all UAE Mainland companies and most Free Zone authorities (such as DMCC, JAFZA, DAFZA, IFZA) upon license renewal or tax filing." },
    ],
    relatedSlugs: ["bookkeeping-accounting", "outsourced-cfo", "internal-external-audit", "inventory-backlog-audit"],
  },

  "bookkeeping-accounting": {
    slug: "bookkeeping-accounting",
    categorySlug: "accounting-audit",
    categoryName: "Accounting & Audit",
    title: "Accounting & Bookkeeping Services in UAE",
    tagline: "Monthly IFRS Bookkeeping, Ledger Management & Financial Reports",
    shortDesc: "Outsource your day-to-day bookkeeping to chartered accountants for accurate ledgers, tax readiness, and real-time financial tracking.",
    fullDesc: "Keeping accurate accounting ledgers is essential for managing cash flow and proving tax deductions during FTA audits. Our chartered accountants handle transaction logging, bank reconciliations, accounts payable/receivable, and monthly management reports.",
    heroImage: "/images/accounting-3d.png",
    iconName: "FileSpreadsheet",
    subServices: [
      "Monthly & Quarterly Bookkeeping",
      "Bank & Credit Card Reconciliations",
      "Accounts Receivable (AR) & Payable (AP) Management",
      "Financial Statement Preparation (P&L, Balance Sheet, Cash Flow)",
    ],
    features: [
      { title: "Cloud Integration", desc: "Real-time ledger updates via Xero, QuickBooks, or Zoho Books." },
      { title: "Tax Alignment", desc: "Every transaction mapped to proper VAT & Corporate Tax categories." },
    ],
    benefits: [
      "Save up to 60% compared to hiring an in-house full-time accountant",
      "Ensure 100% compliance with UAE law mandatory 7-year record retention",
    ],
    steps: [
      { step: "01", title: "Data Collection", desc: "Receiving invoices, receipts, and bank statements." },
      { step: "02", title: "Ledger Entry", desc: "Categorizing expenses, sales, and depreciation." },
      { step: "03", title: "Management Report", desc: "Delivering monthly executive financial package." },
    ],
    whoNeedsThis: [
      "SMEs, startups, and corporate subsidiaries operating in the UAE",
    ],
    complianceNotes: "Proper accounting entries are required to justify tax deductions under UAE Corporate Tax law.",
    faqs: [
      { question: "Can bookkeeping be done remotely?", answer: "Yes, using secure cloud accounting platforms like Xero or Zoho, data is synchronized safely and updated continuously." },
    ],
    relatedSlugs: ["accounting-audit", "vat-return-filing", "corporate-tax-filing"],
  },

  "outsourced-cfo": {
    slug: "outsourced-cfo",
    categorySlug: "accounting-audit",
    categoryName: "Accounting & Audit",
    title: "Outsourced CFO Services in UAE",
    tagline: "Part-Time Executive Financial Leadership & Strategic Planning",
    shortDesc: "Access senior CFO advisory for cash flow management, budgeting, financial modeling, and investor pitch deck preparation.",
    fullDesc: "Growing businesses need high-level financial strategy, cash flow forecasting, and capital planning, but hiring a full-time CFO can cost AED 50,000+ per month. Our Outsourced CFO service provides high-caliber financial leadership on a flexible part-time basis.",
    heroImage: "/images/accounting-3d.png",
    iconName: "FileSpreadsheet",
    subServices: [
      "Part-Time / Virtual CFO Advisory",
      "Cash Flow Forecasting & Working Capital Management",
      "Financial Modeling, Budgeting & Variance Analysis",
      "Banking Relationship Management & Trade Finance Setup",
    ],
    features: [
      { title: "Executive Decision Support", desc: "Strategic counsel for expansion, M&A, and cost optimization." },
      { title: "Investor Readiness", desc: "Financial modeling and valuation for equity fundraising." },
    ],
    benefits: [
      "Access veteran executive guidance at a fraction of full-time cost",
      "Optimize cash flow cycles and eliminate wasteful expenditure",
    ],
    steps: [
      { step: "01", title: "Financial Diagnostics", desc: "Evaluating existing financial structure and unit economics." },
      { step: "02", title: "Strategy Formulation", desc: "Establishing 12-month budget models & KPI dashboards." },
      { step: "03", title: "Ongoing Advisory", desc: "Bi-weekly executive board meetings and review." },
    ],
    whoNeedsThis: [
      "Scale-ups, SMEs, and family businesses expanding operations in the GCC",
    ],
    complianceNotes: "Strategic financial management ensures corporate solvency and prevents wrongful trading liability.",
    faqs: [
      { question: "What is the difference between an accountant and an outsourced CFO?", answer: "An accountant records past financial transactions, whereas an Outsourced CFO analyzes financial data to shape future business growth, cash flow, and profitability strategies." },
    ],
    relatedSlugs: ["accounting-audit", "transfer-pricing", "bookkeeping-accounting"],
  },

  "internal-external-audit": {
    slug: "internal-external-audit",
    categorySlug: "accounting-audit",
    categoryName: "Accounting & Audit",
    title: "Internal & External Statutory Audit Services",
    tagline: "Independent Financial Audits & Internal Governance Controls",
    shortDesc: "Secure official audited financial statements certified by licensed auditors for Free Zone renewals, bank credit, and FTA compliance.",
    fullDesc: "An independent external audit provides credibility to your business's financial statements for shareholders, lenders, and UAE authorities. Additionally, our internal audit services evaluate risk controls, prevent fraud, and ensure operational integrity.",
    heroImage: "/images/accounting-3d.png",
    iconName: "FileSpreadsheet",
    subServices: [
      "Statutory External Audit & Auditor Opinion Letter",
      "Internal Controls Audit & Risk Management Assessment",
      "Financial Fraud Investigation & Forensic Accounting",
      "Free Zone Audit Filing Compliance",
    ],
    features: [
      { title: "Approved Audit Partners", desc: "Audit reports accepted by all UAE Free Zone authorities and major banks." },
      { title: "Risk Mitigation", desc: "Internal control reviews to plug revenue leakages." },
    ],
    benefits: [
      "Satisfy mandatory Free Zone license renewal requirements",
      "Build trust with commercial banks for trade credit and facilities",
    ],
    steps: [
      { step: "01", title: "Audit Planning", desc: "Scoping financial records, trial balance, and sampling transactions." },
      { step: "02", title: "Fieldwork", desc: "Verifying invoices, bank confirmations, assets, and liabilities." },
      { step: "03", title: "Management Letter", desc: "Issuing findings and internal control recommendations." },
      { step: "04", title: "Final Signed Report", desc: "Issuing official independent auditor's report." },
    ],
    whoNeedsThis: [
      "Companies registered in DMCC, JAFZA, DAFZA, DIFC, ADGM, etc., and Mainland entities requiring bank credit",
    ],
    complianceNotes: "Many Free Zone authorities penalize entities failing to submit annual audited financial statements upon license renewal.",
    faqs: [
      { question: "How long does an external audit take?", answer: "Typically 1 to 3 weeks depending on company size and record organization." },
    ],
    relatedSlugs: ["accounting-audit", "inventory-backlog-audit", "corporate-tax-filing"],
  },

  "inventory-backlog-audit": {
    slug: "inventory-backlog-audit",
    categorySlug: "accounting-audit",
    categoryName: "Accounting & Audit",
    title: "Inventory Audit & Backlog Accounting Services",
    tagline: "Physical Stock Count Verification & Multi-Year Accounting Cleanup",
    shortDesc: "Reconstruct missing historical books and perform physical inventory counts to bring neglected accounting records up to date.",
    fullDesc: "If your company has fallen behind on bookkeeping for months or years, attempting to register for Corporate Tax or submit VAT returns can lead to severe fines. We specialize in backlog accounting cleanup and physical inventory stock verifications.",
    heroImage: "/images/accounting-3d.png",
    iconName: "FileSpreadsheet",
    subServices: [
      "Historical Backlog Accounting Cleanup (Multi-Year)",
      "Physical Inventory & Warehouse Stock Verification",
      "Fixed Asset Register Audit & Reconciliation",
      "Opening Balance Restatement",
    ],
    features: [
      { title: "Data Reconstruction", desc: "Rebuilding ledgers from raw bank statements and invoices." },
      { title: "Stock Auditing", desc: "On-site physical inventory counts and valuation." },
    ],
    benefits: [
      "Bring neglected accounting ledgers up to 100% compliance quickly",
      "Accurately calculate cost of goods sold (COGS) and inventory write-offs",
    ],
    steps: [
      { step: "01", title: "Document Recovery", desc: "Gathering historical bank statements, sales receipts, and bills." },
      { step: "02", title: "Ledger Reconstruction", desc: "Entering transactions into cloud accounting software." },
      { step: "03", title: "Stock Reconciliation", desc: "Performing physical count and adjusting book values." },
    ],
    whoNeedsThis: [
      "Companies with neglected accounting books needing immediate tax compliance",
    ],
    complianceNotes: "Corporate Tax registration requires continuous financial accounts starting from the first covered tax period.",
    faqs: [
      { question: "Can you rebuild financial statements from bank statements alone?", answer: "Yes, by cross-referencing bank statements with trade documents, we can reconstruct compliant historical books." },
    ],
    relatedSlugs: ["bookkeeping-accounting", "accounting-audit", "corporate-tax-registration"],
  },

  // --- Corporate & Compliance Solutions ---
  "corporate-compliance": {
    slug: "corporate-compliance",
    categorySlug: "corporate-compliance",
    categoryName: "More Solutions",
    title: "Corporate & Compliance Solutions in UAE",
    tagline: "Business Setup, GoAML, TRC & Customs Registration",
    shortDesc: "One-stop solutions for corporate governance, GoAML registration, tax residency certificates, customs onboarding, and company liquidation.",
    fullDesc: "Operating a compliant enterprise in the UAE requires keeping pace with evolving statutory directives, including Anti-Money Laundering (AML) mandates, Tax Residency Certificates (TRC), Dubai Customs registration, and Ultimate Beneficial Owner (UBO) filings. We handle end-to-end corporate governance.",
    heroImage: "/images/formation-3d.png",
    iconName: "Globe",
    subServices: [
      "Company Formation & Business Setup (Mainland & Free Zone)",
      "GoAML Registration for DNFBPs & Financial Institutions",
      "Tax Residency Certificate (TRC) Procurement",
      "Customs Registration with Dubai & UAE Customs",
      "Company Liquidation & Legal Business De-registration",
      "UBO (Ultimate Beneficial Owner) Declaration & Register Setup",
    ],
    features: [
      { title: "Turnkey Corporate Advisory", desc: "Complete administrative guidance from formation to liquidation." },
      { title: "AML Compliance Framework", desc: "Policy drafting and risk matrix setup for GoAML compliance." },
      { title: "TRC Obtainment", desc: "Procuring official Ministry of Finance certificates to prevent double taxation." },
    ],
    benefits: [
      "Prevent severe AML fines (starting from AED 50,000) for un-registered DNFBPs",
      "Leverage UAE's 130+ Double Tax Avoidance Agreements (DTAA) globally",
      "Ensure clean legal exit and clearance upon company liquidation",
    ],
    steps: [
      { step: "01", title: "Requirements Mapping", desc: "Identifying target regulatory filings based on business activities." },
      { step: "02", title: "Documentation & Verification", desc: "Assembling attested legal files and identity credentials." },
      { step: "03", title: "Portal Submission", desc: "Filing via MoF, FIU GoAML, or Customs portals." },
      { step: "04", title: "Certificate Issuance", desc: "Receiving official licenses, codes, or certificates." },
    ],
    whoNeedsThis: [
      "Real estate brokers, precious metals traders, accountants, trust providers (DNFBPs)",
      "Exporters/Importers needing customs code",
      "Individuals and corporations seeking UAE Tax Residency status",
    ],
    complianceNotes: "Cabinet Decision No. (10) of 2019 mandates strict AML/CFT compliance for all Designated Non-Financial Businesses and Professions (DNFBPs).",
    faqs: [
      { question: "What is a DNFBP in the UAE?", answer: "Designated Non-Financial Businesses and Professions include Real Estate Agents, Dealers in Precious Metals/Stones, Lawyers, Notaries, Independent Accountants, and Corporate Service Providers." },
    ],
    relatedSlugs: ["goaml-registration", "tax-residency-certificate", "business-setup", "customs-registration", "company-liquidation"],
  },

  "goaml-registration": {
    slug: "goaml-registration",
    categorySlug: "corporate-compliance",
    categoryName: "More Solutions",
    title: "GoAML Registration & AML Compliance Services",
    tagline: "Mandatory Anti-Money Laundering Registration for UAE Entities",
    shortDesc: "Complete mandatory GoAML registration on the Financial Intelligence Unit (FIU) portal to protect your business against severe AML penalties.",
    fullDesc: "The UAE Ministry of Economy mandates that all Designated Non-Financial Businesses and Professions (DNFBPs) and Financial Institutions register on the GoAML portal. Chartered Growth Consultants manages your SACM and GoAML portal registration, AML policy drafting, and MLRO appointment.",
    heroImage: "/images/formation-3d.png",
    iconName: "Globe",
    subServices: [
      "GoAML Portal Registration (Stage 1 SACM & Stage 2 GoAML)",
      "AML / CFT Policy Manual Drafting & Risk Assessment Matrix",
      "Appointment of Money Laundering Reporting Officer (MLRO)",
      "Suspicious Transaction Report (STR) & SAR Filing Support",
    ],
    features: [
      { title: "Two-Stage Registration", desc: "Seamless registration on SACM portal and FIU GoAML system." },
      { title: "Custom AML Manual", desc: "Tailored anti-money laundering policy manual compliant with Ministry standards." },
    ],
    benefits: [
      "Eliminate risk of AED 50,000 to AED 5,000,000 administrative AML fines",
      "Protect company license against suspension or revocation",
    ],
    steps: [
      { step: "01", title: "Prerequisite Verification", desc: "Securing Google Authenticator and MoE approval." },
      { step: "02", title: "SACM & GoAML Submission", desc: "Registering organization and MLRO profiles." },
      { step: "03", title: "Approval & Policy Setup", desc: "Delivering GoAML registration certificate & AML manual." },
    ],
    whoNeedsThis: [
      "Real estate brokers, dealers in precious metals & stones, auditors, corporate service providers, lawyers",
    ],
    complianceNotes: "Failure to register on GoAML results in immediate Ministry inspectorial fines and trade license sanctions.",
    faqs: [
      { question: "What is GoAML?", answer: "GoAML is an anti-money laundering reporting system developed by the United Nations Office on Drugs and Crime (UNODC) and deployed by the UAE Financial Intelligence Unit (FIU)." },
    ],
    relatedSlugs: ["corporate-compliance", "business-setup", "tax-residency-certificate"],
  },

  "tax-residency-certificate": {
    slug: "tax-residency-certificate",
    categorySlug: "corporate-compliance",
    categoryName: "More Solutions",
    title: "Tax Residency Certificate (TRC) Procurement Services",
    tagline: "Official Ministry of Finance Tax Residence Certificate for Individuals & Companies",
    shortDesc: "Obtain an official UAE Tax Residency Certificate to avoid double taxation globally under UAE's 130+ Double Taxation Treaties.",
    fullDesc: "A Tax Residency Certificate (TRC) issued by the UAE Federal Tax Authority (FTA) enables foreign individuals and entities operating in the UAE to claim benefits under Double Taxation Avoidance Agreements (DTAA) between the UAE and foreign nations.",
    heroImage: "/images/formation-3d.png",
    iconName: "Globe",
    subServices: [
      "Corporate Tax Residency Certificate (TRC) Procurement",
      "Individual Tax Residency Certificate Procurement",
      "Double Taxation Treaty Relief Advisory",
    ],
    features: [
      { title: "Corporate TRC", desc: "For companies operating in UAE for at least 1 year with audited financial statements." },
      { title: "Individual TRC", desc: "For residents residing in UAE for at least 183 days (or 90 days under specific conditions)." },
    ],
    benefits: [
      "Prevent foreign tax authorities from levying double income or withholding tax",
      "Official certificate issued directly by the Federal Tax Authority",
    ],
    steps: [
      { step: "01", title: "Eligibility Assessment", desc: "Reviewing tenancy contract, bank statements, and entry/exit records." },
      { step: "02", title: "FTA Application", desc: "Filing application on FTA portal." },
      { step: "03", title: "Certificate Delivery", desc: "Issuance of digital TRC document." },
    ],
    whoNeedsThis: [
      "Expat business owners, investors, and UAE companies with overseas earnings",
    ],
    complianceNotes: "Corporate TRC requires a minimum of 12 months active operational history in the UAE.",
    faqs: [
      { question: "How long is a Tax Residency Certificate valid?", answer: "A TRC is valid for 1 year from the date of issuance." },
    ],
    relatedSlugs: ["corporate-compliance", "corporate-tax-advisory", "business-setup"],
  },

  "business-setup": {
    slug: "business-setup",
    categorySlug: "corporate-compliance",
    categoryName: "More Solutions",
    title: "Business Setup & Company Formation Services in UAE",
    tagline: "Turnkey Setup in UAE Mainland, Free Zones & Offshore",
    shortDesc: "Form your business in Dubai and across the UAE with fast trade license issuance, office space solutions, and corporate bank account opening assistance.",
    fullDesc: "Setting up a business in the UAE offers 100% foreign ownership, zero personal income tax, and access to global trade hubs. We guide entrepreneurs and multinationals through jurisdiction selection (Mainland, Free Zone, Offshore), activity selection, trade name reservation, and license issuance.",
    heroImage: "/images/formation-3d.png",
    iconName: "Globe",
    subServices: [
      "Mainland Company Formation (100% Foreign Ownership)",
      "Free Zone Company Setup (IFZA, DMCC, Meydan, JAFZA, etc.)",
      "Branch Office & Representative Office Establishment",
      "Corporate Bank Account Opening Assistance",
    ],
    features: [
      { title: "Fast-Track Licensing", desc: "Obtain your trade license within 24 to 48 hours in select Free Zones." },
      { title: "Banking Assistance", desc: "Dedicated introduction to top UAE tier-1 banks (Emirates NBD, Mashreq, Wio)." },
    ],
    benefits: [
      "Enjoy 100% foreign equity ownership across mainland and free zone jurisdictions",
      "Seamless integration with tax, visa, and accounting services under one roof",
    ],
    steps: [
      { step: "01", title: "Structure & Activity Selection", desc: "Choosing optimal jurisdiction and business activity codes." },
      { step: "02", title: "Name Reservation & Initial Approval", desc: "Securing DED or Free Zone authority approvals." },
      { step: "03", title: "License Issuance & Office", desc: "Signing MOA and issuing official commercial license." },
      { step: "04", title: "Bank Account & Visas", desc: "Opening bank accounts and issuing residency visas." },
    ],
    whoNeedsThis: [
      "International entrepreneurs, investors, startups, and foreign corporations expanding to the Middle East",
    ],
    complianceNotes: "Mainland entities now allow 100% foreign ownership for over 1,000 commercial and industrial activities.",
    faqs: [
      { question: "What is the difference between Mainland and Free Zone?", answer: "Mainland allows unlimited trading anywhere in the UAE local market without restrictions, whereas Free Zone entities enjoy tax perks and special zone infrastructure." },
    ],
    relatedSlugs: ["visa-pro-services", "corporate-tax-registration", "vat-registration"],
  },

  "customs-registration": {
    slug: "customs-registration",
    categorySlug: "corporate-compliance",
    categoryName: "More Solutions",
    title: "Customs Registration Services in UAE",
    tagline: "Obtain Customs Client Code for Importers & Exporters",
    shortDesc: "Register your business with Dubai Customs or UAE Customs to obtain an official Customs Code for import, export, and re-export activities.",
    fullDesc: "Any company wishing to import or export commercial goods into or out of the UAE must register with the respective Customs Authority (e.g., Dubai Customs Mirsal II) and obtain a unique Customs Client Code.",
    heroImage: "/images/formation-3d.png",
    iconName: "Globe",
    subServices: [
      "Dubai Customs Registration & Client Code Obtainment",
      "Customs Code Annual Renewal",
      "Mirsal II Account Setup",
    ],
    features: [
      { title: "Mirsal II Setup", desc: "Enabling online declaration of shipments and customs clearance." },
    ],
    benefits: [
      "Clear commercial cargo smoothly through UAE ports and airports",
      "Facilitate duty exemptions for re-export and free zone transfers",
    ],
    steps: [
      { step: "01", title: "Document Review", desc: "Gathering trade license, MOA, passport, and lease contract." },
      { step: "02", title: "Customs Submission", desc: "Submitting application on Dubai Trade portal." },
      { step: "03", title: "Code Issuance", desc: "Receiving official Customs Code." },
    ],
    whoNeedsThis: [
      "General trading, import/export, and logistics businesses in the UAE",
    ],
    complianceNotes: "Customs registration must be renewed annually alongside trade license renewals.",
    faqs: [
      { question: "What is a Customs Client Code?", answer: "A unique identification code issued by UAE Customs enabling a company to clear import and export shipments." },
    ],
    relatedSlugs: ["excise-tax-registration", "business-setup", "vat-registration"],
  },

  "company-liquidation": {
    slug: "company-liquidation",
    categorySlug: "corporate-compliance",
    categoryName: "More Solutions",
    title: "Company Liquidation & Legal De-Registration Services",
    tagline: "Official Business Closure, Tax Clearance & License Cancellation",
    shortDesc: "Close your UAE business legally with complete liquidator report issuance, tax deregistration, and authority clearance certificates.",
    fullDesc: "Winding down a business in the UAE requires formal liquidator appointment, public notice publication, clearance certificates from utilities/customs/immigration, FTA tax deregistration, and final license cancellation.",
    heroImage: "/images/formation-3d.png",
    iconName: "Globe",
    subServices: [
      "Official Liquidator Appointment & Audit Statement",
      "Public Newspaper Notice Publication",
      "Government Clearance Certificates (Immigration, Labor, Customs, Utilities)",
      "Final Trade License Cancellation",
    ],
    features: [
      { title: "Approved Liquidators", desc: "Issuing official Statement of Solvency and Liquidator Report." },
      { title: "Tax Clearance", desc: "Ensuring complete VAT and Corporate Tax cancellation prior to license closure." },
    ],
    benefits: [
      "Avoid recurring trade license renewal penalties and blacklisting",
      "Ensure shareholders and directors are free from future legal liabilities",
    ],
    steps: [
      { step: "01", title: "Board Resolution", desc: "Passing resolution to liquidate and appointing liquidator." },
      { step: "02", title: "Clearances & Notice", desc: "Publishing 45-day newspaper ad and clearing government accounts." },
      { step: "03", title: "Final Report & Cancellation", desc: "Submitting liquidator report and securing cancellation certificate." },
    ],
    whoNeedsThis: [
      "Companies ceasing operations or restructuring corporate holdings in the UAE",
    ],
    complianceNotes: "Failure to formally liquidate results in continuous annual license fines and bank account freezes.",
    faqs: [
      { question: "How long does company liquidation take in UAE?", answer: "Typically 60 to 90 days to fulfill newspaper notification periods and clear all government departments." },
    ],
    relatedSlugs: ["vat-deregistration", "business-setup", "corporate-compliance"],
  },

  // --- Visa & PRO Services ---
  "visa-pro-services": {
    slug: "visa-pro-services",
    categorySlug: "corporate-compliance",
    categoryName: "More Solutions",
    title: "Visa & Government PRO Services in UAE",
    tagline: "Investor Visas, 10-Year Golden Visas, Employee Visas & PRO Support",
    shortDesc: "Fast-track UAE residency visa processing, Emirates ID, medical fitness tests, family sponsorships, and dedicated corporate PRO liaison.",
    fullDesc: "Navigating UAE immigration and residency requirements requires seamless coordination across the General Directorate of Residency and Foreigners Affairs (GDRFA), Federal Authority for Identity, Citizenship, Customs and Port Security (ICP), and Ministry of Human Resources and Emiratisation (MOHRE). Chartered Growth Consultants provides end-to-end PRO and visa services.",
    heroImage: "/images/hero-3d.png",
    iconName: "Users2",
    subServices: [
      "Investor & Partner Residency Visas (2-Year & 10-Year Golden Visas)",
      "Employee Employment Visas & MOHRE Work Permits",
      "Family & Dependent Visa Processing (Spouse, Children, Parents)",
      "Emirates ID, VIP Medical Fitness & Health Insurance Setup",
      "Document Attestation (Ministry of Foreign Affairs - MOFA)",
      "Corporate PRO & Ministry Liaison Services",
    ],
    features: [
      { title: "VIP Processing", desc: "Escorted VIP medical fitness screening and priority Emirates ID typing." },
      { title: "Golden Visa Guidance", desc: "Securing 10-year residency for real estate investors, entrepreneurs, and skilled professionals." },
      { title: "Quota Management", desc: "Handling MOHRE labor quotas and work permit approvals." },
    ],
    benefits: [
      "Save valuable time with a dedicated corporate PRO managing all authority paperwork",
      "Avoid residency visa overstay fines and MOHRE labor penalty notices",
      "Ensure fast, hassle-free onboarding for corporate leadership and employees",
    ],
    steps: [
      { step: "01", title: "Entry Permit Application", desc: "Submitting visa application and obtaining electronic entry permit." },
      { step: "02", title: "Medical & Emirates ID", desc: "Attending VIP medical fitness test and biometrics capture." },
      { step: "03", title: "Residency Stamping", desc: "Securing digital residency visa approval and Emirates ID delivery." },
    ],
    whoNeedsThis: [
      "Business owners, investors, corporate executives, and companies hiring staff in the UAE",
    ],
    complianceNotes: "Residency visas must be renewed prior to expiration to avoid daily overstay fines enforced by ICP.",
    faqs: [
      { question: "Who qualifies for a UAE 10-Year Golden Visa?", answer: "Real estate investors purchasing property valued at AED 2 Million+, entrepreneurs with business capital, executive professionals earning AED 30,000+ monthly, and exceptionally talented individuals." },
      { question: "How long does employee visa processing take?", answer: "Typically 5 to 7 business days from entry permit issuance to Emirates ID delivery." },
    ],
    relatedSlugs: ["business-setup", "corporate-compliance", "tax-residency-certificate"],
  },
};
