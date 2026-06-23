import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "sonner";
import Navbar from "@/components/navbar/Navbar";
import { ThemeProvider } from "@/components/providers/theme-provider";

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
        <ThemeProvider>
          <Navbar />
          {children}
          <Toaster richColors />
        </ThemeProvider>
      </body>
    </html>
  );
}