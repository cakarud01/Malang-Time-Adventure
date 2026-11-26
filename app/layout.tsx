
import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://bromosunrise.vercel.app";
const siteDescription =
  "Jelajahi Gunung Bromo saat sunrise dengan Private Trip, Open Trip, dan Private Long Jeep hingga 10 orang. Tanya paket dan rencanakan perjalanan via WhatsApp bersama Malang Time Adventure.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Wisata Bromo Sunrise | Malang Time Adventure",
    template: "%s | Malang Time Adventure",
  },
  description: siteDescription,
  applicationName: "Malang Time Adventure",
  category: "travel",
  keywords: [
    "wisata Bromo",
    "paket wisata Bromo",
    "Bromo sunrise",
    "private trip Bromo",
    "open trip Bromo",
    "long jeep Bromo",
    "Malang Time Adventure",
    "wisata Jawa Timur",
  ],
  authors: [{ name: "Malang Time Adventure" }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Paket Wisata Bromo Sunrise | Malang Time Adventure",
    description: siteDescription,
    type: "website",
    locale: "id_ID",
    siteName: "Malang Time Adventure",
    url: siteUrl,
    images: [
      {
        url: "/images/bromo-sunrise-og.jpg",
        width: 1200,
        height: 630,
        alt: "Sunrise Gunung Bromo dan jeep wisata Malang Time Adventure",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Paket Wisata Bromo Sunrise | Malang Time Adventure",
    description: siteDescription,
    images: ["/images/bromo-sunrise-og.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "TravelAgency",
      "@id": `${siteUrl}/#organization`,
      name: "Malang Time Adventure",
      url: siteUrl,
      description: siteDescription,
      image: `${siteUrl}/images/bromo-sunrise-og.jpg`,
      areaServed: {
        "@type": "AdministrativeArea",
        name: "Jawa Timur, Indonesia",
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+6285855500010",
        contactType: "customer service",
        availableLanguage: ["Indonesian", "English"],
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Paket Wisata Bromo",
        itemListElement: [
          {
            "@type": "Offer",
            price: "1500000",
            priceCurrency: "IDR",
            description: "Harga per Jeep",
            itemOffered: {
              "@type": "Service",
              name: "Private Trip Bromo",
              description:
                "Perjalanan sunrise Bromo dengan Jeep privat untuk satu rombongan. Rp1.500.000 per Jeep.",
            },
          },
          {
            "@type": "Offer",
            price: "350000",
            priceCurrency: "IDR",
            description: "Harga per orang",
            itemOffered: {
              "@type": "Service",
              name: "Open Trip Bromo",
              description:
                "Perjalanan Bromo dengan berbagi Jeep bersama tamu lain. Rp350.000 per orang.",
            },
          },
          {
            "@type": "Offer",
            price: "2500000",
            priceCurrency: "IDR",
            description: "Harga per Jeep",
            itemOffered: {
              "@type": "Service",
              name: "Private Trip Long Jeep Bromo",
              description:
                "Perjalanan privat dengan long Jeep berkapasitas hingga 10 orang. Rp2.500.000 per Jeep.",
            },
          },
        ],
      },
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Malang Time Adventure",
      inLanguage: "id-ID",
      publisher: {
        "@id": `${siteUrl}/#organization`,
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {children}
      </body>
    </html>
  );
}
