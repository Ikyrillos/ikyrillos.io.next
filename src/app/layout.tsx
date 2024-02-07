"use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./index.css";
import "./globals.css";
import "./output.css";
import NavBar from "@/components/navbar/NavBar";
import { QueryClientProvider } from "react-query";
import queryClient from "@/services/query_client";
import { info } from "console";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Kyrillos Maher</title>
      </head>
      <body className={inter.className}>
        <div>
          <QueryClientProvider client={queryClient}>
            <NavBar />
            {children}
          </QueryClientProvider>
        </div>
      </body>
    </html>
  );
}
