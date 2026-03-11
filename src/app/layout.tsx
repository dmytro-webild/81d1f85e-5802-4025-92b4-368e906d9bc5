import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Public_Sans } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";

const halant = Halant({
  variable: "--font-halant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const publicSans = Public_Sans({
  variable: "--font-public-sans",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Proof Digital | Transform Your Business with Digital Innovation",
  description: "Proof Digital is a leading digital agency offering strategic web design, development, and digital marketing solutions to help businesses transform and grow.",
  keywords: "digital agency, web design, web development, digital marketing, UX design, brand strategy, digital transformation",
  metadataBase: new URL("https://proofdigital.com"),
  alternates: {
    canonical: "https://proofdigital.com",
  },
  openGraph: {
    title: "Proof Digital | Digital Agency & Innovation",
    description: "Transform your digital presence with Proof Digital. We deliver strategic digital solutions including design, development, and marketing.",
    url: "https://proofdigital.com",
    siteName: "Proof Digital",
    type: "website",
    images: [
      {
        url: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AnBq6D5n9QzXjqBBaYaprIICzP/modern-creative-agency-workspace-with-di-1773218772315-473fb20e.png",
        alt: "Proof Digital - Digital Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Proof Digital | Transform Your Digital Presence",
    description: "Leading digital agency offering design, development, and marketing solutions for business growth.",
    images: [
      "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AnBq6D5n9QzXjqBBaYaprIICzP/modern-creative-agency-workspace-with-di-1773218772315-473fb20e.png",
    ],
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
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body
          className={`${halant.variable} ${publicSans.variable} ${inter.variable} antialiased`}
        >
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
          }}
        />
        </body>
      </ServiceWrapper>
    </html>
  );
}