import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Nav from "@/components/Nav";
import WhatsappLive from "@/components/WhatsappLive";
import Footer from "@/components/Footer";

import { ReactLenis } from "@/utils/lenis";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Ayata Tour and Travel",
  description: "Ayata tour and travel.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <ReactLenis root>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <Nav />
          <main className="relative overflow-hidden">
            {children}
            <WhatsappLive />
          </main>
          <Footer />
        </body>
      </ReactLenis>
    </html>
  );
}