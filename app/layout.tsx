import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";
import FloatingContact from "@/components/FloatingContact";
import AuthProvider from "@/components/AuthProvider";
import LuckyWheel from "@/components/LuckyWheel";

export const metadata: Metadata = {
  title: "Amir's Shop - Premium E-Commerce Platform",
  description: "Discover premium products across electronics, fashion, home goods, and more. Fast shipping, secure payments, and exceptional customer service at Amir's Shop.",
  keywords: ["e-commerce", "online shopping", "electronics", "fashion", "home goods", "premium products"],
  authors: [{ name: "Amir Tashdid" }],
  creator: "Amir Tashdid",
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  openGraph: {
    title: "Amir's Shop - Premium E-Commerce",
    description: "Shop premium products with fast shipping and secure checkout",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Amir's Shop",
    description: "Premium e-commerce platform with quality products",
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
      <body className="antialiased flex flex-col min-h-screen">
        <AuthProvider>
          <ThemeProvider>
            <Header />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
            <FloatingContact />
            <LuckyWheel />
          </ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
