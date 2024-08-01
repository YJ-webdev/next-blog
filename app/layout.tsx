import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./components/ui/theme-provider";
import Footer from "./components/footer";
import { siteConfig } from "@/config/site";

const inter = Noto_Sans_KR({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: "선물, 추천, 이벤트, 할인, 추천 아이템",
  authors: [
    {
      name: "youjung",
      url: "https://github.com/YJ-webdev",
    },
  ],
  creator: "youjung",
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [`${siteConfig.url}/og`],
    creator: "@youjung",
  },
  icons: {
    icon: "/favicon.ico", 
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body className={inter.className}>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <main className="flex-1">{children}</main>
        <Footer />
      </ThemeProvider>
    </body>
  </html>
  );
}
