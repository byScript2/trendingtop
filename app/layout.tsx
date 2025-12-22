import "./globals.css";
import type { Metadata } from "next";
import { Outfit, Orbitron, Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--normal",
  weight: ["400", "600", "700", "500", "800", "900"],
  display: "swap",
});
const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--special",
  weight: ["400", "600", "700", "500", "800", "900"],
  display: "swap",
});
const outfit = Outfit({
  subsets: ["latin"],
  variable: "--bold",
  weight: ["400", "600", "700", "500", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Trending Top Empowerment Foundation",
    template: "%s | Trending Top Empowerment Foundation",
  },
  description:
    "Trending Top Empowerment Foundation is a humanitarian organisation established in 2019, dedicated to supporting individuals and communities through empowerment programs, educational assistance, welfare outreach, and community development initiatives across Nigeria.",
  keywords: [
    "NGO in Nigeria",
    "Trending Top Empowerment Foundation",
    "Humanitarian organisation",
    "Community outreach",
    "Youth empowerment",
    "Educational support",
    "Street feeding initiative",
    "Orphanage support",
    "Elderly care",
    "Non-profit organisation",
  ],
  authors: [{ name: "Trending Top Empowerment Foundation" }],
  creator: "Trending Top Empowerment Foundation",
  publisher: "Trending Top Empowerment Foundation",

  openGraph: {
    title: "Trending Top Empowerment Foundation",
    description:
      "Supporting communities through empowerment, education, welfare outreach, and compassionate service since 2019.",
    url: "https://trendingtopfoundation.org",
    siteName: "Trending Top Empowerment Foundation",
    images: [
      {
        url: "/logo.png",
        width: 630,
        height: 630,
        alt: "Trending Top Empowerment Foundation outreach program",
      },
    ],
    locale: "en_NG",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Trending Top Empowerment Foundation",
    description:
      "A humanitarian organisation providing empowerment, welfare, and educational support to communities in need.",
    images: ["/logo.png"],
  },

  category: "Non-Profit Organisation",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${outfit.variable} ${orbitron.variable} ${inter.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
