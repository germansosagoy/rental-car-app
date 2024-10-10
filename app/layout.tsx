import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NextTopLoader from 'nextjs-toploader';
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { esES} from '@clerk/localizations'
import { Toaster } from "@/components/ui/toaster";

const outfit = Inter({ subsets: ["latin"] }); 


export const metadata: Metadata = {
  title: "Rental Car App",
  description: "Application for renting cars",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider localization={esES}>
    <html lang="en">
      <body className={outfit.className}>
        <NextTopLoader color="#000"/>
        {children}
        <Toaster/>
      </body>
    </html>
    </ClerkProvider>
  );
}
