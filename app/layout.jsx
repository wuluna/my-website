import { Geist } from "next/font/google";
import { JetBrains_Mono } from "next/font/google";

import { Space_Grotesk } from "next/font/google";
import "./globals.css";

// components
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import LoadingEffect from "@/components/CircleTransition";

/*
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: '--font-jetbrainsMono'
})
*/

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk"
})

export const metadata = {
  title: "Luna Wu",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={spaceGrotesk.variable}>
        <Header />

        <LoadingEffect />
        <PageTransition>
        {children}
        </PageTransition>

        </body>
    </html>
  );
}

/*
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={spaceGrotesk.variable}>
        <Header />

        <PageTransition>
        {children}
        </PageTransition>

        {children}
        </body>
    </html>
  );
}
*/