import type { Metadata } from "next";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import { Providers } from "./providers";
import { MainLayout } from "@/components/templates/MainLayout/MainLayout";

export const metadata: Metadata = {
  title: "Speak with Native",
  description: "Learn how to use Speak with Native on web and mobile.",
};

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en">
      <body>
      <Providers>
        <MainLayout>{children}</MainLayout>
      </Providers>
      </body>
      </html>
  );
}