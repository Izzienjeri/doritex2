import type { Metadata } from "next";
import { Oswald, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CartProvider } from "@/context/CartContext";
import { AuthProvider } from "@/context/AuthContext";
import { Toaster } from "@/components/ui/sonner";
import { MobileFABLoader } from "@/components/layout/MobileFABLoader";

const fontSans = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-sans",
});

const fontDisplay = Oswald({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: "Champion Creative Series | CBC Books for Kenya",
  description:
    "Kenya’s trusted, KICD-approved CBC Creative Arts & Sports books for Grades 1–8. Boost your child's creativity with engaging, practical activities. Order now for fast delivery nationwide.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen font-sans antialiased",
          fontSans.variable,
          fontDisplay.variable
        )}
      >
        <AuthProvider>
          <CartProvider>
            <div className="relative flex min-h-dvh flex-col">
              <Header />
              <main className="flex-1">{children}</main>
              <Footer />
            </div>
            <MobileFABLoader />
            <Toaster richColors closeButton />
          </CartProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
