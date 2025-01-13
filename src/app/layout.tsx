"use client"; // Ensure this file is treated as a client-side component

import "../styles/globals.css";
import { GeistSans } from "geist/font/sans";
import { TRPCReactProvider } from "../trpc/react";
import ThemeDataProvider from "../context/theme-data-provider";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { metadata } from "./metadata";  // Import metadata

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  // Check if icons is defined and has elements
  const iconUrl = metadata.icons && Array.isArray(metadata.icons) && typeof metadata.icons[0] === "string" ? metadata.icons[0] : null;

  // Ensure description and title are valid strings
  const description = typeof metadata.description === 'string' ? metadata.description : "Default description";
  const title = typeof metadata.title === 'string' ? metadata.title : "Default title";

  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <head>
        {/* Use validated string values for meta tags */}
        <meta name="description" content={description} />
        <meta name="title" content={title} />
        {iconUrl && <link rel="icon" href={iconUrl} />}
      </head>
      <body>
        <NextThemesProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <ThemeDataProvider>
            <TRPCReactProvider>{children}</TRPCReactProvider>
          </ThemeDataProvider>
        </NextThemesProvider>
      </body>
    </html>
  );
}