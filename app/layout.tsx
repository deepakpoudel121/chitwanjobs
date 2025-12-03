import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Chitwan Jobs",
  description: "Find your dream job in Chitwan, Nepal. Explore the latest job listings and career opportunities tailored for you.",
  icons: {
    icon: '/travel.png',
    shortcut: '/travel.png',
    apple: '/travel.png',
  },
  openGraph: {
    title: "Chitwan Jobs - Find Your Dream Job in Chitwan",
    description: "Find your dream job in Chitwan, Nepal. Explore the latest job listings and career opportunities tailored for you.",
    url: 'https://chitwanjobs.vercel.app',
    siteName: 'Chitwan Jobs',
    images: [
      {
        url: '/unnamed.jpg', // or use a specific og-image.png
        width: 1200,
        height: 630,
        alt: 'Chitwan Jobs - Local Job Opportunities',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Chitwan Jobs - Find Your Dream Job in Chitwan",
    description: "Find your dream job in Chitwan, Nepal. Explore the latest job listings and career opportunities tailored for you.",
    images: ['/unnamed.jpg'], // or use a specific twitter-image.png
  },
  metadataBase: new URL('https://chitwanjobs.vercel.app'), // Replace with your actual domain
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
