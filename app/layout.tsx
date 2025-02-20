
import type { Metadata } from "next";
//import {Inter} from "next/font/google"
import localFont from "next/font/local";
import "./globals.css";
import Nav from "@/components/Nav";
import WhatsappLive from "@/components/WhatsappLive";
import Footer from "@/components/Footer";

import { ReactLenis } from "@/utils/lenis";

//const inter = Inter({ subsets: ["latin"] })

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
  title: {
    default: "Ayata Tour and Travel",
    template: "%s - Ayata Tour and Travel"
  },
  description: "Unlock your next travel destination.",
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