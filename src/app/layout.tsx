import type { Metadata } from "next";
import "./globals.css";
import Providers from "@/components/theme-provider";
import { Toaster } from "sonner";
import Navbar from "@/components/navbar/Navbar";

export const metadata: Metadata = {
  title: "CodeReview AI Lite",
  description: "AI powered code review platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning>
      <body>
        <Providers>
          <Navbar />
          {children}
          <Toaster richColors />
        </Providers>
      </body>
    </html>
  );
}