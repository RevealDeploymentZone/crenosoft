import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.crenosoft.in"),
  title: {
    default: "Crenosoft — AI Software Development & Automation Company in India",
    template: "%s | Crenosoft",
  },
  description:
    "Crenosoft is a custom software development company in India specialising in AI software development, AI automation, web and mobile app development, cloud solutions, and UI/UX design for Indian businesses and global startups.",
  keywords: [
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
    "Crenosoft",
    "custom AI software India",
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
    title: "Crenosoft — AI Software Development & Automation Company in India",
    description:
      "Crenosoft builds custom AI software, web and mobile apps, and automation systems for Indian businesses. Based in Lucknow. Serving clients across India and globally.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Crenosoft — AI Software Development Company in India",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Crenosoft — AI Software Development & Automation",
    description:
      "Custom AI software, web apps, and automation for Indian businesses. Based in Lucknow.",
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
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#3d3d3d" />
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
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
