import type { Metadata } from "next";
import { Hanken_Grotesk } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/Providers/ThemeProviders";
import Navbar from "@/components/common/Navbar";
import { ViewTransitions } from "next-view-transitions";
import { TooltipProvider } from "@/components/ui/tooltip";
import Footer from "@/components/common/Footer";
import { Analytics } from '@vercel/analytics/next';
import GoToTop from "@/components/common/GoToTop";
import { generateMetadata as getMetadata } from "@/config/Meta.config";
import Blur from "@/components/common/Blur";

const hanken_Groktesk = Hanken_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-hanken",
});

export const metadata = getMetadata('/');

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      suppressHydrationWarning
      lang="en"
      className={cn(
        "h-full",
        "antialiased",
        hanken_Groktesk.variable,


      )}
    >
      <body suppressHydrationWarning className={hanken_Groktesk.className}>
        <ViewTransitions>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <TooltipProvider>
              <Navbar />

              {children}
              <Analytics />
              <GoToTop />
              <Footer />
              <Blur/>
            </TooltipProvider>
          </ThemeProvider>
        </ViewTransitions>

      </body>
    </html>
  );
}
