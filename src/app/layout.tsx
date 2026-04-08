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
// import { generateMetadata as getMetadata } from "@/config/Meta.config";
import Blur from "@/components/common/Blur";
import  type {Metadata}  from "next";
import Script from "next/script";

const hanken_Groktesk = Hanken_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-hanken",
});

export const metadata: Metadata = {
  title: {
    default: "Atharv dev singh full stack developer ",
    template: "%s | Microveda Lab",
  },
  description:
    "Atharv dev singh i'm a full stack developer based in india, i worked as a full stack developer ",

  keywords: [
    "Atharv Dev Singh",
    "University of Allahabad",
    "Full stack ",
    "Devops ",
    "Atharv",
    "Atharv dev ",
    "Backend",
    "Sanchetna",
    "Atharv Sanchetna",
  ],

  authors: [{ name: "Atharv Dev Singh" }],

  metadataBase: new URL("https://atharv.sanchetna.in"),

  openGraph: {
    title: "Atharv Dev singh",
    description:
    "Atharv dev singh i'm a full stack developer based in india, i worked as a full stack developer ",
    url: "https://atharv.sanchetna.in",
    siteName: "Atharv Dev Singh",
    type: "website",
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
              <Script 
              src="https://example-analytics.com/script.js" 
        strategy="afterInteractive"

              >

              </Script>

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
