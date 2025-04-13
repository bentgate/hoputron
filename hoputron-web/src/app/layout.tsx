import type { Metadata } from "next";
import { Orbitron, Geist_Mono } from "next/font/google";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "../../themes/theme";
import "./globals.css";
import Providers from "@hoputron/providers/reactQuery";
import { Navigation } from '@hoputron/components/Navigation';

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hoputron",
  description: "You friendly hop finder",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <html lang="en">
      <body
        className={`${orbitron.variable} ${geistMono.variable} antialiased`}
      >
        <Navigation />
        <Providers>
          <AppRouterCacheProvider>
            <ThemeProvider theme={theme}>
              <CssBaseline />
              {children}
            </ThemeProvider>
          </AppRouterCacheProvider>
        </Providers>
      </body>
    </html>
  );
}
