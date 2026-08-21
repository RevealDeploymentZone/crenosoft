import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.crenosoft.in"),
  title: {
    default: "Crenosoft — Leading AI Software Development Company in India | Custom Software Solutions",
    template: "%s | Crenosoft — AI Software Development India",
  },
  description:
    "Crenosoft is India's leading custom AI software development company. We build AI-powered software, automation systems, web apps, mobile apps, and cloud solutions for Indian businesses. Based in Lucknow, serving clients across India and globally since 2022.",
  keywords: [
    "Crenosoft",
    "Crenosoft India",
    "Crenosoft software company",
    "Crenosoft Lucknow",
    "Crenosoft AI development",
    "Crenosoft services",
    "AI software development India",
    "custom software development India",
    "AI automation company India",
    "machine learning development India",
    "web development company India",
    "mobile app development India",
    "cloud solutions India",
    "LLM integration India",
    "RAG system development",
    "software company Lucknow",
    "fintech software development India",
    "healthcare software India",
    "edtech software development India",
    "B2B SaaS development India",
    "UI UX design India",
    "Next.js development India",
    "React Native app development India",
    "AI consulting India",
    "custom AI software India",
    "best software development company India",
  ],
  authors: [{ name: "Crenosoft", url: "https://www.crenosoft.in" }],
  creator: "Crenosoft",
  publisher: "Crenosoft",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.crenosoft.in",
    siteName: "Crenosoft",
    title: "Crenosoft — Leading AI Software Development Company in India",
    description:
      "Crenosoft builds custom AI software, web and mobile apps, and automation systems for Indian businesses. Leading software development company based in Lucknow, India. 150+ projects delivered since 2022.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Crenosoft Logo — AI Software Development Company in India",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Crenosoft — Leading AI Software Development Company India",
    description:
      "Crenosoft builds custom AI software, web apps, and automation for Indian businesses. Leading software development company based in Lucknow, India.",
    images: ["/og-image.png"],
    creator: "@crenosoft",
    site: "@crenosoft",
  },
  alternates: {
    canonical: "https://www.crenosoft.in",
    languages: {
      "en-IN": "https://www.crenosoft.in",
    },
  },
  category: "technology",
  classification: "Software Development Company",
  referrer: "origin-when-cross-origin",
};

const orgSchema = {
  "@context": "https://schema.org",
  "@type": ["Organization", "ProfessionalService"],
  "@id": "https://www.crenosoft.in/#organization",
  name: "Crenosoft",
  legalName: "Crenosoft",
  url: "https://www.crenosoft.in",
  logo: {
    "@type": "ImageObject",
    url: "https://www.crenosoft.in/logo.png",
    width: "512",
    height: "512",
  },
  image: "https://www.crenosoft.in/og-image.png",
  description:
    "Crenosoft is a custom software development company based in Lucknow, India, specialising in AI software development, AI automation, web development, mobile app development, cloud solutions, and UI/UX design for Indian businesses and global startups.",
  foundingDate: "2022",
  address: {
    "@type": "PostalAddress",
    streetAddress: "551 KA/A154B, Azad Nagar, Alambagh",
    addressLocality: "Lucknow",
    addressRegion: "Uttar Pradesh",
    postalCode: "226005",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "26.8467",
    longitude: "80.9462",
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+91-83038-05307",
      contactType: "customer service",
      areaServed: "IN",
      availableLanguage: ["English", "Hindi"],
    },
    {
      "@type": "ContactPoint",
      telephone: "+91-99399-31010",
      contactType: "sales",
      areaServed: "IN",
      availableLanguage: ["English", "Hindi"],
    },
  ],
  email: "hello@crenosoft.in",
  sameAs: [
    "https://www.linkedin.com/company/crenosoft",
    "https://twitter.com/crenosoft",
    "https://github.com/crenosoft",
  ],
  knowsAbout: [
    "AI Software Development",
    "Machine Learning",
    "Large Language Models",
    "Retrieval-Augmented Generation",
    "AI Automation",
    "Web Development",
    "Mobile App Development",
    "Cloud Infrastructure",
    "Fintech Software Development",
    "Healthcare Software Development",
    "EdTech Software Development",
    "B2B SaaS Development",
    "DPDP Act Compliance",
    "RBI Regulatory Compliance",
    "ABDM Integration",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Software Development Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "AI Software Development", url: "https://www.crenosoft.in/services/ai-software-development" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "AI Automation", url: "https://www.crenosoft.in/services/ai-automation" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Web Development", url: "https://www.crenosoft.in/services/web-development" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Mobile App Development", url: "https://www.crenosoft.in/services/mobile-app-development" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Cloud Solutions", url: "https://www.crenosoft.in/services/cloud-solutions" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "UI/UX Design", url: "https://www.crenosoft.in/services/ui-ux-design" } },
    ],
  },
  areaServed: [
    { "@type": "Country", name: "India" },
    { "@type": "City", name: "Lucknow" },
    { "@type": "City", name: "Mumbai" },
    { "@type": "City", name: "Delhi" },
    { "@type": "City", name: "Bangalore" },
    { "@type": "City", name: "Hyderabad" },
  ],
  priceRange: "₹₹",
  numberOfEmployees: { "@type": "QuantitativeValue", minValue: 10 },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://www.crenosoft.in/#website",
  url: "https://www.crenosoft.in",
  name: "Crenosoft",
  description: "AI Software Development & Automation Company in India",
  publisher: { "@id": "https://www.crenosoft.in/#organization" },
  inLanguage: "en-IN",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://www.crenosoft.in/blog?q={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://www.crenosoft.in/#localbusiness",
  name: "Crenosoft",
  image: "https://www.crenosoft.in/og-image.png",
  url: "https://www.crenosoft.in",
  telephone: "+91-83038-05307",
  email: "hello@crenosoft.in",
  priceRange: "₹₹",
  description: "Custom AI software development company in Lucknow, India. We build AI-powered software, web apps, mobile apps, and cloud solutions for Indian businesses.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "551 KA/A154B, Azad Nagar, Alambagh",
    addressLocality: "Lucknow",
    addressRegion: "Uttar Pradesh",
    postalCode: "226005",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "26.8467",
    longitude: "80.9462",
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    opens: "00:00",
    closes: "23:59",
  },
  sameAs: [
    "https://www.linkedin.com/company/crenosoft",
    "https://twitter.com/crenosoft",
    "https://github.com/crenosoft",
  ],
  hasMap: "https://maps.google.com/?q=Azad+Nagar+Alambagh+Lucknow",
  currenciesAccepted: "INR",
  paymentAccepted: "UPI, Bank Transfer, Credit Card",
  areaServed: "India",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "50",
    bestRating: "5",
    worstRating: "1",
  },
  review: [
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Aditya Sharma" },
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      reviewBody: "The AI automation Crenosoft built handles what used to take our team 35 hours a week. It runs overnight, and by morning everything is processed. The payback period was under 4 months.",
      datePublished: "2025-06-01",
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Priya Mehta" },
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      reviewBody: "We migrated to Next.js App Router with Crenosoft and went from a PageSpeed score of 41 to 94. Organic traffic is up 37% since launch. Their team actually cares about the outcome, not just the invoice.",
      datePublished: "2025-05-15",
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Rahul Verma" },
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      reviewBody: "They navigated DPDP compliance requirements without us having to explain them. The enterprise security review that used to take 3 months was cleared in 3 weeks because the architecture was already right.",
      datePublished: "2025-04-20",
    },
  ],
};

const brandSchema = {
  "@context": "https://schema.org",
  "@type": "Brand",
  "@id": "https://www.crenosoft.in/#brand",
  name: "Crenosoft",
  alternateName: ["Crenosoft India", "Crenosoft Software"],
  url: "https://www.crenosoft.in",
  logo: {
    "@type": "ImageObject",
    url: "https://www.crenosoft.in/logo.png",
    width: "512",
    height: "512",
  },
  description: "Crenosoft is a leading AI software development company in India, specializing in custom software solutions, AI automation, and digital transformation for businesses.",
  slogan: "AI Software Development & Automation Company in India",
  foundingDate: "2022",
  foundingLocation: {
    "@type": "Place",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Lucknow",
      addressRegion: "Uttar Pradesh",
      addressCountry: "IN",
    },
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://www.crenosoft.in",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Crenosoft",
      item: "https://www.crenosoft.in",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What does Crenosoft do?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Crenosoft is a custom software development company based in Lucknow, India. We build AI-powered software, web apps, mobile apps, cloud infrastructure, and UI/UX design for Indian startups and enterprises. We have delivered 150+ projects since 2022.",
      },
    },
    {
      "@type": "Question",
      name: "How much does custom software development cost in India?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Custom software development costs in India typically range from ₹3–5 lakh for an MVP to ₹15–50 lakh for a full-featured enterprise product. AI-powered features, compliance requirements (DPDP, RBI, ABDM), and integrations with third-party systems affect the final price. Crenosoft provides free 45-minute discovery calls to give honest scope and cost estimates.",
      },
    },
    {
      "@type": "Question",
      name: "How long does it take to build a software product?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A well-scoped MVP typically takes 8–14 weeks to build and launch. Enterprise platforms with complex integrations take 4–9 months. At Crenosoft, every project starts with a discovery phase to define scope accurately before development begins, so there are no surprise delays.",
      },
    },
    {
      "@type": "Question",
      name: "Does Crenosoft build AI software for Indian businesses?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. AI software development is Crenosoft's core specialisation. We build custom LLMs, RAG (Retrieval-Augmented Generation) systems, ML models, and AI-powered SaaS products using models from OpenAI, Anthropic (Claude), Google Gemini, and open-source models like Llama and Mistral. We have shipped AI products for fintech, healthcare, logistics, and e-commerce companies across India.",
      },
    },
    {
      "@type": "Question",
      name: "Is Crenosoft DPDP compliant?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Crenosoft builds all software with Indian data compliance requirements built in from day one — including the Digital Personal Data Protection (DPDP) Act, RBI guidelines for fintech, and ABDM standards for healthcare software. We use AWS Mumbai (ap-south-1) region for data residency requirements.",
      },
    },
    {
      "@type": "Question",
      name: "Where is Crenosoft located?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Crenosoft is based in Lucknow, Uttar Pradesh, India (551 KA/A154B, Azad Nagar, Alambagh, Lucknow – 226005). We work with clients across India — Mumbai, Delhi, Bangalore, Hyderabad — as well as international clients in the US and Middle East.",
      },
    },
    {
      "@type": "Question",
      name: "What industries does Crenosoft serve?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Crenosoft builds software for fintech (RBI-compliant payment and lending platforms), healthcare (ABDM-compliant patient management and telemedicine), e-commerce and D2C (UPI integration, inventory automation), logistics (route optimisation and fleet tracking), EdTech (LMS and AI tutors), and B2B SaaS (multi-tenant platforms for Indian and global founders).",
      },
    },
    {
      "@type": "Question",
      name: "How do I get started with Crenosoft?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can book a free 45-minute discovery call through the Contact page at crenosoft.in/contact, or email hello@crenosoft.in. During the call, we review your product idea, ask the questions that matter, and give honest feedback on scope, timeline, and budget — whether we are the right fit or not.",
      },
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/x-icon" href="/favicon.ico" sizes="48x48" />
        <link rel="icon" type="image/png" href="/icon-192.png" sizes="192x192" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#F07336" />
        <meta name="geo.region" content="IN-UP" />
        <meta name="geo.placename" content="Lucknow" />
        <meta name="geo.position" content="26.8467;80.9462" />
        <meta name="ICBM" content="26.8467, 80.9462" />
        <meta name="format-detection" content="telephone=no" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(brandSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
