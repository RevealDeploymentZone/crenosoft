# Service Page SEO Strategy & Implementation Guide

**Status:** Phase 1 Complete (1/24 pages live)
**Next Priority:** Cloud Consulting rename + MVP Development
**Timeline:** 24 pages × 8-10 hours = 192-240 hours total (6-8 weeks at 30h/week)

---

## Executive Summary

Crenosoft's current service pages are targeting unwinnable keywords (KD 54-57) or targeting nothing at all. This strategy retargets existing pages and adds 18 new pages focused on:

1. **Lower competition** (KD 0-13 for most targets)
2. **Higher commercial intent** ($8-$25 CPC)
3. **Specific, winnable modifiers** (custom, services, consulting)

**Key Insight:** `ai agent development services` (KD 13, $15 CPC) vs `ai development company` (KD 57). Same expertise, 4x easier to rank.

**Best Opportunity:** IT Staff Augmentation - KD 1, 4,000 searches, $25 CPC. **✅ DONE**

---

## Current State Assessment

### Existing 6 Pages - All Need Rebuilding

| URL | Current Status | Primary Keyword | Global Vol | KD | CPC |
|-----|---------------|-----------------|------------|----|----|
| /services/ai-software-development | Stub, wrong target | ai software development services | 4,900 | 45 | $0.60 |
| /services/ai-automation | Stub, no target | ai automation services | 4,300 | 10 | $0.90 |
| /services/web-development | Stub, wrong target | custom web development services | 6,000 | 8 | $7.00 |
| /services/mobile-app-development | Stub, wrong target | custom mobile app development company | 3,500 | 12 | $10.00 |
| /services/cloud-solutions | Stub, **rename needed** | cloud consulting services | 6,400 | **1** | $0.30 |
| /services/ui-ux-design | Stub, good target | ui ux design services | 7,000 | 9 | $0.40 |

**Problems:**
- All 5-10 paragraphs (current: ~400-600 words each)
- No defined primary keyword (or wrong one)
- Minimal internal linking
- Zero external authority links
- Thin content = won't rank

---

## New Pages to Build (18 Total)

### Tier 1 — Build These First (6 pages)

| Priority | URL | Primary Keyword | Vol | KD | CPC | Why Build First |
|----------|-----|-----------------|-----|----|----|-----------------|
| **1** | /services/it-staff-augmentation | it staff augmentation services | 4,000 | **1** | **$25** | ✅ **DONE** - Best opportunity on entire site |
| **2** | /services/cloud-consulting | cloud consulting services | 6,400 | **1** | $0.30 | Rename existing page, massive vol at KD 1 |
| **3** | /services/mvp-development | mvp development services | 4,300 | **2** | $1.00 | Lowest-risk offering for unknown agency |
| **4** | /services/legacy-modernization | legacy application modernization services | 3,100 | **4** | $1.40 | No Indian competition |
| **5** | /services/ai-agent-development | ai agent development services | 2,600 | **13** | **$15** | Matches actual expertise, high CPC |
| **6** | /services/custom-software-development | custom software development company | 12,000 | **5** | $0.30 | Becomes a pillar, 12K vol |

### Tier 2 — Build Next (7 pages)

| URL | Primary Keyword | Vol | KD | CPC |
|-----|-----------------|-----|----|----|
| /services/generative-ai-development | generative ai development company | 3,400 | 23 | $15.00 |
| /services/ai-consulting | generative ai consulting | 2,900 | 15 | $18.00 |
| /services/devops-services | devops consulting services | 4,200 | 4 | $0.35 |
| /services/data-engineering | data engineering services | 4,400 | 9 | $7.00 |
| /services/ai-chatbot-development | chatbot development company | 1,400 | 9 | $4.00 |
| /services/api-development | api development services | 2,100 | **0** | $0.30 |
| /services/digital-transformation | digital transformation consulting | 11,000 | 6 | $0.60 |

**Standouts:** `api development services` is KD 0. `digital transformation consulting` is 11K vol at KD 6 (unusually soft).

### Tier 3 — Long Tail (5 pages)

| URL | Primary Keyword | Vol | KD | CPC |
|-----|-----------------|-----|----|----|
| /services/rag-development | rag development services | 600 | 5 | $8.00 |
| /services/ai-integration | ai integration services | 4,500 | 22 | $1.10 |
| /services/qa-testing | qa testing services | 2,200 | 16 | $3.50 |
| /services/product-design | product design agency | 2,500 | 14 | $0.30 |
| /services/cloud-migration | cloud migration consulting services | 2,600 | 6 | $0.50 |

**Note:** RAG development has low volume (600) but $8 CPC and KD 5 — cheap to build, high-intent, feeds off blog cluster.

---

## Engagement Model Pages (Separate Silo - 3 pages)

Keep these **out of /services/** — they answer "how do I engage you," not "what do you build."

| URL | Primary Keyword | Vol | KD | CPC |
|-----|-----------------|-----|----|----|
| /offshore-software-development | offshore software development company | 2,700 | 10 | $18.00 |
| /offshore-development-center | offshore development center | 2,100 | 4 | $0.08 |
| /software-development-outsourcing | software development outsourcing company | 1,600 | 12 | $0.60 |

---

## Final Architecture

```
/services/                                    ← index page, links to all
├── ai-software-development                   ← PILLAR (don't chase KD 54 directly)
│   ├── ai-agent-development                  ← child
│   ├── generative-ai-development             ← child
│   ├── ai-automation                         ← child
│   ├── ai-chatbot-development                ← child
│   ├── ai-consulting                         ← child
│   ├── ai-integration                        ← child
│   └── rag-development                       ← child
├── custom-software-development               ← PILLAR
│   ├── mvp-development                       ← child
│   ├── saas-development                      ← child
│   ├── legacy-modernization                  ← child
│   └── api-development                       ← child
├── web-development
├── mobile-app-development
├── cloud-consulting                          ← RENAMED from cloud-solutions
│   └── cloud-migration
├── devops-services
├── data-engineering
├── ui-ux-design
│   └── product-design
├── qa-testing
├── it-staff-augmentation                     ← ✅ DONE
└── digital-transformation

/offshore-software-development
/offshore-development-center
/software-development-outsourcing
```

**Total: 24 service pages + 3 engagement pages = 27 pages**

---

## Content Requirements Per Page

### Word Count
- **Minimum:** 1,500 words (actual content, not code)
- **Target:** 1,800-2,200 words
- **Example:** IT Staff Augmentation = 2,500 words

### Structure (Follow IT Staff Augmentation Template)

1. **Hero Section**
   - H1 with primary keyword
   - Emoji icon
   - Clear value prop (1-2 sentences)
   - CTA button

2. **Intro Section (300-400 words)**
   - H2: Problem statement or context
   - 3-4 paragraphs explaining why this service matters
   - **Internal links:** 2-3 to related services
   - **External links:** 1-2 to authoritative sources (Gartner, McKinsey, government sites)

3. **Capabilities/What We Build (400-500 words)**
   - H2: "What We Build" / "Our Capabilities" / "Services We Provide"
   - 6-8 capability cards with icons, titles, descriptions
   - Each card 40-60 words

4. **Process Section (200-300 words)**
   - H2: "How We Work" / "Our Process"
   - 4-step process with numbered steps
   - Each step 40-60 words

5. **Benefits/Comparison (300-400 words)**
   - H2: "Why Choose [Service]" / "Key Benefits"
   - 6 benefit cards OR comparison table
   - If comparison, show vs competitors/alternatives

6. **Pricing (Optional, 100-200 words)**
   - H2: "Pricing" / "[Service] Costs in India"
   - Table with indicative ranges
   - Disclaimer about custom quotes

7. **FAQ Section (400-600 words)**
   - H2: "Frequently Asked Questions"
   - 6-10 Q&A pairs
   - Each answer 40-80 words
   - **Must have for Schema markup**

8. **Use Cases/When to Use (Optional, 200-300 words)**
   - H2: "When [Service] Makes Sense" / "Use Cases"
   - 4-6 scenarios with icons

9. **Related Services + CTA**
   - H2: None needed
   - 3-4 related service links
   - Final CTA section with background

### Internal Linking Rules

**Minimum 5 internal links per page:**
- 2-3 to related services
- 2-3 to relevant blog posts
- Link from intro, capabilities, and FAQ sections

**Blog posts to link to (where relevant):**
- /blog/ai-automation-india-2025
- /blog/custom-ai-software-development-india-2025
- /blog/ai-agent-basics
- /blog/llm-integration-guide
- /blog/nextjs-seo-2025
- /blog/react-native-vs-flutter
- /blog/cloud-migration-guide-indian-startups-2025
- /blog/cloud-cost-optimisation
- /blog/ui-ux-design-trends-2025-india

### External Linking Requirements

**Minimum 2 external links per page** to authoritative sources:

**Tech/Industry:**
- https://www.gartner.com/
- https://www.mckinsey.com/
- https://www.forrester.com/
- https://www.idc.com/
- https://nasscom.in/
- https://www.statista.com/

**Government/Compliance (India-specific):**
- https://www.meity.gov.in/data-protection-framework (DPDP Act)
- https://www.rbi.org.in/ (RBI guidelines for fintech)
- https://ndhm.gov.in/ (ABDM for healthcare)

**Open Source/Tools:**
- https://www.langchain.com/
- https://www.llamaindex.ai/
- https://aws.amazon.com/
- https://nextjs.org/
- https://reactnative.dev/
- https://flutter.dev/

**Use `target="_blank" rel="noopener noreferrer"` for all external links.**

### Schema Markup Requirements

**Every page must include 3 schema types:**

1. **Service Schema**
```typescript
{
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://www.crenosoft.in/services/[slug]/#service",
  name: "[Service Name]",
  provider: { "@id": "https://www.crenosoft.in/#organization" },
  areaServed: { "@type": "Country", name: "India" },
  url: "https://www.crenosoft.in/services/[slug]",
  description: metadata.description,
}
```

2. **FAQ Schema**
```typescript
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map(([q, a]) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
}
```

3. **Breadcrumb Schema**
```typescript
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.crenosoft.in" },
    { "@type": "ListItem", position: 2, name: "Services", item: "https://www.crenosoft.in/services" },
    { "@type": "ListItem", position: 3, name: "[Service Name]", item: "https://www.crenosoft.in/services/[slug]" },
  ],
}
```

---

## Metadata Template

```typescript
export const metadata: Metadata = {
  title: "[Primary Keyword] — [Benefit] | Crenosoft",
  description: "[Service description 140-160 chars with primary keyword, location (India), and value prop. Include DPDP/compliance if relevant.]",
  alternates: { canonical: "https://www.crenosoft.in/services/[slug]" },
};
```

**Title formula:** `Primary Keyword — Benefit | Crenosoft`

Examples:
- ✅ "IT Staff Augmentation Services India — Hire Skilled Developers | Crenosoft"
- ✅ "MVP Development Services — Launch Your Product Faster | Crenosoft"
- ✅ "Cloud Consulting Services India — AWS, Azure, GCP Experts | Crenosoft"

**Description formula:** Service + location + differentiator + 1-2 capabilities + compliance/tech stack

---

## Build Order & Assignments

### Week 1-2: Tier 1 Priority (6 pages)

| Order | Page | Status | Assigned | Est. Hours |
|-------|------|--------|----------|------------|
| 1 | IT Staff Augmentation | ✅ Done | Claude | 8h |
| 2 | Cloud Consulting (rename) | Pending | - | 6h |
| 3 | MVP Development | Pending | - | 8h |
| 4 | Legacy Modernization | Pending | - | 8h |
| 5 | AI Agent Development | Pending | - | 8h |
| 6 | Custom Software Dev (pillar) | Pending | - | 10h |

### Week 3-4: Rebuild Existing 6 Pages

| Order | Page | Current Words | Target Words | Est. Hours |
|-------|------|---------------|--------------|------------|
| 7 | AI Software Dev (pillar) | 600 | 1,800 | 8h |
| 8 | AI Automation | 600 | 1,800 | 8h |
| 9 | Web Development | 500 | 1,800 | 8h |
| 10 | Mobile App Development | 500 | 1,800 | 8h |
| 11 | UI/UX Design | 400 | 1,800 | 8h |
| 12 | Offshore Software Dev | New | 1,800 | 8h |

### Week 5-7: Tier 2 Pages (7 pages)

| Order | Page | Est. Hours |
|-------|------|------------|
| 13 | Generative AI Development | 8h |
| 14 | AI Consulting | 8h |
| 15 | DevOps Services | 8h |
| 16 | Data Engineering | 8h |
| 17 | AI Chatbot Development | 8h |
| 18 | API Development | 6h |
| 19 | Digital Transformation | 8h |

### Week 8: Tier 3 + Engagement Pages (8 pages)

| Order | Page | Est. Hours |
|-------|------|------------|
| 20 | RAG Development | 6h |
| 21 | AI Integration | 7h |
| 22 | QA Testing | 7h |
| 23 | Product Design | 7h |
| 24 | Cloud Migration | 7h |
| 25 | Offshore Development Center | 7h |
| 26 | Software Development Outsourcing | 7h |
| 27 | SaaS Development | 7h |

**Total: 192-210 hours = 6-7 weeks at 30h/week**

---

## Quality Checklist (Run Before Committing Each Page)

### Content Quality
- [ ] 1,500+ words of actual content (not including code/markup)
- [ ] Primary keyword in H1, title tag, first paragraph, 1 H2
- [ ] 5+ internal links (2-3 services, 2-3 blog posts)
- [ ] 2+ external links to authoritative sources
- [ ] 6-10 FAQs with 40-80 word answers
- [ ] Clear value proposition in hero
- [ ] Process/how-it-works section
- [ ] Use cases or benefits section

### Technical SEO
- [ ] Metadata with primary keyword in title
- [ ] Description 140-160 characters
- [ ] Canonical URL set
- [ ] Service schema present
- [ ] FAQ schema present
- [ ] Breadcrumb schema present
- [ ] All external links have `target="_blank" rel="noopener noreferrer"`

### On-Page SEO
- [ ] H1 contains primary keyword exactly
- [ ] 2-3 H2s contain keyword variations
- [ ] First paragraph contains primary keyword
- [ ] Natural keyword density (1-2%, not stuffed)
- [ ] Image alt tags (if images added)
- [ ] Descriptive link anchor text (not "click here")

### User Experience
- [ ] Hero CTA above the fold
- [ ] Final CTA at bottom
- [ ] Related services links present
- [ ] Pricing (if applicable and realistic)
- [ ] No lorem ipsum or placeholder text
- [ ] Consistent tone and brand voice
- [ ] Mobile-responsive (test at 375px width)

---

## Two Critical Rules

### Rule 1: Pillar Pages Don't Chase Their Own Keyword

`/services/ai-software-development` (KD 54) and `/services/custom-software-development` exist to:
- Collect internal links from child pages
- Pass authority down to children
- Provide overview and navigation

**Do NOT try to rank them directly.** You'll lose to Clutch, G2, and directories.

Instead:
- Position as hub pages
- Add services grid linking to all child pages
- Focus on breadth, not depth
- Let child pages do the heavy lifting

### Rule 2: One Page, One Keyword

The current site has 25 identical meta keywords on every page = every page targets everything = every page targets nothing.

**Each page gets exactly one primary keyword:**
- One H1 with that keyword
- One title tag with that keyword
- First paragraph mentions it naturally
- 2-3 H2s with variations

Secondary keywords are fine, but there must be ONE clear target per page.

---

## Link Equity Distribution Strategy

### From Blog to Services
Each blog post should link to 1-2 relevant service pages:

- `ai-automation-india-2025` → AI Automation, AI Agent Development
- `custom-ai-software-development-india-2025` → AI Software Development, AI Consulting
- `llm-integration-guide` → AI Software Development, RAG Development
- `ai-agent-basics` → AI Agent Development, AI Automation
- `nextjs-seo-2025` → Web Development
- `react-native-vs-flutter` → Mobile App Development
- `cloud-migration-guide-indian-startups-2025` → Cloud Consulting, Cloud Migration
- `cloud-cost-optimisation` → Cloud Consulting, DevOps Services
- `ui-ux-design-trends-2025-india` → UI/UX Design, Product Design

### From Services to Services
- AI child pages link to AI Software Development pillar
- Custom Software child pages link to Custom Software Development pillar
- Related services in footer of each page
- Contextual links in intro paragraphs

### From Homepage
- Homepage should link to ALL pillar pages
- Consider adding services grid on homepage

---

## Tracking & Measurement

### Week 1 Baseline (Before Launch)
Run these and save results:
```bash
# Google Search Console
- Impressions for each keyword
- Average position
- Click-through rate

# Ahrefs/SEMrush
- Current ranking for each keyword
- Domain Rating
- Referring domains to /services/

# Analytics
- /services/ pageviews
- Bounce rate
- Time on page
- Conversions from service pages
```

### Monthly Check-Ins
Track:
1. **Keyword rankings** (target: top 20 in 3 months, top 10 in 6 months)
2. **Organic traffic to /services/** (target: +100% in 3 months)
3. **Conversions** (contact form, calls) from service pages
4. **Indexed pages** (all 27 should index within 2 weeks)
5. **Backlinks** (target: 5-10 natural links per quarter from content quality)

### Success Metrics (6-Month Goals)

| Metric | Baseline | 6-Month Target |
|--------|----------|----------------|
| Keywords in top 20 | 0 | 15+ |
| Keywords in top 10 | 0 | 8+ |
| Keywords in top 3 | 0 | 3+ |
| /services/ organic traffic | 100/mo | 500+/mo |
| Service page conversions | 2-3/mo | 15+/mo |
| Domain Rating | 0 | 10+ |

---

## Implementation Phases

### Phase 1: Foundation (Weeks 1-2) - ✅ 1/6 DONE
- [x] IT Staff Augmentation
- [ ] Cloud Consulting (rename)
- [ ] MVP Development
- [ ] Legacy Modernization
- [ ] AI Agent Development
- [ ] Custom Software Development (pillar)

**Commit after each page.** Don't batch 6 pages.

### Phase 2: Rebuild Existing (Weeks 3-4)
- [ ] AI Software Development (pillar)
- [ ] AI Automation
- [ ] Web Development
- [ ] Mobile App Development
- [ ] UI/UX Design
- [ ] Offshore Software Development

**Commit after every 2-3 pages.**

### Phase 3: Tier 2 Expansion (Weeks 5-7)
- [ ] Generative AI Development
- [ ] AI Consulting
- [ ] DevOps Services
- [ ] Data Engineering
- [ ] AI Chatbot Development
- [ ] API Development
- [ ] Digital Transformation

**Commit after every 2-3 pages.**

### Phase 4: Long Tail + Engagement (Week 8)
- [ ] RAG Development
- [ ] AI Integration
- [ ] QA Testing
- [ ] Product Design
- [ ] Cloud Migration
- [ ] Offshore Development Center
- [ ] Software Development Outsourcing
- [ ] SaaS Development

**Commit after every 2-3 pages.**

---

## Next Actions

1. **Immediate (Today):**
   - ✅ Commit IT Staff Augmentation page
   - Start Cloud Consulting rename/rebuild
   - Target: 1,800 words, KD 1, 6,400 vol

2. **This Week:**
   - Complete MVP Development (KD 2)
   - Complete Legacy Modernization (KD 4)
   - Complete AI Agent Development (KD 13, $15 CPC)

3. **This Month:**
   - Complete all Tier 1 pages (6 total)
   - Rebuild 3 existing pages
   - Submit updated sitemap to Google Search Console

4. **Month 2:**
   - Complete rebuild of remaining existing pages
   - Start Tier 2 pages
   - Begin tracking rankings weekly

---

## Template Files

Use `/app/services/it-staff-augmentation/page.tsx` as the template for all future pages.

**Key patterns to replicate:**
1. Metadata structure
2. Schema markup (Service, FAQ, Breadcrumb)
3. Section ordering (Hero → Intro → Capabilities → Process → Benefits → FAQ → CTA)
4. Internal/external linking in intro paragraph
5. Hover effects on cards (`.cp-card:hover`)
6. Responsive grid breakpoints
7. CTA placement (hero + footer)

---

## Contact for Questions

- **SEO Strategy:** This document
- **Content Template:** `/app/services/it-staff-augmentation/page.tsx`
- **Keyword Research:** See tables above
- **Timeline:** 6-8 weeks for full implementation

**Start with Phase 1, commit regularly, measure monthly.**
