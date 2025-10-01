
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ReactNode } from "react";
import Header from '@/components/header'
import Footer from '@/components/footer'

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Phine Glow Hairs",
  description:
    "Phine Glow Hairs - Catering to all your hair needs with quality products and services.",
};

type RootLayoutProps = {
  children: ReactNode;
};

export default async function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <head>
        {/* Main Meta Tags */}
        <meta name="title" content="Phine Glow Hairs" />
        <meta
          name="description"
          content="The Official Website for Phine Glow Hairs"
        />

        {/* Open Graph Meta Tags for Social Media */}
        <meta property="og:title" content="Phine Glow Hairs" />
        <meta
          property="og:description"
          content="The Official Website for Phine Glow Hairs"
        />
        <meta property="og:image" content="https://yourwebsite.com/logo.png" />
        <meta property="og:url" content="https://yourwebsite.com" />
        <meta property="og:type" content="website" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:title" content="Phine Glow Hairs" />
        <meta
          name="twitter:description"
          content="The Official Website for Phine Glow Hairs"
        />
        <meta name="twitter:image" content="https://yourwebsite.com/logo.png" />
        <meta name="twitter:card" content="summary_large_image" />

        <link rel="icon" href="/icon.png" />
      </head>
      <body className={`${poppins.variable} antialiased`}>
        <>
          {/* <NavBar /> */}
          <Header/>
          <main>{children}</main>
          <Footer/>
          {/* <Footer /> */}
        </>
      </body>
    </html>
  );
}
