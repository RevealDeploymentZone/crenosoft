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
    "Crenosoft is an AI-first software development company in India specialising in AI software development, AI automation, web & mobile app development, and cloud solutions. Transform your business with intelligent technology.",
  keywords: [
    "AI software development India",
    "AI automation company",
    "artificial intelligence development",
    "machine learning solutions",
    "web development India",
    "mobile app development",
    "cloud solutions India",
    "generative AI development",
    "LLM integration",
    "AI consulting India",
    "Crenosoft",
    "software company India",
    "custom AI software",
    "AI automation services",
    "next.js development India",
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
      "Crenosoft builds intelligent software — from AI automation to full-stack web & mobile apps. We help Indian businesses and global startups harness AI to grow faster.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Crenosoft — AI Software Development Company",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Crenosoft — AI Software Development & Automation",
    description:
      "AI-first software development company in India. Build smarter with Crenosoft.",
    images: ["/og-image.png"],
    creator: "@crenosoft",
  },
  alternates: {
    canonical: "https://www.crenosoft.in",
  },
  verification: {
    google: "your-google-verification-code",
  },
  category: "technology",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#3d3d3d" />
        {/* Structured Data: Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Crenosoft",
              url: "https://www.crenosoft.in",
              logo: "https://www.crenosoft.in/logo.png",
              description:
                "Crenosoft is an AI-first software development and automation company based in India, helping businesses build intelligent technology solutions.",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+91-99999-99999",
                contactType: "Customer Service",
                areaServed: "IN",
                availableLanguage: ["English", "Hindi"],
              },
              sameAs: [
                "https://www.linkedin.com/company/crenosoft",
                "https://twitter.com/crenosoft",
                "https://github.com/crenosoft",
              ],
              founder: { "@type": "Person", name: "Crenosoft Team" },
              foundingDate: "2022",
              numberOfEmployees: { "@type": "QuantitativeValue", minValue: 10 },
              address: {
                "@type": "PostalAddress",
                addressCountry: "IN",
              },
            }),
          }}
        />
        {/* Structured Data: WebSite with SearchAction */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              url: "https://www.crenosoft.in",
              name: "Crenosoft",
              description: "AI Software Development & Automation Company in India",
              potentialAction: {
                "@type": "SearchAction",
                target: {
                  "@type": "EntryPoint",
                  urlTemplate: "https://www.crenosoft.in/blog?q={search_term_string}",
                },
                "query-input": "required name=search_term_string",
              },
            }),
          }}
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
