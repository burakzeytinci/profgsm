"use client";

/* eslint-disable @next/next/next-script-for-ga */
import "./globals.css";
import { Roboto } from "next/font/google";
import { ThemeProvider } from "@material-tailwind/react";
import { ScrollToTop } from "@/components/scroll-to-top";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" dir="ltr">
      <head>
        <title>ProfGSM Bilişim</title>
        <meta name="description" content="ProfGSM Bilişim resmi web sitesi. Profesyonel bilgisayar, telefon, tablet tamir ve servis hizmetleri." />
        <link rel="shortcut icon" href="/favicon.png" type="image/png" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
          integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body className={roboto.className}>
        <ThemeProvider>
          <div className="relative">
            {children}
            <ScrollToTop />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
