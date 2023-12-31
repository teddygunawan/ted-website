import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import ThemeRegistry from "@/components/ThemeRegistry";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ted's Homestead",
  description: "Teddy Gunawan personal website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeRegistry options={{ key: "mui", prepend: true }}>
          {children}
        </ThemeRegistry>
      </body>
    </html>
  );
}
