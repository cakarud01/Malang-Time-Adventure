
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Bromo Sunrise | Malang Time Adventure",
    template: "%s | Malang Time Adventure",
  },
  description:
    "Jelajahi keindahan Gunung Bromo bersama Malang Time Adventure. Pilihan paket Private Trip, Sharing Trip, dan Custom Trip dengan pemesanan mudah melalui WhatsApp.",
  keywords: [
    "Bromo Sunrise",
    "Wisata Bromo",
    "Paket Wisata Bromo",
    "Private Trip Bromo",
    "Sharing Trip Bromo",
    "Malang Time Adventure",
    "Wisata Jawa Timur",
  ],
  authors: [{ name: "Malang Time Adventure" }],
  openGraph: {
    title: "Bromo Sunrise | Malang Time Adventure",
    description:
      "Temukan pengalaman sunrise Gunung Bromo bersama Malang Time Adventure.",
    type: "website",
    locale: "id_ID",
    siteName: "Malang Time Adventure",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
