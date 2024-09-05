import type { Metadata } from "next";
import { Inter } from "next/font/google";
import MainHeader from "@/components/header/MainHeader";
import MainFooter from "@/components/footer/MainFooter";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  // favicon
  title: "Dr. Anannya - Top Dentist in Vadodara, India",
  description: "Dr. Anannya - Top Dentist in Vadodara, India",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen bg-slate-100">
          <MainHeader />
          <main className="flex-grow">{children}</main>
          <MainFooter />
        </div>
      </body>
    </html>
  );
}
